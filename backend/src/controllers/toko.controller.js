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
    throw new Error("isi semua data");
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
    status: "success",
    message: "Toko berhasil dibuat",
    data: toko,
  });
});

const getTokoAll = asyncHandler(async (req, res) => {});
const getTokoById = asyncHandler(async (req, res) => {});
const UpdateToko = asyncHandler(async (req, res) => {});

export { createToko, getTokoAll, getTokoById, UpdateToko };
