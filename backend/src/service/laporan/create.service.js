import asyncHandler from 'express-async-handler';
import { create } from '../../repository/laporan.repository.js';

export const createLaporanService = asyncHandler(async (body, files) => {
  const laporan = JSON.parse(body['data']);
  const file = files['file'][0];

  laporan.image = file.filename;

  const result = await create(laporan);

  return result;
});
