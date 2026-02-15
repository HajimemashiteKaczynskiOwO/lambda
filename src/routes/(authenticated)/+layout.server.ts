import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { prisma } from '$lib';

export const load = (async ({ cookies, parent }) => {
	try {
		const parentData = await parent();
		const sessionToken = cookies.get('sessionToken');
		console.log('Authenticated layout - sessionToken:', sessionToken);

		if (!sessionToken) {
			throw redirect(307, '/login');
		}

		const session = await prisma.session.findUnique({
			where: { sessionToken: sessionToken },
			select: {
				player: {
					select: {
						id: true,
						username: true,
						tokenCreatedAt: true
					}
				}
			}
		});

		console.log('Authenticated layout - session found:', session);

		if (!session?.player) {
			cookies.delete('sessionToken', { path: '/' });
			throw redirect(307, '/login');
		}

		const user = session.player;

		if (user.tokenCreatedAt) {
			const now = new Date();
			const diffInMs = now.getTime() - user.tokenCreatedAt.getTime();
			const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

			if (diffInDays > 7) {
				cookies.delete('sessionToken', { path: '/' });
				throw redirect(307, '/login');
			}
		}

		return {
			...parentData,
			user
		};
	} catch (error) {
		// Re-throw redirects
		if (error instanceof Response) {
			throw error;
		}
		// Log other errors
		console.error('Error in authenticated layout:', error);
		throw error;
	}
}) satisfies LayoutServerLoad;
