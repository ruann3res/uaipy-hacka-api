import { Controller } from '@/app/controllers';
import { UserSignInController } from '@/app/controllers/';
import { makeUserSignInUseCase } from '@/main/factories/domain/use-cases/auth/sign-in';

export const makeUserSignInController = (): Controller => {
    return new UserSignInController(makeUserSignInUseCase());
};