import {
  PrismaUserRepository,
} from '@/domain/contracts/repository/prisma';
import { UserProps } from '@/domain/entities';
import { BadRequestError } from '@/domain/entities/errors';
import { hash } from 'bcrypt';

export type UserCreateUseCase = (params: UserProps) => Promise<boolean>;

type Setup = (
  userRepository: PrismaUserRepository,
) => UserCreateUseCase;

export const setupUserCreateUseCase: Setup =
  (userRepository) => async (params) => {
      const { name, email, password } = params;

    const userAlreadyExists = await userRepository.getBy({ email });  

    if (userAlreadyExists) {
      throw new BadRequestError('User already exists');
    }

    const hashedPassword = await hash(password, 8);

    const user = await userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return true;
  };


