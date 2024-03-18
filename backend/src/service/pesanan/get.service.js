import asyncHandler from 'express-async-handler';
import { find, findOne } from '../../repository/pesanan.repository.js';

export const getPesananAllService = asyncHandler(async () => {
  const result = await find();
  return result;
});

export const getPesananByIdService = asyncHandler(async (id) => {
  const result = await findOne(id);

  if (!result) {
    res.status(404);
    throw new Error('Pesanan tidak ditemukan');
  }

  return result;
});
