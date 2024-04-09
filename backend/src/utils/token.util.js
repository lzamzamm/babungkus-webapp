import jwt from 'jsonwebtoken';
import 'dotenv/config';

const generateToken = (res, user_id) => {
  const token = jwt.sign({ user_id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  // console.log(token, res);
  //console.log(res.cookie);
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    sameSite: 'none',
  });
};

export default generateToken;
