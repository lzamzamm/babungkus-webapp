import jwt from "jsonwebtoken";

import asyncHandler from "express-async-handler";

import User from "../models/user.model.js";

import "dotenv/config";

const protect = asyncHandler(async (req, res, next) => {
  var cookie = req.headers.cookie;

  if (!cookie) {
    res.status(401);
    throw new Error("Unauthorized");
  }
  var token = cookie.split("=")[1];

  //console.log(token);
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  //console.log(decoded);
  req.user = await User.findOne({ user_id: decoded.user_id }).select(
    "-password"
  );
  next();
});

export { protect };
