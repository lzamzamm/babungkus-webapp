import asyncHandler from 'express-async-handler';
import { findOne, findOneAndUpdate } from '../../repository/produk.repository.js';

export const updateProdukService = asyncHandler(async (id, data) => {
  const produk = await findOneAndUpdate(id, data);

  if (!produk) {
    const error = new Error('Produk tidak ditemukan');
    error.status = 404;
    throw error;
  }

  const result = await findOne(id);

  return result;
});
