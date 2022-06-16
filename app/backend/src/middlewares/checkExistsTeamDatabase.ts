import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { getAllTeamsService } from '../services/teamsServiceService';

const verifiTeamsExistDataBase = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeam, awayTeam } = req.body;

  const teamExist = await getAllTeamsService();

  const awayExist = teamExist.some((team) => team.id === awayTeam);
  const homeExist = teamExist.some((team) => team.id === homeTeam);

  if (!awayExist || !homeExist) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: 'There is no team with such id!' });
  }
  next();
};

export default verifiTeamsExistDataBase;
