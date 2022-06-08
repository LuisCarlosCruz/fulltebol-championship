import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
import * as dotenv from 'dotenv';

dotenv.config();

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(StatusCodes.UNAUTHORIZED).send({ message: 'Token not found' });
  }

  const keyDB = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf8' });

  const decoded = await jwt.verify(token, keyDB, (err) => {
    if (err) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: 'Failed to authenticate token.' });
    }
  });

  req.body.user = decoded;

  next();
};

export default validateToken;
