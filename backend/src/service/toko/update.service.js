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
