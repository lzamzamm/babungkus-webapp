import asyncHandler from "express-async-handler";
import {
  findOne,
  findOneAndUpdate,
} from "../../repository/produk.repository.js";
import fs from "fs";

export const updateProdukService = asyncHandler(
  async (res, id, body, files) => {
    const produkNew = JSON.parse(body["data"]);

    const requiredFields = [
      "nama",
      "harga",
      "kategori",
      "stok",
      "deskripsi",
      "image",
      "expired_at",
    ];
    if (requiredFields.every((field) => !produkNew[field])) {
      res.status(400);
      throw new Error("Isi semua data");
    }
    console.log(files["file"]);

    if (files["file"]) {
      const file = files["file"][0];
      produkNew.image = file.filename;
      const result = await findOne(id);
      var filePath = `../backend/public/assets/images/produk/${result.image}`;
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error("Error deleting file:", err);
          return;
        }
        console.log("File deleted successfully");
      });
    }

    const produk = await findOneAndUpdate(id, produkNew);

    if (!produk) {
      const error = new Error("Produk tidak ditemukan");
      error.status = 404;
      throw error;
    }

    const result = await findOne(id);

    return result;
  }
);
