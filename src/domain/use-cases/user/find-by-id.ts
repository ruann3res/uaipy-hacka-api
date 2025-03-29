import {
  PrismaUserRepository,
} from '@/domain/contracts/repository/prisma';
import { UserProps } from '@/domain/entities';
import { NoDataFoundError } from '@/domain/entities/errors';

export type UserFindByIdUseCase = (params: { id: string }) => Promise<{
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}>;

type Setup = (
  userRepository: PrismaUserRepository,
) => UserFindByIdUseCase;

  export const setupUserFindByIdUseCase: Setup =
  (userRepository) => async (params) => {
      const { id } = params;

      const user = await userRepository.getBy({ id });

      if (!user) {
        throw new NoDataFoundError('User not found');
      }

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
      }
  };



