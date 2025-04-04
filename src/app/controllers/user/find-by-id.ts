import { Controller } from '@/app/controllers';
import { Request, Response, badRequest, notFound, ok } from '@/app/helpers';
import { ValidationBuilder, Validator } from '@/app/validation';
import { BadRequestError, NoDataFoundError } from '@/domain/entities/errors';
import { UserFindByIdUseCase } from '@/domain/use-cases/user';

type Model = Error | {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
};

interface HttpRequestParams {
  id: string;
}

export class UserFindByIdController extends Controller<HttpRequestParams> {
  constructor(private readonly userFindByIdUseCase: UserFindByIdUseCase) {
    super();
  }

  async perform({ params }: Request<HttpRequestParams>): Promise<Response<Model>> {
    try {
      const user = await this.userFindByIdUseCase({ ...params });
      return ok(user);
    } catch (error) {
      if (error instanceof BadRequestError) return badRequest(error);
      if (error instanceof NoDataFoundError) return notFound(error);
      throw error;
    }
  }

  buildParamsValidators({
    id,
  }: HttpRequestParams): Validator[] {
    return [
      ...ValidationBuilder.of({ value: id, fieldName: 'id' })
        .required()
        .build(),
    ];
  }
}
