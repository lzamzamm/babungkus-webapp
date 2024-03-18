import asyncHandler from 'express-async-handler';
import { create } from '../../repository/laporan.repository.js';

export const createLaporanService = asyncHandler(async (laporan) => {
  const new_laporan = {
    user_id: laporan.user_id,
    toko_id: laporan.toko_id,
    judul: laporan.judul,
    alasan: laporan.alasan,
    image: laporan.image,
  };

  const result = await create(new_laporan);

  return result;
});
