
import { BadRequestError } from '@/domain/entities/errors';
import pdf from 'pdf-parse'

export type SendToChatUseCase = (param: {
  pdfBuffer: Buffer;
  prompt?: string;
}) => Promise<void>;

type Setup = () => SendToChatUseCase;

export const setupSendToChatUseCase: Setup = () => async (params) => {
  const pdfMustHave = ['Solo',];

  const pdfBuffer = params.pdfBuffer;
  const pdfData = await pdf(pdfBuffer)
  const pdfText = pdfData.text
  if (!pdfMustHave.every(item => pdfText.includes(item))) {
    throw new BadRequestError('Não foi possível encontrar informações de solo no PDF');
  }

  // TODO
  // - [] Enviar para o gemini o prompt 
  // - [] Se o usuario ja tiver enviado um prompt, adicionar o novo prompt ao historico de prompts
  // - [] Se o usuario nao tiver enviado um prompt, criar um novo historico de prompts

  const prompt = params.prompt;

  return pdfText;
};