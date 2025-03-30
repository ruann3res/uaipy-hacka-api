import { Controller } from '@/app/controllers';
import { Request, Response, badRequest, ok } from '@/app/helpers';
import { ValidationBuilder, Validator } from '@/app/validation';
import { BadRequestError } from '@/domain/entities/errors';
import { UserSignInUseCase } from '@/domain/use-cases/auth/sign-in';

type Model = Error | string;

interface HttpRequestBody {
  email: string;
  password: string;
}

export class UserSignInController extends Controller<HttpRequestBody> {
  constructor(private readonly userSignInUseCase: UserSignInUseCase) {
    super();
  }

  async perform({ body }: Request<HttpRequestBody>): Promise<Response<Model>> {
    try {
      const response = await this.userSignInUseCase({ ...body });
      return ok(response.token);
    } catch (error) {
      if (error instanceof BadRequestError) return badRequest(error);
      throw error;
    }
  }

  buildBodyValidators({

    email,
    password,   
  }: HttpRequestBody): Validator[] {
    return [
      ...ValidationBuilder.of({ value: email, fieldName: 'email' })
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
