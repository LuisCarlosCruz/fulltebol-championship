import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { getAllTeamsService, getByIdTeamService } from '../services/teamsServiceService';

export const getAllTeamsController = async (_req: Request, res: Response) => {
  try {
    const allTeams = await getAllTeamsService();
    return res.status(StatusCodes.OK).json(allTeams);
  } catch (err: unknown) {
    console.log(err);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Erro Interno' });
  }
};

export const getByIdTeam = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const team = await getByIdTeamService(id);

    if (!team) return res.status(StatusCodes.NOT_FOUND).send({ message: 'Time not found' });

    return res.status(StatusCodes.OK).json(team);
  } catch (err) {
    console.log(err);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Erro Interno' });
  }
};
