import asyncHandler from 'express-async-handler';
import { findOne, findOneAndUpdate } from '../../repository/pesanan.repository.js';

export const updatePesananService = asyncHandler(async (id, updateFields) => {
  const pesanan = await findOneAndUpdate(id, updateFields);

  if (!pesanan) {
    const error = new Error('Pesanan tidak ditemukan');
    error.status = 404;
    throw error;
  }

  const result = await findOne(id);

  return result;
});
