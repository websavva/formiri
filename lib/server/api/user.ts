import { currentUser as getCurrentUser } from '@clerk/nextjs/server';

export async function loadCurrentUser() {
  const currentUser = await getCurrentUser();

  if (!currentUser) throw new Error('User is not found !');

  return currentUser;
}
