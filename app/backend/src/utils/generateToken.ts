import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
import IUser from '../interfaces/IUsers';

const genToken = async (data: IUser) => {
  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  const keyDB = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf8' });

  const token = jwt.sign(data, keyDB, jwtConfig as jwt.SignOptions);

  return token;
};

export default genToken;
