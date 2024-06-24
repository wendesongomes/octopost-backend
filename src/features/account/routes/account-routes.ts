import { Router } from 'express';

import { accountControllerFactory } from './account-controllers-factory';

const router = Router();

const { accountController } = accountControllerFactory();

router.delete('/:id', accountController.deleteAccountById);

export default {
  prefix: 'accounts',
  router,
};
