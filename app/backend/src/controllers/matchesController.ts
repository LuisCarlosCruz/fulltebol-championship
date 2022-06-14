import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import getAllMatchesService from '../services/matchesService';

const getAllMatches = async (req: Request, res: Response) => {
  try {
    const allMatches = await getAllMatchesService();
    return res.status(StatusCodes.OK).send(allMatches);
  } catch (err) {
    console.log(err);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Erro Interno' });
  }
};

export default getAllMatches;
