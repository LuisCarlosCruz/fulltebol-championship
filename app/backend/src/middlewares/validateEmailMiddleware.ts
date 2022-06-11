import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

const validadeEmail = (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;

  const message = 'Incorrect email or password';

  if (!email) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .send({ message });
  }

  const verifyEmail = (data: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(data);
  };

  if (verifyEmail(email) === false) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .send({ message });
  }
  next();
};

export default validadeEmail;
