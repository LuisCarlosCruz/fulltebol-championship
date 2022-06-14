import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import getAllTeamsService from '../services/teamsServiceService';

const getAllTeamsController = async (_req: Request, res: Response) => {
  try {
    const allTeams = await getAllTeamsService();
    return res
      .status(StatusCodes.OK)
      .json(allTeams);
  } catch (err: unknown) {
    console.log(err);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Erro Interno' });
  }
};

export default getAllTeamsController;
