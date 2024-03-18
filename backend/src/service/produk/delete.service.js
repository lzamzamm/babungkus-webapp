import asyncHandler from 'express-async-handler';
import { deleteOne, findOne } from '../../repository/produk.repository.js';

export const deleteProdukService = asyncHandler(async (id) => {
  const produk = await findOne(id);

  if (!produk) {
    res.status(404);
    throw new Error('Produk tidak ditemukan');
  }

  return await deleteOne(id);
});
