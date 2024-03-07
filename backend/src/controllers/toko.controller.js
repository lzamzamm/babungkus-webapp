import asyncHandler from "express-async-handler";
import Toko from "../models/toko.model.js";

const createToko = asyncHandler(async (req, res) => {
  var {
    user_id,
    nama,
    deskripsi,
    is_confirmed,
    image,
    jam_operasional,
    lokasi,
    no_telp,
  } = req.body;

  if (
    !user_id ||
    !nama ||
    !deskripsi ||
    !image ||
    !jam_operasional ||
    !lokasi ||
    !no_telp
  ) {
    res.status(400);
    throw new Error("Isi semua data");
  }

  const new_toko = {
    user_id: user_id,
    nama: nama,
    deskripsi: deskripsi,
    is_confirmed: is_confirmed,
    image: image,
    jam_operasional: jam_operasional,
    lokasi: lokasi,
    no_telp: no_telp,
  };

  const toko = await Toko.create(new_toko);

  return res.status(200).json({
    status: "Success",
    message: "Toko berhasil dibuat",
    data: toko,
  });
});

const getTokoAll = asyncHandler(async (req, res) => {
  const toko = await Toko.find({});

  res.status(200).json({
    status: "Success",
    data: toko,
  });
});

const getTokoById = asyncHandler(async (req, res) => {
  var { id } = req.params;
  const toko = await Toko.findOne({ toko_id: id });

  if (!toko) {
    res.status(404);
    throw new Error("Toko tidak ditemukan");
  }

  res.status(200).json({
    status: "Success",
    data: toko,
  });
});
const UpdateToko = asyncHandler(async (req, res) => {
  var { id } = req.params;

  var {
    nama,
    deskripsi,
    is_confirmed,
    image,
    jam_operasional,
    lokasi,
    no_telp,
  } = req.body;

  if (
    !nama &&
    !deskripsi &&
    !image &&
    !jam_operasional &&
    !lokasi &&
    !no_telp
  ) {
    res.status(400);
    throw new Error("Tidak ada data yang terisi");
  }

  var updateFields = { ...req.body };

  if (req.file) {
    updateFields.image = req.file.filename;
  }

  const toko = await Toko.findOneAndUpdate(
    { user_id: id },
    { $set: updateFields }
  );

  if (!toko) {
    res.status(404);
    throw new Error("Toko tidak ditemukan");
  }

  const tokoNew = await Toko.findOne({ user_id: id });

  res.status(200).json({
    status: "Success",
    message: "Toko berhasil diupdate",
    data: tokoNew,
  });
});

export { createToko, getTokoAll, getTokoById, UpdateToko };
