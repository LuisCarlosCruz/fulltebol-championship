import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

const validadeEmail = (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;

  if (!email) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send({ message: '"email" is not allowed to be empty' });
  }

  const verifyEmail = (data: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(data);
  };

  if (verifyEmail(email) === false) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send({ message: '"email" must be a valid email' });
  }
  next();
};

export default validadeEmail;
