import { findWithId, findWithUserId } from "../repository/toko.repository.js";
import asyncHandler from "express-async-handler";

export const validateToko = async (res, toko_id) => {
  const toko = await findWithId(toko_id);
  console.log(toko);

  if (toko.status != "Active") {
    res.status(400);
    throw new Error("isi semua data");
  }
};
