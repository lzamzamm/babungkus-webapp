import asyncHandler from 'express-async-handler';
import { find, findByKategori, findOne } from '../../repository/produk.repository.js';

export const getProdukAllService = asyncHandler(async () => {
  const result = await find();
  return result;
});

export const getProdukByIdService = asyncHandler(async (id) => {
  const produk = await findOne(id);

  if (!produk) {
    const error = new Error('Produk tidak ditemukan');
    error.status = 404;
    throw error;
  }

  const pipeline = [
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
        toko_id: 1,
        nama: 1,
        harga: 1,
        kategori: 1,
        stok: 1,
        deskripsi: 1,
        image: 1,
        expired_at: 1,
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
  ];

  const result = await aggregate(pipeline);

  return result;
});

export const getProdukByKategoriService = asyncHandler(async ({ kategori }) => {
  const result = await findByKategori(kategori);

  if (!result) {
    const error = new Error('Produk tidak ditemukan');
    error.status = 404;
    throw error;
  }

  return result;
});
