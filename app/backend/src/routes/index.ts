import { Router } from 'express';
import validateEmail from '../middlewares/validateEmailMiddleware';
import { getRoleUser, loginController } from '../controllers/loginController';
import validadePassword from '../middlewares/validatePasswordMiddleware';
import validateToken from '../middlewares/validateTokenMiddleware';
import getAllTeams from '../controllers/teamsController';

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

router.get(
  '/teams',
  getAllTeams,
);

export default router;
