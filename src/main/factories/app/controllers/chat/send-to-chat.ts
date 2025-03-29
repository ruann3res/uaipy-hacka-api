import { Controller } from '@/app/controllers';
import { SendToChatController } from '@/app/controllers/chat/send-to-chat';
import { makeSendToChatUseCase } from '@/main/factories/domain/use-cases';

export const makeSendToChatController = (): Controller => {
    return new SendToChatController(makeSendToChatUseCase());
};