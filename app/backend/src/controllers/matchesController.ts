import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { createMatchInProgressService, getAllMatchesService } from '../services/matchesService';

export const getAllMatches = async (req: Request, res: Response) => {
  try {
    const { inProgress } = req.query;

    const allMatches = await getAllMatchesService(inProgress);

    return res.status(StatusCodes.OK).send(allMatches);
  } catch (err) {
    console.log(err);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Erro Interno' });
  }
};

export const createMatchInProgress = async (req: Request, res: Response) => {
  try {
    const { body } = req;

    const matchCreate = await createMatchInProgressService(body);

    return res.status(StatusCodes.CREATED).json(matchCreate);
  } catch (err) {
    console.log(err);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Erro Interno' });
  }
};
