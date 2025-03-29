import {
  PrismaClient,
  PrismaUserRepository,
} from '@/domain/contracts/repository/prisma';

export const makePrismaUserRepository = (): PrismaUserRepository =>
  new PrismaUserRepository(PrismaClient);
