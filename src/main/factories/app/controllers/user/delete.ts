import { Controller } from '@/app/controllers';
import { UserDeleteController } from '@/app/controllers/user/delete';
import { makeUserDeleteUseCase } from '@/main/factories/domain/use-cases/user/delete';

export const makeUserDeleteController = (): Controller => {
    return new UserDeleteController(makeUserDeleteUseCase());
};    