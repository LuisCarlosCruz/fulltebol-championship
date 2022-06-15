import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
// import loginService from '../services/loginService';

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // const existUser = await loginService.verifyUser(email, password);

    // if (!existUser) {
    //   return res
    //     .status(StatusCodes.BAD_REQUEST)
    //     .json({ message: 'User Not Found' });
    // }

    return res.status(StatusCodes.OK).json({ email, password });
  } catch (err: unknown) {
    console.log(err);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Erro Interno' });
  }
};

export const luis = () => {};

// export const getRoleUser = (req: Request, res: Response) => {
//   try {
//     const { role } = req.body.infoUser;
//     return res.status(200).json(role);
//   } catch (err) {
//     console.log(err);
//     return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Erro Interno' });
//   }
// };
