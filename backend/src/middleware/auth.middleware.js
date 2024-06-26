import jwt from "jsonwebtoken";

import asyncHandler from "express-async-handler";

import User from "../models/user.model.js";

import "dotenv/config";
// import Cookies from "js-cookie";

const protect = asyncHandler(async (req, res, next) => {
  var token = req.cookies.jwt;

  if (!token) {
    res.status(401);
    throw new Error("Unauthorized");
  }
  // var token = cookie.split("=")[1];

  //console.log(token);
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  //console.log(decoded);
  req.user = await User.findOne({ user_id: decoded.user_id }).select(
    "-password"
  );
  //console.log(decoded, process.env.JWT_SECRET);
  next();
});

export { protect };
