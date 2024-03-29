import { Router } from 'express';
import validateEmail from '../middlewares/validateEmailMiddleware';
import { getRoleUser, login } from '../controllers/loginController';
import validadePassword from '../middlewares/validatePasswordMiddleware';
import validateToken from '../middlewares/validateTokenMiddleware';
import { getAllTeams, getByIdTeam } from '../controllers/teamsController';
import {
  matchFinish,
  createMatchInProgress,
  getAllMatches,
  matchUpdate } from '../controllers/matchesController';
import verifiTeamsEqual from '../middlewares/checkEqualTeamsMiddleware';
import verifiTeamsExistDataBase from '../middlewares/checkExistsTeamDatabase';
import getLeaderboard from '../controllers/leaderboardController';

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
  verifiTeamsEqual,
  verifiTeamsExistDataBase,
  createMatchInProgress,
);

router.get(
  '/matches',
  getAllMatches,
);

router.patch(
  '/matches/:id/finish',
  matchFinish,
);

router.patch(
  '/matches/:id',
  matchUpdate,
);

router.get(
  '/leaderboard/home',
  getLeaderboard,
);

export default router;
