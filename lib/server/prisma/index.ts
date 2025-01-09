import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

const createPrismaClient = () => {
  const connectionString = process.env.POSTGRES_URL;
  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);

  return new PrismaClient({ adapter });
};

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = createPrismaClient();
} else {
  if (!(global as any).globalPrisma) {
    (global as any).globalPrisma = createPrismaClient();
  }
  prisma = (globalThis as any).globalPrisma;
}

export { prisma };
