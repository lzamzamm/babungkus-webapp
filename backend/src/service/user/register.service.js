import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import {
  create,
  findWithUsername,
  findWithEmail,
} from "../../repository/user.repository.js";

export const registerUserService = asyncHandler(async (res, user) => {
  const requiredFields = [
    "username",
    "nama_lengkap",
    "password",
    "email",
    "no_telp",
  ];
  if (requiredFields.some((field) => !user[field])) {
    res.status(400);
    throw new Error("Isi semua data");
  }

  const cekUsername = await findWithUsername(user["username"]);

  if (cekUsername) {
    res.status(400);
    throw new Error("Username sudah terpakai");
  }

  const cekEmail = await findWithEmail(user["email"]);
  if (cekEmail) {
    res.status(400);
    throw new Error("Email sudah terpakai");
  }

  user["password"] = await bcrypt.hash(user["password"], 10);
  const newUser = { ...user, role: "User" };

  const result = await create(newUser);
  //console.log(result);

  return result;
});

export const registerAdminService = asyncHandler(async (res, user) => {
  const requiredFields = [
    "username",
    "nama_lengkap",
    "password",
    "email",
    "no_telp",
  ];
  if (requiredFields.some((field) => !user[field])) {
    res.status(400);
    throw new Error("Isi semua data");
  }

  const cekUsername = await findWithUsername(user["username"]);

  if (cekUsername) {
    res.status(400);
    throw new Error("Username sudah terpakai");
  }

  const cekEmail = await findWithEmail(user["email"]);
  if (cekEmail) {
    res.status(400);
    throw new Error("Email sudah terpakai");
  }

  user["password"] = await bcrypt.hash(user["password"], 10);
  const newUser = { ...user, role: "Admin" };

  const result = await create(newUser);
  //console.log(result);

  return result;
});
