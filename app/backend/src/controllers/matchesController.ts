import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import {
  matchFinishService,
  createMatchInProgressService,
  getAllMatchesService,
  updateMatchService } from '../services/matchesService';

const errorMessage = { message: 'Erro Interno' };

export const getAllMatches = async (req: Request, res: Response) => {
  try {
    const { inProgress } = req.query;

    const allMatches = await getAllMatchesService(inProgress);

    return res.status(StatusCodes.OK).json(allMatches);
  } catch (err) {
    console.log(err);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorMessage);
  }
};

export const createMatchInProgress = async (req: Request, res: Response) => {
  try {
    const { body } = req;

    const matchCreate = await createMatchInProgressService(body);

    return res.status(StatusCodes.CREATED).json(matchCreate);
  } catch (err) {
    console.log(err);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorMessage);
  }
};

export const matchFinish = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await matchFinishService(id);
    return res.status(StatusCodes.OK).json({ message: 'Finished' });
  } catch (err: unknown) {
    console.log(err);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorMessage);
  }
};

export const matchUpdate = async (req: Request, res: Response) => {
  try {
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const { id } = req.params;

    await updateMatchService(id, homeTeamGoals, awayTeamGoals);

    return res.status(StatusCodes.OK).json({ message: 'update match' });
  } catch (err) {
    console.log(err);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorMessage);
  }
};
