import {
  PrismaUserRepository,
} from '@/domain/contracts/repository/prisma';
import { UserProps } from '@/domain/entities';
import { NoDataFoundError } from '@/domain/entities/errors';

export type UserListUseCase = () => Promise<{
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}[]>;

type Setup = (
  userRepository: PrismaUserRepository,
) => UserListUseCase;

export const setupUserListUseCase: Setup =
  (userRepository) => async () => {
    const users = await userRepository.getAll();

    if (!users) {
      throw new NoDataFoundError('User not found');
    }

    return users;
  };



