'use server';

import { currentUser as getCurrentUser } from '@clerk/nextjs/server';

import { prisma } from '../prisma';
import { type CreateFormDto, CreateFormDtoSchema } from '@/dtos';

async function loadCurrentUser() {
  const currentUser = await getCurrentUser();

  if (!currentUser) throw new Error('User is not found !');

  return currentUser;
}

export async function loadFormStats() {
  const currentUser = await loadCurrentUser();

  let {
    _sum: {
      visitsCount: totalVisitsCount,
      submissionsCount: totalSubmissionsCount,
    },
  } = await prisma.form.aggregate({
    where: {
      userId: currentUser.id,
    },

    _sum: {
      visitsCount: true,
      submissionsCount: true,
    },
  });

  totalVisitsCount = totalVisitsCount || 0;
  totalSubmissionsCount = totalSubmissionsCount || 0;

  const submissionRate =
    totalVisitsCount > 0 ? (totalSubmissionsCount / totalVisitsCount) * 100 : 0;

  const bounceRate = 100 - submissionRate;

  return {
    totalVisitsCount,
    totalSubmissionsCount,

    submissionRate,
    bounceRate,
  };
}

export async function createForm(createFormDto: CreateFormDto) {
  const newFormFields = await CreateFormDtoSchema.parseAsync(createFormDto);

  const currentUser = await loadCurrentUser();

  return prisma.form.create({
    data: {
      userId: currentUser.id,
      ...newFormFields,
      content: '',
    },
  });
}
