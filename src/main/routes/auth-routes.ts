import { Router } from 'express';
import { adaptRoute } from '@/main/adapters';
import { makeUserSignInController } from '../factories/app/controllers/auth/sign-in';

export default (router: Router): void => {
  router.post('/auth/login', adaptRoute(makeUserSignInController()));
};

