import { SendToChatUseCase, setupSendToChatUseCase } from '@/domain/use-cases';

export const makeSendToChatUseCase = (): SendToChatUseCase => {
    return setupSendToChatUseCase();
};