import asyncHandler from 'express-async-handler';
import { find, findByKategori, findOne } from '../../repository/produk.repository.js';

export const getProdukAllService = asyncHandler(async () => {
  const result = await find();
  return result;
});

export const getProdukByIdService = asyncHandler(async (id) => {
  const result = await findOne(id);

  if (!result) {
    res.status(404);
    throw new Error('Produk tidak ditemukan');
  }

  return result;
});

export const getProdukByKategoriService = asyncHandler(async (kategori) => {
  const result = await findByKategori(kategori);

  if (!result) {
    res.status(404);
    throw new Error('Produk tidak ditemukan');
  }

  return result;
});
