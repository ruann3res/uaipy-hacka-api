import { Controller } from '@/app/controllers';
import { UserListController } from '@/app/controllers/user/list';
import { makeUserListUseCase } from '@/main/factories/domain/use-cases/user/list';

export const makeUserListController = (): Controller => {
    return new UserListController(makeUserListUseCase());
};