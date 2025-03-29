import { Controller } from '@/app/controllers';
import { Request, Response } from 'express';

const statusCodesMap = {
    'ok': 200,
    'unknown': 500,
    'invalid-argument': 400,
    'not-found': 404,
    'already-exists': 409,
    'aborted': 400,
    'out-of-range': 400,
    'internal': 500,
    'unavailable': 503
};

export const adaptRoute = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        const { body, query, params } = req;
        const httpRequest = {
            body: body || {},
            query,
            params,
            ...(req.file ? { file: req.file } : {}),
            ...(req.files ? { files: req.files } : {})
        };
        const httpResponse = await controller.handle(httpRequest);
        const statusCode = statusCodesMap[httpResponse.statusCode];
        res.status(statusCode).json(httpResponse.statusCode === 'ok' ? httpResponse.result : { error: httpResponse.result.message, code: httpResponse.statusCode });
    };
};