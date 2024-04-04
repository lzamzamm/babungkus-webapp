import asyncHandler from 'express-async-handler';
import { findOne, deleteOne } from '../../repository/pesanan.repository.js';

export const deletePesananService = asyncHandler(async (id) => {
  const pesanan = await findOne(id);

  if (!pesanan) {
    const error = new Error('Pesanan tidak ditemukan');
    error.status = 404;
    throw error;
  }

  return await deleteOne(id);
});
