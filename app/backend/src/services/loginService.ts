// import * as bcryptjs from 'bcryptjs';
import genToken from '../utils/generateToken';
import User from '../database/models/users';

const verifyUser = async (email: string, _password: string) => {
  const existUser = await User.findOne({ where: { email }, raw: true });

  if (!existUser) return null;

  const { /* password: passDB, */ username } = existUser;

  // if (!bcryptjs.compareSync(password, passDB)) return null;

  const token = await genToken({ username });

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
