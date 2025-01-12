'use server';

import { currentUser as fetchCurrentUser } from '@clerk/nextjs/server';

import { prisma } from '../prisma';
import { type CreateFormDto, CreateFormDtoSchema } from '@/dtos';

async function getCurrentUser() {
  const currentUser = await fetchCurrentUser();

  if (!currentUser) throw new Error('User is not found !');

  return currentUser;
}

export async function getFormStats() {
  const currentUser = await getCurrentUser();

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

  const currentUser = await getCurrentUser();

  return prisma.form.create({
    data: {
      userId: currentUser.id,
      ...newFormFields,
      content: '',
    },
  });
}

export async function getForms() {
  const currentUser = await getCurrentUser();

  return prisma.form.findMany({
    where: {
      userId: currentUser.id,
    },
  });
}

export async function getFormById(id: number) {
  const currentUser = await getCurrentUser();

  const form = await prisma.form.findUnique({
    where: {
      id,
      userId: currentUser.id,
    },
  });

  if (!form) throw new Error(`Form with id "${id}" was not found`);

  return form;
}
