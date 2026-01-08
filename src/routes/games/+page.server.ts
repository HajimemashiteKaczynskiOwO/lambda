import { prisma } from '$lib';
import { redirect, fail } from '@sveltejs/kit';
import { requireAuth } from '$lib/auth';

export const load = async ({ cookies }) => {
	const user = await requireAuth(cookies);

	const players = await prisma.player.findMany({ orderBy: { username: 'asc' } });

	return { user, players };
};

export const actions = {
	match: async ({ request, cookies }) => {
		const user = await requireAuth(cookies);

		const data = await request.formData();
		const player1Id = data.get('player1Id') as string;
		const player2Id = data.get('player2Id') as string;
		const winnerChoice = data.get('winner') as string;

		if (!player1Id || !player2Id || !winnerChoice)
			return fail(400, { error: 'All fields required' });
		if (player1Id === player2Id) return fail(400, { error: 'Players must be different' });

		const player1 = await prisma.player.findUnique({
			where: { id: player1Id },
			select: { username: true }
		});
		const player2 = await prisma.player.findUnique({
			where: { id: player2Id },
			select: { username: true }
		});
		if (!player1 || !player2) return fail(400, { error: 'Player not found' });

		const winnerId = winnerChoice === 'player1' ? player1Id : player2Id;
		const loserId = winnerId === player1Id ? player2Id : player1Id;
		const winnerName = winnerChoice === 'player1' ? player1.username : player2.username;

		// 1️⃣ Create game
		await prisma.game.create({
			data: {
				player1Name: player1.username,
				player2Name: player2.username,
				winnerName,
				player1: { connect: { id: player1Id } },
				player2: { connect: { id: player2Id } },
				winner: { connect: { id: winnerId } },
				createdBy: { connect: { id: user.id } }
			}
		});

		// 2️⃣ Update winner stats
		const winner = await prisma.player.findUnique({
			where: { id: winnerId },
			select: { wins: true, matches: true }
		});
		await prisma.player.update({
			where: { id: winnerId },
			data: {
				wins: { increment: 1 },
				matches: { increment: 1 },
				winrate: winner && winner.matches + 1 > 0 ? (winner.wins + 1) / (winner.matches + 1) : 0
			}
		});

		// 3️⃣ Update loser stats
		const loser = await prisma.player.findUnique({
			where: { id: loserId },
			select: { wins: true, matches: true }
		});
		await prisma.player.update({
			where: { id: loserId },
			data: {
				losses: { increment: 1 },
				matches: { increment: 1 },
				winrate: loser && loser.matches + 1 > 0 ? loser.wins / (loser.matches + 1) : 0
			}
		});

		return { success: true };
	}
};
