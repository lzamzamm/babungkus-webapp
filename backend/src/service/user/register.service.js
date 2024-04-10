import asyncHandler from 'express-async-handler';
import bcrypt from 'bcrypt';
import { create, findWithUsername, findWithEmail } from '../../repository/user.repository.js';

export const registerUserService = asyncHandler(async (res, user) => {
  const requiredFields = ['username', 'nama_lengkap', 'password', 'email', 'no_telp'];
  if (requiredFields.some((field) => !user[field])) {
    res.status(400);
    throw new Error('Isi semua data');
  }

  const cekUsername = await findWithUsername(user['username']);

  if (cekUsername) {
    res.status(400);
    throw new Error('Username sudah terpakai');
  }

  const cekEmail = await findWithEmail(user['email']);
  if (cekEmail) {
    res.status(400);
    throw new Error('Email sudah terpakai');
  }

  var password = user['password'];
  if (password.length < 8) {
    res.status(400);
    throw new Error('Kata sandi harus memiliki minimal 8 karakter.');
  }

  // Kombinasi karakter
  const regex = {
    uppercase: /[A-Z]/,
    lowercase: /[a-z]/,
    number: /[0-9]/,
    special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,
  };

  let containsUppercase = regex.uppercase.test(password);
  let containsLowercase = regex.lowercase.test(password);
  let containsNumber = regex.number.test(password);
  let containsSpecial = regex.special.test(password);

  if (!containsUppercase || !containsLowercase || !containsNumber || !containsSpecial) {
    res.status(400);
    throw new Error('Kata sandi harus terdiri dari kombinasi huruf besar, huruf kecil, angka, dan karakter khusus.');
  }

  user['password'] = await bcrypt.hash(password, 10);
  const newUser = { ...user, role: 'User' };

  const result = await create(newUser);
  //console.log(result);

  return result;
});

export const registerAdminService = asyncHandler(async (res, user) => {
  const requiredFields = ['username', 'nama_lengkap', 'password', 'email', 'no_telp'];
  if (requiredFields.some((field) => !user[field])) {
    res.status(400);
    throw new Error('Isi semua data');
  }

  const cekUsername = await findWithUsername(user['username']);

  if (cekUsername) {
    res.status(400);
    throw new Error('Username sudah terpakai');
  }

  const cekEmail = await findWithEmail(user['email']);
  if (cekEmail) {
    res.status(400);
    throw new Error('Email sudah terpakai');
  }

  user['password'] = await bcrypt.hash(user['password'], 10);
  const newUser = { ...user, role: 'Admin' };

  const result = await create(newUser);
  //console.log(result);

  return result;
});
