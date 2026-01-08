import { prisma } from '$lib';
import { redirect } from '@sveltejs/kit';

export async function requireAuth(cookies: any) {
	const userId = cookies.get('userId');

	if (!userId) {
		redirect(302, '/login');
	}

	const user = await prisma.player.findUnique({
		where: { id: userId }
	});

	if (!user) {
		cookies.delete('userId', { path: '/' });
		redirect(303, '/login');
	}

	return user;
}

export async function getUser(cookies: any) {
	const userId = cookies.get('userId');
	if (!userId) return null;

	const user = await prisma.player.findUnique({
		where: { id: userId }
	});
	return user || null;
}
