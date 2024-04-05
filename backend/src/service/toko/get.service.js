import asyncHandler from "express-async-handler";
import {
  find,
  findWithId,
  findWithStatus,
} from "../../repository/toko.repository.js";

export const getTokoAllService = asyncHandler(async () => {
  const result = await find();

  return result;
});

export const getTokoByStatusService = asyncHandler(async (data) => {
  const result = await findWithStatus(data.status);

  return result;
});

export const getTokoIdService = asyncHandler(async (res, { id }) => {
  const result = await findWithId(id);

  if (!result) {
    res.status(404);
    throw new Error("Toko tidak ditemukan");
  }

  return result;
});
