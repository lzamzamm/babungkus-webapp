import asyncHandler from 'express-async-handler';
import { create } from '../../repository/pesanan.repository.js';

export const createPesananService = asyncHandler(async (pesanan) => {
  // const newExpiredAt = pesanan.expired_at.toISOString().slice(0, 10).split('-').reverse().join('-');
  // console.log(newExpiredAt);

  const new_pesanan = {
    user_id: pesanan.user_id,
    produk_id: pesanan.produk_id,
    status_penjual: pesanan.status_penjual,
    status_pembeli: pesanan.status_pembeli,
    jumlah: pesanan.jumlah,
    pesan: pesanan.pesan,
    harga_total: pesanan.harga_total,
    expired_at: pesanan.expired_at,
  };

  const result = await create(new_pesanan);

  return result;
});
