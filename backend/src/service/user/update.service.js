import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import {
  findOneAndUpdate,
  findWithEmail,
  findWithUsername,
  findWithId,
} from "../../repository/user.repository.js  ";

export const updateUserService = asyncHandler(
  async (res, { user_id }, user) => {
    const requiredFields = [
      "username",
      "nama_lengkap",
      "password",
      "email",
      "no_telp",
    ];

    if (requiredFields.every((field) => !user[field])) {
      res.status(400);
      throw new Error("Tidak ada data yang terisi");
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

    if (user["password"]) {
      user["password"] = await bcrypt.hash(user["password"], 10);
    }

    const updateFields = { ...user };

    var result = await findOneAndUpdate(user_id, updateFields);

    if (!result) {
      res.status(404);
      throw new Error("User tidak ditemukan");
    }

    result = await findWithId(user_id);

    return result;
  }
);
