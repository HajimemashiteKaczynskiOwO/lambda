import type { PageServerLoad } from './$types';
import { prisma } from '$lib';
import { redirect } from '@sveltejs/kit';
import { requireAuth } from '$lib/auth';

export const load: PageServerLoad = async ({ cookies }) => {
	const session = await requireAuth(cookies);
	if (!session) {
		throw redirect(303, '/login');
	}

	const user = await prisma.player.findUnique({
		where: { id: session.id },
		include: {
			profilePicture: true
		}
	});

	return { user };
};

export const actions: Actions = {
upload: async ({ request,cookies }) => {
	const user = await requireAuth(cookies);
		if (!user) {
			return fail(401, { success: false, message: 'Not authenticated' });
		}
	
    const data = await request.formData();
    const file = data.get('image') as File;
    
    
	//check if file
	if (!file || file.size === 0) {
		return { success: false, message: 'Ingen fil uppladdad.' };
	}

	const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
		if (!allowedTypes.includes(file.type)) {
			throw new Error('bad filetype.');
		}
	//check file size (max 10MB)
	if (file.size > 10 * 1024 * 1024) {
		return { success: false, message: 'Filen är för stor (max 10MB).' };
	}
	const encoding = Buffer.from(await file.arrayBuffer()).toString('base64');
	const url = `data:${file.type};base64,${encoding}`;

	await prisma.image.upsert({
			where: {
				playerId: user.id
			},
			update: {
				encoding,
				url
			},
			create: {
				encoding,
				url,
				player: {
					connect: { id: user.id }
				}
			}
		});
	
	return redirect(303, '/dashboard');
	}
};
