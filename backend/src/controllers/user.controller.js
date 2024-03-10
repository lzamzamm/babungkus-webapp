import User from "../models/user.model.js";
import generateToken from "../utils/token.util.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";

const registerUser = asyncHandler(async (req, res) => {
  var { username, nama_lengkap, password, email, no_telp } = req.body;

  if (!username || !nama_lengkap || !password || !email || !no_telp) {
    res.status(400);
    throw new Error("Isi semua data");
  }
  //   Object.values(req.body).forEach((value) => {
  //     if (!value) {
  //       res.status(400);
  //       throw new Error("Isi semua data");
  //     }
  //   });

  const cekUsername = await User.findOne({ username: username });

  if (cekUsername) {
    res.status(400);
    throw new Error("Username sudah terpakai");
  }
  const cekEmail = await User.findOne({ email: email });

  if (cekEmail) {
    res.status(400);
    throw new Error("Email sudah terpakai");
  }

  password = await bcrypt.hash(password, 10);

  const newUser = {
    username: username,
    nama_lengkap: nama_lengkap,
    password: password,
    email: email,
    no_telp: no_telp,
  };

  const user = await User.create(newUser);

  return res.status(200).json({
    status: "Success",
    message: "User berhasil dibuat",
    data: user,
  });
});

const getCurrentUser = asyncHandler(async (req, res) => {
  const user = await User.findOne({ user_id: req.user.user_id });

  if (!user) {
    res.status(400);
    throw new Error("User tidak ditemukan");
  }

  return res.status(200).json({
    status: "Success",
    data: user,
  });
});

const updateUser = asyncHandler(async (req, res) => {
  const { user_id } = req.user;
  var { username, nama_lengkap, password, email, no_telp } = req.body;

  if (!username && !nama_lengkap && !password && !email && !no_telp) {
    res.status(400);
    throw new Error("Tidak ada kolom yang terisi");
  }

  const cekUsername = await User.findOne({ username: username });

  if (cekUsername) {
    res.status(400);
    throw new Error("Username sudah terpakai");
  }

  const cekEmail = await User.findOne({ email: email });

  if (cekEmail) {
    res.status(400);
    throw new Error("Email sudah terpakai");
  }

  if (password) {
    password = await bcrypt.hash(password, 10);
  }

  const updateFields = {
    username: username,
    nama_lengkap: nama_lengkap,
    password: password,
    email: email,
    no_telp: no_telp,
  };
  //console.log(user_id);

  const user = await User.findOneAndUpdate(
    { user_id: user_id },
    { $set: updateFields }
  );
  if (!user) {
    res.status(400);
    throw new Error("User tidak ditemukan.");
  }

  const newUser = await User.findOne({ user_id: user_id });

  return res.status(200).json({
    status: "Success",
    message: "USer berhasil di update",
    data: newUser,
  });
});

const loginUser = asyncHandler(async (req, res) => {
  var { username, password } = req.body;

  var user = await User.findOne({ username: username });

  //console.log(user);
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user.user_id);

    res.status(200).json({
      status: "Success",
      message: "User berhasil login",
      data: {
        user_id: user.user_id,
        username: username,
        nama_lengkap: user.nama_lengkap,
        email: user.email,
      },
    });
  } else {
    res.status(400);
    throw new Error("Username atau password salah");
  }
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

export { registerUser, updateUser, loginUser, logoutUser, getCurrentUser };
