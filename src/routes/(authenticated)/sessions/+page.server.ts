import type { Actions, PageServerLoad } from './$types';
import { prisma } from '$lib';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ parent, cookies }) => {
    // Get the already-validated user from the layout
    const { user } = await parent();
    
    const sessions = await prisma.session.findMany({
        where: { playerId: user.id },
        orderBy: { lastUsed: 'desc' },
        select: {
            id: true,
            sessionToken: true,
            createdAt: true,
            lastUsed: true,
            expiresAt: true
        }
    });
    
    const currentSessionToken = cookies.get('sessionToken');
    
    return {
        sessions,
        currentSessionToken
    };
}) satisfies PageServerLoad;

export const actions = {
    revokeSession: async ({ request, parent }) => {
        const { user } = await parent();
        const data = await request.formData();
        const sessionId = data.get('sessionId')?.toString();
        
        if (sessionId) {
            // Make sure the session belongs to this user before deleting
            await prisma.session.deleteMany({ 
                where: { 
                    id: sessionId,
                    playerId: user.id 
                } 
            });
        }
    },
    
   revokeAllSessions: async ({ cookies }) => {
    const sessionToken = cookies.get('sessionToken');
    const currentSession = await validateSession(sessionToken);
    
    if (currentSession) {
      // Ta bort alla andra sessions
      await prisma.session.deleteMany({
        where: { 
          userId: currentSession.user.id,
          id: { not: currentSession.id }
        }
      });
    }
}} satisfies Actions;  