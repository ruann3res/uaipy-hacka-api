import { MemberFindUseCase, setupMemberFindUseCase } from '@/domain/use-cases';
import {
  makePrismaTeamRepository,
  makePrismaMemberRepository,
} from '@/main/factories/domain/repository';

export const makeMemberFindUseCase = (): MemberFindUseCase =>
  setupMemberFindUseCase(
    makePrismaTeamRepository(),
    makePrismaMemberRepository(),
  );
