import { UserSignInUseCase } from '@/domain/use-cases/auth/sign-in';
import { setupUserSignInUseCase } from '@/domain/use-cases/auth/sign-in';
import { makePrismaUserRepository } from '@/main/factories/domain/contracts/repository/prisma';

export const makeUserSignInUseCase = (): UserSignInUseCase => {
    return setupUserSignInUseCase(makePrismaUserRepository());
};