import type { PageServerLoad } from './$types';
import { prisma } from '$lib';
import { redirect } from '@sveltejs/kit';
import { requireAuth } from '$lib/auth';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

const ALLOWED_MIME_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export const load: PageServerLoad = async ({ cookies }) => {
	const session = await requireAuth(cookies);
	if (!session) {
		throw redirect(303, '/login');
	}
	const user = await prisma.Player.findUnique({
		where: { id: session.id },
		include: {
			profilePicture: true
		}
	});
	return { user };
};

export const actions: Actions = {
	upload: async ({ request, cookies }) => {
		const user = await requireAuth(cookies);
		if (!user) {
			return fail(401, { error: 'Not authenticated' });
		}

		const data = await request.formData();
		const file = data.get('image') as File;

		// Check if file exists
		if (!file || file.size === 0) {
			return fail(400, { error: 'No file uploaded' });
		}

		// Validate file type
		if (!ALLOWED_MIME_TYPES.includes(file.type)) {
			return fail(400, { error: 'Invalid file type. Only PNG, JPEG, and WebP are allowed' });
		}

		// Validate file size
		if (file.size > MAX_FILE_SIZE) {
			return fail(400, { error: 'File too large. Maximum size is 5MB' });
		}

		// Validate image magic bytes
		const buffer = await file.arrayBuffer();
		const bytes = new Uint8Array(buffer);

		if (!isValidImageFile(bytes, file.type)) {
			return fail(400, { error: 'File is not a valid image' });
		}

		// Convert to base64
		const encoding = Buffer.from(buffer).toString('base64');
		const url = `data:${file.type};base64,${encoding}`;

		try {
			await prisma.Image.upsert({
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
		} catch (error) {
			console.error('Upload error:', error);
			return fail(500, { error: 'Error uploading image' });
		}
	},

	delete: async ({ cookies }) => {
		const user = await requireAuth(cookies);
		if (!user) {
			return fail(401, { error: 'Not authenticated' });
		}

		try {
			await prisma.Image.deleteMany({
				where: {
					playerId: user.id
				}
			});

			return redirect(303, '/dashboard');
		} catch (error) {
			console.error('Delete error:', error);
			return fail(500, { error: 'Error deleting image' });
		}
	}
};

// Helper function to validate image magic bytes
function isValidImageFile(bytes: Uint8Array, mimeType: string): boolean {
	// PNG: 89 50 4E 47
	if (mimeType === 'image/png') {
		return bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47;
	}

	// JPEG: FF D8 FF
	if (mimeType === 'image/jpeg' || mimeType === 'image/jpg') {
		return bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
	}

	// WebP: 52 49 46 46 ... 57 45 42 50
	if (mimeType === 'image/webp') {
		return (
			bytes[0] === 0x52 &&
			bytes[1] === 0x49 &&
			bytes[2] === 0x46 &&
			bytes[3] === 0x46 &&
			bytes[8] === 0x57 &&
			bytes[9] === 0x45 &&
			bytes[10] === 0x42 &&
			bytes[11] === 0x50
		);
	}

	return false;
}
