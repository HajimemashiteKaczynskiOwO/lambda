import { prisma } from '$lib/index.ts';

export const load = async ({ params }) => {
	try {
		const player = await prisma.player.findUnique({
			where: { id: params.id },
			include: {
				gamesAsPlayer1: true,
				gamesAsPlayer2: true,
				winsAsWinner: true
			}
		});

		if (!player) return { player: null, matches: [] };

		// Combine matches and sort by date (newest first)
		const matches = [...player.gamesAsPlayer1, ...player.gamesAsPlayer2].sort(
			(a, b) => new Date(b.createdAt) - new Date(a.createdAt)
		);

		return { player, matches };
	} catch (error) {
		console.error('Database error:', error);
		return { player: null, matches: [] };
	}
};
