import asyncHandler from 'express-async-handler';
import { create } from '../../repository/produk.repository.js';

export const createProdukService = asyncHandler(async (produk) => {
  const produk = {
    toko_id: produk.toko_id,
    nama: produk.nama,
    harga: produk.harga,
    kategori: produk.kategori,
    stok: produk.stok,
    deskripsi: produk.deskripsi,
    image: produk.image,
    expire_at: produk.expire_at,
  };

  const result = await create(produk);

  return result;
});
