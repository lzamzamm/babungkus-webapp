import asyncHandler from 'express-async-handler';
import { createLaporanService } from '../service/laporan/create.service.js';
import { getLaporanAllService, getLaporanByIdService } from '../service/laporan/get.service.js';
import { deleteLaporanService } from '../service/laporan/delete.service.js';

const createLaporan = asyncHandler(async (req, res) => {
  const { user_id, toko_id, judul, alasan } = req.body;
  console.log('userId', user_id);
  console.log('tokoId', toko_id);
  console.log('judul', judul);
  console.log('alasan', alasan);
  if (!user_id || !toko_id || !judul || !alasan) {
    res.status(400);
    throw new Error('isi semua data');
  }

  const laporan = await createLaporanService(req.body, req.files);

  return res.status(200).json({
    status: 'success',
    message: 'Laporan berhasil dibuat',
    data: laporan,
  });
});

const getLaporanAll = asyncHandler(async (req, res) => {
  const laporan = await getLaporanAllService();

  return res.status(200).json({
    status: 'success',
    data: laporan,
  });
});

const getLaporanById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const laporan = await getLaporanByIdService(id);

  return res.status(200).json({
    status: 'success',
    data: laporan,
  });
});

const deleteLaporan = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await deleteLaporanService(id);

  return res.status(200).json({
    status: 'success',
    message: 'Laporan berhasil dihapus',
  });
});

export { createLaporan, getLaporanAll, getLaporanById, deleteLaporan };
