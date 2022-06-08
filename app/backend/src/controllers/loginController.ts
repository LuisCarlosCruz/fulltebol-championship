import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import loginService from '../services/loginService';

const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const existUser = await loginService.verifyUser(email, password);

    if (!existUser) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'User Not Found' });
    }

    return res.status(StatusCodes.OK).json(existUser);
  } catch (err: unknown) {
    console.log(err);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Erro Interno' });
  }
};

export default loginController;
