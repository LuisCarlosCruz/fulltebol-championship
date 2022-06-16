import { Router } from 'express';
import validateEmail from '../middlewares/validateEmailMiddleware';
import { getRoleUser, login } from '../controllers/loginController';
import validadePassword from '../middlewares/validatePasswordMiddleware';
import validateToken from '../middlewares/validateTokenMiddleware';
import { getAllTeams, getByIdTeam } from '../controllers/teamsController';
import {
  createMatchFinish,
  createMatchInProgress,
  getAllMatches } from '../controllers/matchesController';

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

router.post(
  '/matches',
  validateToken,
  createMatchInProgress,
);

router.get(
  '/matches',
  getAllMatches,
);

router.patch(
  '/matches/:id/finish',
  createMatchFinish,
);

export default router;
