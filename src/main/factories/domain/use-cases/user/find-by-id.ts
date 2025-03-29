import {
  UserFindByIdUseCase,
  setupUserFindByIdUseCase,
} from '@/domain/use-cases';
import {
  makePrismaUserRepository,
} from '@/main/factories/domain/contracts/repository/prisma';

export const makeUserFindByIdUseCase = (): UserFindByIdUseCase =>
  setupUserFindByIdUseCase(
    makePrismaUserRepository(),
  );
