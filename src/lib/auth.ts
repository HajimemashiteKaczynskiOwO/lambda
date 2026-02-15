import { prisma } from '$lib';
import { redirect } from '@sveltejs/kit';
import crypto from 'node:crypto';

export async function requireAuth(cookies: any) {
	const sessionToken = cookies.get('sessionToken');
	if (!sessionToken) {
		throw redirect(302, '/login');
	}

	const session = await prisma.session.findUnique({
		where: { sessionToken: sessionToken },
		include: { player: true }
	});

	if (!session || !session.player) {
		cookies.delete('sessionToken', { path: '/' });
		throw redirect(302, '/login');
	}
	if (isSessionExpired(session.expiresAt)) {
		cookies.delete('sessionToken', { path: '/' });
		throw redirect(303, '/login');
	}

	await prisma.session.update({
		where: { id: session.id },
		data: { lastUsed: new Date() }
	});

	return session.player;
}

export async function getUser(cookies: any) {
	const sessionToken = cookies.get('sessionToken');
	if (!sessionToken) return null;

	const session = await prisma.session.findUnique({
		where: { sessionToken: sessionToken },
		include: { player: true }
	});

	if (!session || !session.player || isSessionExpired(session.expiresAt)) {
		return null;
	}

	return session.player;
}
export function generateSessionToken(): string {
	return crypto.randomBytes(64).toString('base64url');
}

export function isSessionExpired(expiresAt: Date): boolean {
	return new Date() > expiresAt;
}
export async function validateSession(token: string | undefined) {
	if (!token) {
		return null;
	}

	const session = await prisma.session.findUnique({
		where: { sessionToken: token },
		include: { player: true }
	});
	if (!session || !session.player || isSessionExpired(session.expiresAt)) {
		return null;
	}

	// Uppdatera lastUsed
	await prisma.session.update({
		where: { id: session.id },
		data: { lastUsed: new Date() }
	});

	return session.player;
}

export function getExpirationDate(daysFromNow: number = 7): Date {
	const date = new Date();
	date.setDate(date.getDate() + daysFromNow);
	return date;
}

export async function createSession(playerId: string, daysValid: number = 7) {
	const sessionToken = generateSessionToken();
	const expiresAt = getExpirationDate(daysValid);

	const session = await prisma.session.create({
		data: { sessionToken, playerId, expiresAt }
	});

	return session;
}
