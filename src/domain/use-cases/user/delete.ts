import {
  PrismaUserRepository,
} from '@/domain/contracts/repository/prisma';
import { UserProps } from '@/domain/entities';
import { NoDataFoundError } from '@/domain/entities/errors';

export type UserDeleteUseCase = (params: { id: string }) => Promise<boolean>;

type Setup = (
  userRepository: PrismaUserRepository,
) => UserDeleteUseCase;

export const setupUserDeleteUseCase: Setup =
  (userRepository) => async (params) => {
      const { id } = params;

      const user = await userRepository.getBy({ id });

      if (!user) {
        throw new NoDataFoundError('User not found');
      }

      await userRepository.delete(user.id);

      return true;
  };



