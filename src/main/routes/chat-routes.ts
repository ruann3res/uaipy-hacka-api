import { Router } from 'express';
import { upload } from '@/main/config/multer';
import { adaptRoute } from '@/main/adapters';
import { makeSendToChatController } from '@/main/factories/app/controllers';

export default (router: Router): void => {
    router.post('/chat', upload.single('pdfBuffer'), adaptRoute(makeSendToChatController()));
};