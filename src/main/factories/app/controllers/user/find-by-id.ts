import { Controller } from '@/app/controllers';
import { UserFindByIdController } from '@/app/controllers/user/find-by-id';
import { makeUserFindByIdUseCase } from '@/main/factories/domain/use-cases/user/find-by-id';

export const makeUserFindByIdController = (): Controller => {
    return new UserFindByIdController(makeUserFindByIdUseCase());
};    