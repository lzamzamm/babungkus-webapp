import asyncHandler from 'express-async-handler';
import { deleteOne, findOne } from '../../repository/produk.repository.js';

export const deleteProdukService = asyncHandler(async (id) => {
  const produk = await findOne(id);

  if (!produk) {
    const error = new Error('Produk tidak ditemukan');
    error.status = 404;
    throw error;
  }

  return await deleteOne(id);
});
