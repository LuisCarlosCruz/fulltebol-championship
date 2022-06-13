// import * as bcryptjs from 'bcryptjs';
import { genToken } from '../utils/authToken';
import User from '../database/models/users';

const verifyUser = async (email: string, _password: string) => {
  const existUser = await User.findOne({ where: { email }, raw: true });

  if (!existUser) return null;

  const { password: _passDB, ...infoUser } = existUser;
  const { id, username, role, email: emailUser } = infoUser; // renomeando chave email

  // if (!bcryptjs.compareSync(password, passDB)) return null;

  const token = await genToken({ id, username, role, email: emailUser });

  return {
    user: {
      id: existUser.id,
      username: existUser.username,
      role: existUser.role,
      email: existUser.email,
    },
    token,
  };
};

export default { verifyUser };
