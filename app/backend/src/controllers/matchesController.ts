import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const getAllMatchesController = async (req: Request, res: Response) => {
  try {
    return res.status(StatusCodes.OK).send({ message: 'MATCHESall' });
  } catch (err) {
    console.log(err);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Erro Interno' });
  }
};

export default getAllMatchesController;
