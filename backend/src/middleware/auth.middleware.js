import jwt from 'jsonwebtoken';

import asyncHandler from 'express-async-handler';

import User from '../models/user.model.js';

import 'dotenv/config';

const protect = asyncHandler(async (req, res, next) => {
  const token = req.cookies.jwt;
  console.log('Token', token);

  if (!token) {
    res.status(401);
    throw new Error('Unauthorized');
  }

  //console.log(token);
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  //console.log(decoded);
  req.user = await User.findOne({ user_id: decoded.user_id }).select('-password');
  //console.log(decoded, process.env.JWT_SECRET);
  next();
});

export { protect };
