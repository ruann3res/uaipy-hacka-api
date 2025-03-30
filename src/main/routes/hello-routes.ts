import { Router } from 'express';
import { authMiddleware } from '@/main/middlewares';

export default (router: Router): void => {
    router.get('/hello', authMiddleware, (req, res) => {
        res.json({ message: 'Hello World' });
    });
};