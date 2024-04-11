import asyncHandler from "express-async-handler";
import {
  findOneAndUpdate,
  findWithId,
} from "../../repository/toko.repository.js";
import fs from "fs";

export const updateTokoService = asyncHandler(
  async (res, { id }, body, files) => {
    const toko = JSON.parse(body["data"]);

    const requiredFields = [
      "nama",
      "deskripsi",
      "jam_operasional",
      "lokasi",
      "no_telp",
    ];

    if (requiredFields.every((field) => !toko[field])) {
      res.status(400);
      throw new Error("Tidak ada data yang terisi");
    }

    if (files["file"]) {
      const file = files["file"][0];
      produkNew.image = file.filename;
      const result = await findWithId(id);
      var filePath = `../backend/public/assets/images/toko/${result.image}`;
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error("Error deleting file:", err);
          return;
        }
        console.log("File deleted successfully");
      });
    }

    var result = await findOneAndUpdate(id, toko);

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
