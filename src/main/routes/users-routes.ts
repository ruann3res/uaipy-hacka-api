import { Router } from 'express';
import { adaptRoute } from '@/main/adapters';
import { makeUserCreateController, makeUserDeleteController, makeUserFindByIdController, makeUserListController } from '@/main/factories/app/controllers/user';
import { authMiddleware } from '../middlewares';

export default (router: Router): void => {
  router.post('/users', adaptRoute(makeUserCreateController()));
  router.delete('/users/:id', adaptRoute(makeUserDeleteController()));
  router.get('/users/list', adaptRoute(makeUserListController()));
  router.get('/users/:id', authMiddleware,adaptRoute(makeUserFindByIdController()));
};