import { Router } from 'express';
import validateEmail from '../middlewares/validateEmailMiddleware';
import { getRoleUser, login } from '../controllers/loginController';
import validadePassword from '../middlewares/validatePasswordMiddleware';
import validateToken from '../middlewares/validateTokenMiddleware';
import { getAllTeams, getByIdTeam } from '../controllers/teamsController';
import getAllMatchesController from '../controllers/matchesController';

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
  login,
);

router.get(
  '/teams',
  getAllTeams,
);

router.get(
  '/teams/:id',
  getByIdTeam,
);

router.get(
  '/matches',
  getAllMatchesController,
);

export default router;
