import { Router } from 'express';
// import validateEmail from '../middlewares/validateEmailMiddleware';
import { login } from '../controllers/loginController';
// import validadePassword from '../middlewares/validatePasswordMiddleware';
// import validateToken from '../middlewares/validateTokenMiddleware';
// import { getAllTeams, getByIdTeam } from '../controllers/teamsController';
// import { createMatchInProgress, getAllMatches } from '../controllers/matchesController';

const router = Router();

// router.get(
//   '/login/validate',
//   // validateToken,s
//   getRoleUser,
// );

router.post(
  '/login',
  // validateEmail,
  // validadePassword,
  login,
);

// router.get(
//   '/teams',
//   getAllTeams,
// );

// router.get(
//   '/teams/:id',
//   getByIdTeam,
// );

// router.get(
//   '/matches',
//   getAllMatches,
// );

// router.post(
//   '/matches',
//   // validateToken,
//   createMatchInProgress,
// );

export default router;
