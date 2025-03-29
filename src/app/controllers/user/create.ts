import { Controller } from '@/app/controllers';
import { Request, Response, badRequest, ok } from '@/app/helpers';
import { ValidationBuilder, Validator } from '@/app/validation';
import { BadRequestError } from '@/domain/entities/errors';
import { UserCreateUseCase } from '@/domain/use-cases/user/create';

type Model = Error | boolean;

interface HttpRequestBody {
  name: string;
  email: string;
  password: string;
}

export class UserCreateController extends Controller<HttpRequestBody> {
  constructor(private readonly userCreateUseCase: UserCreateUseCase) {
    super();
  }

  async perform({ body }: Request<HttpRequestBody>): Promise<Response<Model>> {
    try {
      await this.userCreateUseCase({ ...body });
      return ok(true);
    } catch (error) {
      if (error instanceof BadRequestError) return badRequest(error);
      throw error;
    }
  }

  buildBodyValidators({
    name,
    email,
    password,   
  }: HttpRequestBody): Validator[] {
    return [
      ...ValidationBuilder.of({ value: name, fieldName: 'name' })
        .required()
        .build(),
      ...ValidationBuilder.of({
        value: email,
        fieldName: 'email',
      })
        .required()
        .build(),
      ...ValidationBuilder.of({
        value: password,
        fieldName: 'password',
      })
        .required()
        .build(),
    ];
  }
}
