import {
  UserDeleteUseCase,
  setupUserDeleteUseCase,
} from '@/domain/use-cases';
import {
  makePrismaUserRepository,
} from '@/main/factories/domain/contracts/repository/prisma';

export const makeUserDeleteUseCase = (): UserDeleteUseCase =>
  setupUserDeleteUseCase(
    makePrismaUserRepository(),
  );
