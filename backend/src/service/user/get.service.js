import asyncHandler from "express-async-handler";
import { findWithId } from "../../repository/user.repository.js";

export const getUserService = asyncHandler(async (res, id) => {
  const result = await findWithId(id);

  if (!result) {
    res.status(400);
    throw new Error("User tidak ditemukan");
  }

  return result;
});
