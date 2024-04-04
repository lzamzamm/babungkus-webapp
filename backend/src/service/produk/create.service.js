import asyncHandler from 'express-async-handler';
import { create } from '../../repository/produk.repository.js';

export const createProdukService = asyncHandler(async (data) => {
  const produk = {
    toko_id: data.toko_id,
    nama: data.nama,
    harga: data.harga,
    kategori: data.kategori,
    stok: data.stok,
    deskripsi: data.deskripsi,
    image: data.image,
    expired_at: data.expired_at,
  };

  const result = await create(produk);

  return result;
});
