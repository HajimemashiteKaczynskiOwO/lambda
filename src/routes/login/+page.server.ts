import type { Actions } from './$types';
import { prisma } from '$lib';
import { fail, redirect } from '@sveltejs/kit';

export const actions: Actions = {
	register: async ({ request, cookies }) => {
		// Din uppgift: Få data från formuläret
		const data = await request.formData();
		const username = data.get('new-username');
		const password = data.get('new-password');

		// Din uppgift: Validering - vad ska du kolla?
		if (!username || username.toString().trim() === '') {
			return fail(400, { error: 'Username needed' });
		}

		// Lägg till fler valideringar:
		// - Password för kort? yes:
		if (!password || password.toString().trim() === '') {
			return fail(400, { error: 'Password needed' });
		}
    if (password.toString().length < 6) {
      return fail(400, { error: 'Password too short! Enter more than 6 characters' });
    }
		// - Username för kort? yis:
		if (username.toString().length < 3) {
			return fail(400, { error: 'Username too short! Enter more than 3 characters' });
		}
    //långt?
    if (username.toString().length > 16) {
      return fail(400, { error: 'Username too long! Enter less than 16 characters' });
    }
		// - Ogiltiga tecken? yup:
		const usernameRegex = /^[a-zA-Z0-9_]+$/;
		if (!usernameRegex.test(username.toString())) {
			return fail(400, { error: 'Username contains invalid characters' });
		}

  const normalizedUsername = username.trim().toLowerCase();

  const existingUser = await prisma.player.findUnique({
    where: { username: normalizedUsername }
  });

  if (existingUser) {
    return fail(400, { error: 'Username already exists.' });
  }

		try {
			const newUser = await prisma.player.create({
				data: {
					username: normalizedUsername,
					password: password.toString()
				}
			});

			cookies.set('userId', newUser.id.toString(), {
				path: '/',
				maxAge: 60 * 60 * 24 * 7, // en vecka i sekunder
				secure: false,
				httpOnly: true
			});

			// Vart ska användaren skickas efter registrering?
      console.log('User registered:', newUser.username +'or'+ normalizedUsername);
			throw redirect(303, '/dashboard');
		} catch (error) {
			return fail(500, { error: 'Error creating user' });
		}
	},

	login: async ({ request, cookies }) => {
		const data = await request.formData();
		const username = data.get('username')?.toString();
		const password = data.get('password')?.toString();

		if (!username || !password) {
			return fail(400, { error: 'Username and password required' });
		}
    const normalizedUsername = username.trim().toLowerCase();
		const user = await prisma.player.findUnique({
			where: { username: normalizedUsername }
		});

		if (!user || user.password !== password) {
			return fail(400, { error: 'Invalid username or password' });
		}

		cookies.set('userId', user.id, {
			path: '/',
			maxAge: 60 * 60 * 24 * 7,
			secure: false,
			httpOnly: true
		});

		console.log('User logged in:', user.username);
		throw redirect(303, '/dashboard');
	},

	logout: async ({ cookies }) => {
		cookies.delete('userId', { path: '/' });
		throw redirect(303, '/login');
	}
};
