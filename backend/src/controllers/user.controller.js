import User from "../models/user.model.js";
import generateToken from "../utils/token.util.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";

import {
  registerUserService,
  registerAdminService,
} from "../service/user/register.service.js";
import { getUserService } from "../service/user/get.service.js";
import { loginUserService } from "../service/user/auth.service.js";
import { updateUserService } from "../service/user/update.service.js";

const registerUser = asyncHandler(async (req, res) => {
  const user = await registerUserService(res, req.body);

  return res.status(200).json({
    status: "Success",
    message: "User berhasil dibuat",
    data: user,
  });
});
const registerAdmin = asyncHandler(async (req, res) => {
  const admin = await registerAdminService(res, req.body);

  return res.status(200).json({
    status: "Success",
    message: "User berhasil dibuat",
    data: admin,
  });
});

const getCurrentUser = asyncHandler(async (req, res) => {
  //console.log(req);
  const user = await getUserService(res, req.user.user_id);

  return res.status(200).json({
    status: "Success",
    data: user,
  });
});

const updateUser = asyncHandler(async (req, res) => {
  const user = await updateUserService(res, req.user, req.body);

  return res.status(200).json({
    status: "Success",
    message: "USer berhasil di update",
    data: user,
  });
});

const loginUser = asyncHandler(async (req, res) => {
  var user = await loginUserService(res, req.body);

  res.status(200).json({
    status: "Success",
    message: "User berhasil login",
    data: {
      user_id: user.user_id,
      username: user.username,
      nama_lengkap: user.nama_lengkap,
      email: user.email,
      role: user.role,
    },
  });
});

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({
    status: "Success",
    message: "User berhasil logout",
  });
});

export {
  registerUser,
  updateUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  registerAdmin,
};
