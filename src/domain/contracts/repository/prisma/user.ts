import { PrismaClient } from '@/domain/contracts/repository/prisma';
import { DatabaseError } from '@/domain/entities/errors';
import { UserProps } from '@/domain/entities/user';
import { Prisma } from '@prisma/client';

export class PrismaUserRepository {
  constructor(private readonly prisma: typeof PrismaClient) { }

  async create(data: UserProps) {
    try {
      return await this.prisma.user.create({ data });
    } catch (error) {
      throw new DatabaseError('Error creating user', error);
    }
  }

  async getBy(where: Prisma.UserWhereInput) {
    try {
      const user =  await this.prisma.user.findFirst({ where });
      return user;
    } catch (error) {
      throw new DatabaseError('Error getting user by', error);
    }
  }

  async getAll() {
    try {
      const users = await this.prisma.user.findMany();
      return users.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
      }));
    } catch (error) {
      throw new DatabaseError('Error getting all users', error);
    }
  }


  async delete(id: string): Promise<boolean> {
    try {
      await this.prisma.user.delete({ where: { id } });
      return true;
    } catch (error) {
      throw new DatabaseError('Error deleting user', error);
    }
  }
}
