import { Controller } from '@/app/controllers';
import { UserCreateController } from '@/app/controllers/user/create';
import { makeUserCreateUseCase } from '@/main/factories/domain/use-cases/user/create';

export const makeUserCreateController = (): Controller => {
    return new UserCreateController(makeUserCreateUseCase());
};