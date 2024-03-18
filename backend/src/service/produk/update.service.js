import asyncHandler from 'express-async-handler';
import { findOne, findOneAndUpdate } from '../../repository/produk.repository.js';

export const updateProdukService = asyncHandler(async (id, produk) => {
  const produk = await findOneAndUpdate(id, produk);

  if (!produk) {
    res.status(404);
    throw new Error('Produk tidak ditemukan');
  }

  const result = await findOne(id);

  return result;
});
