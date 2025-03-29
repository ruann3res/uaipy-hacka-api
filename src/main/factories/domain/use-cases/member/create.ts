import {
  MemberCreateUseCase,
  setupMemberCreateUseCase,
} from '@/domain/use-cases';
import {
  makePrismaTeamRepository,
  makePrismaMemberRepository,
} from '@/main/factories/domain/repository';

export const makeMemberCreateUseCase = (): MemberCreateUseCase =>
  setupMemberCreateUseCase(
    makePrismaTeamRepository(),
    makePrismaMemberRepository(),
  );
