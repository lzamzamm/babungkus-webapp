import asyncHandler from 'express-async-handler';
import Laporan from '../models/laporan.model.js';

const createLaporan = asyncHandler(async (req, res) => {
  const { user_id, toko_id, judul, alasan, image } = req.body;

  if (!user_id || !toko_id || !judul || !alasan) {
    res.status(400);
    throw new Error('isi semua data');
  }

  const new_laporan = {
    user_id: user_id,
    toko_id: toko_id,
    judul: judul,
    alasan: alasan,
    image: image,
  };

  const laporan = await Laporan.create(new_laporan);

  return res.status(200).json({
    status: 'success',
    message: 'Laporan berhasil dibuat',
    data: laporan,
  });
});

const getLaporanAll = asyncHandler(async (req, res) => {
  const laporan = await Laporan.aggregate([
    {
      $lookup: {
        from: 'tokos',
        localField: 'toko_id',
        foreignField: 'toko_id',
        as: 'info_toko',
      },
    },
    {
      $unwind: '$info_toko',
    },
    {
      $project: {
        _id: 0,
        laporan_id: 1,
        user_id: 1,
        toko_id: 1,
        judul: 1,
        alasan: 1,
        image: 1,
        info_toko: {
          nama: '$info_toko.nama',
          deskripsi: '$info_toko.deskripsi',
          image_toko: '$info_toko.image',
          is_confirmed: '$info_toko.is_confirmed',
          jam_operasional: '$info_toko.jam_operasional',
          lokasi: '$info_toko.loksi',
          no_telp: '$info_toko.no_telp',
        },
      },
    },
  ]);

  return res.status(200).json({
    status: 'success',
    data: laporan,
  });
});

const getLaporanById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const laporan = await Laporan.aggregate([
    {
      $match: {
        laporan_id: parseInt(id),
      },
    },
    {
      $lookup: {
        from: 'tokos',
        localField: 'toko_id',
        foreignField: 'toko_id',
        as: 'info_toko',
      },
    },
    {
      $unwind: '$info_toko',
    },
    {
      $project: {
        _id: 0,
        laporan_id: 1,
        user_id: 1,
        toko_id: 1,
        judul: 1,
        alasan: 1,
        image: 1,
        info_toko: {
          nama: '$info_toko.nama',
          deskripsi: '$info_toko.deskripsi',
          image_toko: '$info_toko.image',
          is_confirmed: '$info_toko.is_confirmed',
          jam_operasional: '$info_toko.jam_operasional',
          lokasi: '$info_toko.loksi',
          no_telp: '$info_toko.no_telp',
        },
      },
    },
  ]);

  if (!laporan || laporan.length === 0) {
    res.status(404);
    throw new Error('Laporan tidak ditemukan');
  }

  return res.status(200).json({
    status: 'success',
    data: laporan[0],
  });
});

const deleteLaporan = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const laporan = await Laporan.findOne({ laporan_id: id });

  if (!laporan) {
    res.status(404);
    throw new Error('Laporan tidak ditemukan');
  }

  await Laporan.deleteOne({ laporan_id: id });

  return res.status(200).json({
    status: 'success',
    message: 'Laporan berhasil dihapus',
  });
});

export { createLaporan, getLaporanAll, getLaporanById, deleteLaporan };
