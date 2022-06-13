import { Router, Request, Response } from 'express';
import validateEmail from '../middlewares/validateEmailMiddleware';
import loginController from '../controllers/loginController';
import validadePassword from '../middlewares/validatePasswordMiddleware';
import validateToken from '../middlewares/validateTokenMiddleware';

const router = Router();

router.get(
  '/login/validate',
  validateToken,
  (_req: Request, res: Response) => {
    res.status(200).send('MIDDLEWARE');
  },
);

router.post(
  '/login',
  validateEmail,
  validadePassword,
  loginController,
);

export default router;
