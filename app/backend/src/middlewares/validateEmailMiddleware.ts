import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

const validadeEmail = (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;

  if (!email) {
    return res
      .status(StatusCodes.NON_AUTHORITATIVE_INFORMATION)
      .send({ message: 'Incorrect email or password' });
  }

  const verifyEmail = (data: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(data);
  };

  if (verifyEmail(email) === false) {
    return res
      .status(StatusCodes.NON_AUTHORITATIVE_INFORMATION)
      .send({ message: 'Incorrect email or password' });
  }
  next();
};

export default validadeEmail;
