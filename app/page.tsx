'use server';

import { prisma } from '@/lib/prisma';

export default async function Home() {
  const forms = await prisma.form.findMany();

  return <h1>{JSON.stringify(forms, null, 2)}</h1>;
}
