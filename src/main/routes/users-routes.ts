import { Router } from 'express';
import { adaptRoute } from '@/main/adapters';
import { makeUserCreateController, makeUserDeleteController, makeUserFindByIdController, makeUserListController } from '@/main/factories/app/controllers/user';

export default (router: Router): void => {
  router.get('/users/:id', adaptRoute(makeUserFindByIdController()));
  router.post('/users', adaptRoute(makeUserCreateController()));
  router.delete('/users/:id', adaptRoute(makeUserDeleteController()));
  router.get('/users/list', adaptRoute(makeUserListController()));
};