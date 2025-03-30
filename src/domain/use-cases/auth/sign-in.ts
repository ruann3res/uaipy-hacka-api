import { env } from '@/domain/contracts/config/env';
import {
  PrismaUserRepository,
} from '@/domain/contracts/repository/prisma';
import { BadRequestError } from '@/domain/entities/errors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export type UserSignInUseCase = (params: { email: string, password: string }) => Promise<{ token: string }>;

type Setup = (
  userRepository: PrismaUserRepository,
) => UserSignInUseCase;

export const setupUserSignInUseCase: Setup =
  (userRepository) => async (params) => {
    const { email, password } = params;


    const user = await userRepository.getBy({ email });

    if (!user) {
      throw new BadRequestError('Password or email is incorrect');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new BadRequestError('Password or email is incorrect');
    }

    if (!env.JWT_SECRET) {
      throw new Error('JWT_SECRET is not set');
    }

    const token = jwt.sign({ id: user.id }, env.JWT_SECRET, {
      expiresIn: '1d',
    });

    return { token };
  };


