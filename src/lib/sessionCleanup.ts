// src/lib/sessionCleanup.ts
export async function cleanupExpiredSessions() {
	const deleted = await prisma.session.deleteMany({
		where: {
			expiresAt: { lt: new Date() }
		}
	});

	console.log(`Cleaned up ${deleted.count} expired sessions`);
}

if (typeof window === 'undefined') {
	setInterval(cleanupExpiredSessions, 24 * 60 * 60 * 1000);
}
