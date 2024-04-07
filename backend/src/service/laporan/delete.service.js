import asyncHandler from 'express-async-handler';
import { deleteOne, findOne } from '../../repository/laporan.repository.js';

export const deleteLaporanService = asyncHandler(async (id) => {
  const laporan = await findOne(id);

  if (!laporan) {
    const error = new Error('Laporan tidak ditemukan');
    error.status = 404;
    throw error;
  }

  return await deleteOne(id);
});
