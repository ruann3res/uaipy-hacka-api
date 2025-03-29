import { Controller } from '@/app/controllers';
import { Request, Response, badRequest, ok } from '@/app/helpers';

import { BadRequestError } from '@/domain/entities/errors';
import { UserListUseCase } from '@/domain/use-cases/user';

type Model = Error | boolean;

export class UserListController extends Controller<void> {
  constructor(private readonly userListUseCase: UserListUseCase) {
    super();
  }

  async perform(): Promise<Response<Model>> {
    try {
      await this.userListUseCase();
      return ok(true);
    } catch (error) {
      if (error instanceof BadRequestError) return badRequest(error);
      throw error;
    }
  }
}
