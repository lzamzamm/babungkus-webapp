import asyncHandler from "express-async-handler";
import {
  findOneAndUpdate,
  findWithId,
} from "../../repository/toko.repository.js";

export const updateTokoService = asyncHandler(
  async (res, { id }, toko, imageFile) => {
    const requiredFields = [
      "nama",
      "deskripsi",
      "image",
      "jam_operasional",
      "lokasi",
      "no_telp",
    ];

    if (requiredFields.every((field) => !toko[field])) {
      res.status(400);
      throw new Error("Tidak ada data yang terisi");
    }

    if (toko.status != "Active") {
      res.status(400);
      throw new Error("Toko sedang tidak aktif");
    }

    const newToko = { ...toko };

    if (imageFile) {
      newToko.image = imageFile.filename;
    }

    var result = await findOneAndUpdate(id, newToko);

    if (!result) {
      res.status(404);
      throw new Error("Toko tidak ditemukan");
    }

    result = await findWithId(id);

    return result;
  }
);

export const updateStatusTokoService = asyncHandler(async (res, toko) => {
  var id = toko["toko_id"];
  var status = toko["status"];
  if (!id || !status) {
    res.status(404);
    throw new Error("Data tidak lengkap");
  }
  const timeNow = new Date();

  if (status == "Active") {
    var result = await findOneAndUpdate(id, { status: "Active" });
  } else if (status == "Freeze") {
    var result = await findOneAndUpdate(id, {
      status: "Freeze",
      freeze_at: timeNow,
    });
  } else {
    var result = await findOneAndUpdate(id, {
      status: "Banned",
    });
  }

  if (!result) {
    res.status(404);
    throw new Error("Toko tidak ditemukan");
  }

  result = findWithId(id);

  return result;
});
