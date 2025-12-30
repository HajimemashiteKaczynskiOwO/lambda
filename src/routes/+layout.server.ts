import { getUser } from '$lib/auth';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ cookies }) => {

  const user = await getUser(cookies);
  
  return {
    user: user // Nu tillgängligt i alla komponenter via data.user
  };
}) satisfies LayoutServerLoad;

// Exempel: I din create-action för forum/items/etc.
