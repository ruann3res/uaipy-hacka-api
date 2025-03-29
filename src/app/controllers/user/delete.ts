import { Controller } from '@/app/controllers';
import { Request, Response, badRequest, ok } from '@/app/helpers';
import { ValidationBuilder, Validator } from '@/app/validation';
import { BadRequestError } from '@/domain/entities/errors';
import { UserDeleteUseCase } from '@/domain/use-cases/user';

type Model = Error | boolean;

interface HttpRequestParams {
  id: string;
}

export class UserDeleteController extends Controller<HttpRequestParams> {
  constructor(private readonly userDeleteUseCase: UserDeleteUseCase) {
    super();
  }

  async perform({ params }: Request<HttpRequestParams>): Promise<Response<Model>> {
    try {
      await this.userDeleteUseCase({ ...params });
      return ok(true);
    } catch (error) {
      if (error instanceof BadRequestError) return badRequest(error);
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
