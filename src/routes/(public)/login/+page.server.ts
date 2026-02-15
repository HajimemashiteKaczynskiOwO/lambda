import type { Actions } from './$types';
import { prisma } from '$lib';
import { fail, redirect } from '@sveltejs/kit';
import * as crypto from 'node:crypto';
import { generateSessionToken, validateSession, createSession } from '$lib/auth.ts';

// Lägg till hash-funktionerna
function hashPassword(password: string): { salt: string; hash: string } {
	const salt = crypto.randomBytes(16).toString('hex');
	const hash = crypto.pbkdf2Sync(password, salt, 30000, 64, 'sha512').toString('hex');
	return { salt, hash };
}

function validatePassword(inputPassword: string, storedSalt: string, storedHash: string): boolean {
	const hash = crypto.pbkdf2Sync(inputPassword, storedSalt, 30000, 64, 'sha512').toString('hex');
	return crypto.timingSafeEqual(Buffer.from(storedHash, 'hex'), Buffer.from(hash, 'hex'));
}

const failedAttempts = new Map<string, { count: number; lastAttempt: Date }>();

export const actions: Actions = {
	register: async ({ request, cookies }) => {
		const data = await request.formData();
		const username = data.get('new-username');
		const password = data.get('new-password')?.toString();

		if (!username || username.toString().trim() === '') {
			return fail(400, { error: 'Username needed' });
		}
		if (!password || password.toString().trim() === '') {
			return fail(400, { error: 'Password needed' });
		}
		if (username.toString().length < 3) {
			return fail(400, { error: 'Username too short! Enter more than 3 characters' });
		}
		if (username.toString().length > 16) {
			return fail(400, { error: 'Username too long! Enter less than 16 characters' });
		}
		const usernameRegex = /^[a-zA-Z0-9_]+$/;
		if (!usernameRegex.test(username.toString())) {
			return fail(400, { error: 'Username contains invalid characters' });
		}
		const passwordErrors = validatePasswordStrength(password.toString());
		if (passwordErrors.length > 0) {
			return fail(400, { error: passwordErrors.join('. ') });
		}

		const normalizedUsername = username.toString().trim().toLowerCase();

		const existingUser = await prisma.Player.findUnique({
			where: { username: normalizedUsername }
		});

		if (existingUser) {
			return fail(400, { error: 'Username already exists.' });
		}

		const { salt, hash } = hashPassword(password);

		try {
			const newUser = await prisma.Player.create({
				data: {
					username: normalizedUsername,
					salt: salt,
					hash: hash,
					lastActive: new Date()
				}
			});

			const session = await createSession(newUser.id);

			cookies.set('sessionToken', session.sessionToken, {
				// Changed from 'userId' to 'sessionToken'
				path: '/',
				maxAge: 60 * 60 * 24 * 7,
				secure: false,
				httpOnly: true
			});
		} catch (error) {
			console.error('Register error:', error);
			return fail(500, { error: 'Error creating user' });
		}
		throw redirect(303, '/dashboard');
	},

	login: async ({ request, cookies, getClientAddress }) => {
		const clientIP = getClientAddress();
		const attempts = failedAttempts.get(clientIP);

		if (attempts && attempts.count >= 5) {
			const timeSinceLastAttempt = Date.now() - attempts.lastAttempt.getTime();
			if (timeSinceLastAttempt < 20 * 60 * 1000) {
				return fail(429, { error: 'Too many attempts, try again in 20 minutes.' });
			} else {
				failedAttempts.delete(clientIP);
			}
		}

		const data = await request.formData();
		const username = data.get('username')?.toString();
		const password = data.get('password')?.toString();

		const rememberMe = data.get('rememberMe') === 'on';

		const dummySalt = 'dummysalt123456789abc33def1234567389abcdef';
		const dummyHash = 'dummyhash123456789abcdef13323456733389abcdef123456789abcdef123456789abcdef';

		if (!username || !password) {
			return fail(400, { error: 'Username and password required' });
		}

		try {
			const normalizedUsername = username.trim().toLowerCase();
			const user = await prisma.Player.findUnique({
				where: { username: normalizedUsername }
			});

			const isValidPassword = user
				? validatePassword(password, user.salt, user.hash)
				: validatePassword(password, dummySalt, dummyHash);

			if (!user || !isValidPassword) {
				const current = failedAttempts.get(clientIP) || { count: 0, lastAttempt: new Date() };
				failedAttempts.set(clientIP, {
					count: current.count + 1,
					lastAttempt: new Date()
				});
				return fail(400, { error: 'Invalid username or password' });
			}

			await prisma.Player.update({
				where: { id: user.id },
				data: {
					lastActive: new Date()
				}
			});

			const session = await createSession(user.id);

			cookies.set('sessionToken', session.sessionToken, {
				path: '/',
				maxAge: 60 * 60 * 24 * 7,
				secure: false,
				httpOnly: true
			});

			failedAttempts.delete(clientIP);
		} catch (error) {
			console.error('Login error:', error);
			return fail(500, { error: 'Error during login' });
		}

		throw redirect(303, '/dashboard');
	},

	logout: async ({ cookies }) => {
		const sessionToken = cookies.get('sessionToken');
		if (sessionToken) {
			await prisma.session.delete({ where: { sessionToken } }).catch(() => {});
		}
		cookies.delete('sessionToken', { path: '/' });
		throw redirect(303, '/login');
	}
};

//functions
function validatePasswordStrength(password: string): string[] {
	const errors: string[] = [];

	if (password.length < 8) {
		errors.push('Lösenordet måste vara minst 8 tecken');
	}

	if (!/[A-Z]/.test(password)) {
		errors.push('Lösenordet måste innehålla minst en stor bokstav');
	}

	if (!/[a-z]/.test(password)) {
		errors.push('Lösenordet måste innehålla minst en liten bokstav');
	}

	if (!/[0-9]/.test(password)) {
		errors.push('Lösenordet måste innehålla minst en siffra');
	}

	if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
		errors.push('Lösenordet måste innehålla minst ett specialtecken');
	}

	const commonPasswords = ['password', '123456', 'qwerty', 'abc123', 'password123'];
	if (commonPasswords.includes(password.toLowerCase())) {
		errors.push('Detta lösenord är för vanligt och osäkert');
	}

	return errors;
}
