import asyncHandler from 'express-async-handler';
import { findOne, findOneAndUpdate } from '../../repository/pesanan.repository.js';
import { findOne as findOneProduk, findOneAndUpdate as findOneAndUpdateProduk } from '../../repository/produk.repository.js';

export const updatePesananService = asyncHandler(async (id, updateFields) => {
  const pesanan = await findOneAndUpdate(id, updateFields);

  if (!pesanan) {
    const error = new Error('Pesanan tidak ditemukan');
    error.status = 404;
    throw error;
  }

  const result = await findOne(id);

  let produk = await findOneProduk(result.produk_id);

  if (result.status_penjual == 'Batal') {
    produk.stok = produk.stok + result.jumlah;

    await findOneAndUpdateProduk(result.produk_id, produk);
  }

  return result;
});
