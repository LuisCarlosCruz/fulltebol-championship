import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

const validadePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  if (!password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send({ message: '"password" is not allowed to be empty' });
  }

  if ((typeof password) !== 'string') {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send({ message: '"password" must be a valid password' });
  }

  const min = 6;
  if (password.length < min) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send({ message: '"password" length must be characters long' });
  }

  next();
};

export default validadePassword;
