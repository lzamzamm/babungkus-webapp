import asyncHandler from 'express-async-handler';
import { create } from '../../repository/pesanan.repository.js';
import { findWithId } from '../../repository/toko.repository.js';
import { findOne, findOneAndUpdate } from '../../repository/produk.repository.js';

export const createPesananService = asyncHandler(async (res, pesanan) => {
  let produk = await findOne(pesanan.produk_id);
  produk.stok = produk.stok - pesanan.jumlah;

  const toko = await findWithId(produk.toko_id);

  if (toko.status != 'Active') {
    res.status(404);
    throw new Error('Toko sedang tidak aktif');
  }

  await findOneAndUpdate(pesanan.produk_id, produk);

  const new_pesanan = {
    user_id: pesanan.user_id,
    produk_id: pesanan.produk_id,
    status_penjual: 'Pending',
    status_pembeli: 'Pending',
    jumlah: pesanan.jumlah,
    pesan: pesanan.pesan,
    harga_total: pesanan.harga_total,
    expired_at: pesanan.expired_at,
  };

  const result = await create(new_pesanan);

  return result;
});
