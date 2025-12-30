import { prisma } from "$lib/index.ts";

export const load = async () => {
  try {
    const players = await prisma.player.findMany({
      include: { 
        winsAsWinner: true,
      },
      orderBy: { createdAt: 'desc' },
    });
    return { players };
  } catch (error) {
    console.error('Database error:', error);
    return { players: [] };
  }
};
export const actions = {
  create: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get('name') as string;

    if (!name || name.trim().length === 0) {
      return { success: false, error: 'Name is required' };
    }

    await prisma.player.create({
      data: {
        username: name,   
        createdAt: new Date(),
        winrate: 0,
        wins: 0,
        losses: 0,
      },
    });

    return { success: true };
  }
};
