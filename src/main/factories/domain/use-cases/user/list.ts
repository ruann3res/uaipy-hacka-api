import {
  UserListUseCase,
  setupUserListUseCase,
} from '@/domain/use-cases';
import {
  makePrismaUserRepository,
} from '@/main/factories/domain/contracts/repository/prisma';

export const makeUserListUseCase = (): UserListUseCase =>
  setupUserListUseCase(makePrismaUserRepository());
