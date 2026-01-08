import { getUser } from '$lib/auth';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ cookies }) => {
	const user = await getUser(cookies);

	return {
		user: user 
	};
}) satisfies LayoutServerLoad;

