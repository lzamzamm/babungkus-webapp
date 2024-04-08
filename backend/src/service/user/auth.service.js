import asyncHandler from 'express-async-handler';
import bcrypt from 'bcrypt';
import generateToken from '../../utils/token.util.js';

import { findWithUsername } from '../../repository/user.repository.js';

export const loginUserService = asyncHandler(async (res, user) => {
  var requiredFields = ['username', 'password'];

  if (requiredFields.some((field) => !user[field])) {
    res.status(400);
    throw new Error('Isi semua data');
  }

  var result = await findWithUsername(user['username']);

  if (!result || !(await result.matchPassword(user['password']))) {
    res.status(400);
    throw new Error('Username atau password salah');
  }

  // console.log(result.user_id);
  generateToken(res, result.user_id);

  return result;
});
