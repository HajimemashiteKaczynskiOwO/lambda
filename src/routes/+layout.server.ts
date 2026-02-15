import { getUser } from '$lib/auth';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ cookies }) => {
	const user = await getUser(cookies);
	const theme = cookies.get('theme') || 'dark'; // default to dark theme bc who likes light!

	return {
		user: user,
		theme: theme
	};
}) satisfies LayoutServerLoad;
