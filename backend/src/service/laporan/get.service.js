import asyncHandler from "express-async-handler";
import { aggregate } from "../../repository/laporan.repository.js";

export const getLaporanAllService = asyncHandler(async () => {
  const pipeline = [
    {
      $lookup: {
        from: "tokos",
        localField: "toko_id",
        foreignField: "toko_id",
        as: "info_toko",
      },
    },
    {
      $unwind: "$info_toko",
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
          nama: "$info_toko.nama",
          deskripsi: "$info_toko.deskripsi",
          image_toko: "$info_toko.image",
          is_confirmed: "$info_toko.is_confirmed",
          jam_operasional: "$info_toko.jam_operasional",
          lokasi: "$info_toko.loksi",
          no_telp: "$info_toko.no_telp",
        },
      },
    },
  ];

  const result = await aggregate(pipeline);

  return result;
});

export const getLaporanByIdService = asyncHandler(async (id) => {
  const pipeline = [
    {
      $match: {
        laporan_id: parseInt(id),
      },
    },
    {
      $lookup: {
        from: "tokos",
        localField: "toko_id",
        foreignField: "toko_id",
        as: "info_toko",
      },
    },
    {
      $unwind: "$info_toko",
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
          nama: "$info_toko.nama",
          deskripsi: "$info_toko.deskripsi",
          image_toko: "$info_toko.image",
          is_confirmed: "$info_toko.is_confirmed",
          jam_operasional: "$info_toko.jam_operasional",
          lokasi: "$info_toko.loksi",
          no_telp: "$info_toko.no_telp",
        },
      },
    },
  ];

  const result = await aggregate(pipeline);

  if (!result || result.length === 0) {
    const error = new Error("Laporan tidak ditemukan");
    error.status = 404;
    throw error;
  }

  return result[0];
});
