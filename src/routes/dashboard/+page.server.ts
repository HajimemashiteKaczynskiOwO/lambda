import type { PageServerLoad } from './$types';
import { prisma } from '$lib';
import { redirect } from '@sveltejs/kit';
import { requireAuth } from '$lib/auth';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async ({ cookies }) => {
  const user = await requireAuth(cookies);

  if (!user) {
    throw redirect(303, '/login');
  }

  return { user };
};
