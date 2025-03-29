import {
  UserCreateUseCase,
  setupUserCreateUseCase,
} from '@/domain/use-cases';
import {
  makePrismaUserRepository,
} from '@/main/factories/domain/contracts/repository/prisma';

export const makeUserCreateUseCase = (): UserCreateUseCase =>
  setupUserCreateUseCase(
    makePrismaUserRepository(),
  );
