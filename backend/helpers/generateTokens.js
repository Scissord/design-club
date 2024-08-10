import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

const generateTokens = (userId) => {
  const accessToken = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30m' // AccessToken должен иметь короткий срок действия
  });

  const refreshToken = jwt.sign({ userId, jti: uuidv4() }, process.env.JWT_SECRET, {
    expiresIn: '30d' // RefreshToken должен иметь более длительный срок действия
  });

  return { refreshToken, accessToken };
};

export default generateTokens;
