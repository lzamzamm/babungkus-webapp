import asyncHandler from 'express-async-handler';
import { deleteOne, findOne } from '../../repository/laporan.repository.js';

export const deleteLaporanService = asyncHandler(async (id) => {
  const laporan = await findOne(id);

  if (!laporan) {
    res.status(404);
    throw new Error('Laporan tidak ditemukan');
  }

  return await deleteOne(id);
});
