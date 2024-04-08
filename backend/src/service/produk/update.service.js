import asyncHandler from 'express-async-handler';
import { findOne, findOneAndUpdate } from '../../repository/produk.repository.js';

export const updateProdukService = asyncHandler(async (id, body, files) => {
  const produkNew = JSON.parse(body['data']);
  const file = files['file'][0];

  const requiredFields = ['toko_id', 'nama', 'harga', 'kategori', 'stok', 'deskripsi', 'image', 'expired_at'];
  if (requiredFields.some((field) => !produkNew[field])) {
    res.status(400);
    throw new Error('Isi semua data');
  }

  if (files) {
    produkNew.image = file.filename;
  }

  const produk = await findOneAndUpdate(id, produkNew);

  if (!produk) {
    const error = new Error('Produk tidak ditemukan');
    error.status = 404;
    throw error;
  }

  const result = await findOne(id);

  return result;
});
