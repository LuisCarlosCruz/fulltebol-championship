import { Router } from 'express';
import validateEmail from '../middlewares/validateEmailMiddleware';
import loginController from '../controllers/loginController';
import validadePassword from '../middlewares/validatePasswordMiddleware';

const router = Router();

router.post(
  '/login',
  validateEmail,
  validadePassword,
  loginController,
);

export default router;
