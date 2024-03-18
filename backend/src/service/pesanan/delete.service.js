import asyncHandler from 'express-async-handler';
import { findOne } from '../../repository/pesanan.repository.js';

export const deletePesananService = asyncHandler(async (id) => {
  const pesanan = await findOne(id);

  if (!pesanan) {
    res.status(404);
    throw new Error('Pesanan tidak ditemukan');
  }

  return await deleteOne(id);
});
