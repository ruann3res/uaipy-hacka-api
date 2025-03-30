import { PrismaClient } from '@/domain/contracts/repository/prisma';
import app from '@/main/config/app';



async function main() {
  try {
    await PrismaClient.$connect();
    app.listen(3000, () => {
      console.log(
        `Server is running on port http://localhost:3000/api`,
      );
    });
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await PrismaClient.$disconnect();
  });
