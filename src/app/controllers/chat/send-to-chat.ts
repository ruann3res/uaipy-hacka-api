import { Request, Response, badRequest, ok } from '@/app/helpers';
import { Controller } from '@/app/controllers';
import { ValidationBuilder, Validator } from '@/app/validation';
import { BadRequestError } from '@/domain/entities/errors';
import { SendToChatUseCase } from '@/domain/use-cases/send-to-chat';

interface HttpRequest { 
    file: Express.Multer.File
    prompt: string
}

type Model = Error | string

export class SendToChatController extends Controller {
    constructor(
        private readonly sendToChatUseCase: SendToChatUseCase
    ) {
        super();
    }

    async perform(request: Request<HttpRequest>): Promise<Response<Model>> {
        try {
            const pdfBuffer = request.body.file.buffer;
            const { prompt } = request.body;
            
            const result = await this.sendToChatUseCase({ 
                pdfBuffer,
                prompt 
            });
            return ok(result);
        } catch (error) {
            if (error instanceof BadRequestError) return badRequest(error);
            throw error;
        }
    }

    buildValidators(request: HttpRequest): Validator[] {
        return [
            ...ValidationBuilder.of({ value: request.file, fieldName: 'file' }).required().build(),
            ...ValidationBuilder.of({ value: request.prompt, fieldName: 'prompt' }).required().build(),
        ];
    }
}

