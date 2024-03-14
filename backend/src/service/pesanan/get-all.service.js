import asyncHandler from "express-async-handler";
import { find } from "../../repository/pesanan.repository.js";

export const getPesananAllService = asyncHandler(async () => {
  const result = await find();
  return result;
});
