import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import getLeaderboardService from '../services/leaderboardService';

const getLeaderboard = async (_req: Request, res: Response) => {
  try {
    const allLeaderboard = await getLeaderboardService();
    return res.status(StatusCodes.OK).json(allLeaderboard);
  } catch (err) {
    console.log(err);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Erro Interno' });
  }
};

export default getLeaderboard;
