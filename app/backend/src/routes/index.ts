import { Router } from 'express';
import validateEmail from '../middlewares/validateEmailMiddleware';
import { getRoleUser, loginController } from '../controllers/loginController';
import validadePassword from '../middlewares/validatePasswordMiddleware';
import validateToken from '../middlewares/validateTokenMiddleware';

const router = Router();

router.get(
  '/login/validate',
  validateToken,
  getRoleUser,
);

router.post(
  '/login',
  validateEmail,
  validadePassword,
  loginController,
);

export default router;
