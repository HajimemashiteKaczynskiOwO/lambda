import { prisma } from '$lib/index.ts';

export const load = async () => {
	try {
		const players = await prisma.player.findMany({
			include: {
				winsAsWinner: true
			},
			orderBy: { createdAt: 'desc' }
		});
		return { players };
	} catch (error) {
		console.error('Database error:', error);
		return { players: [] };
	}
};
