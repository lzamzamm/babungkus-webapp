import asyncHandler from "express-async-handler";
import { create } from "../../repository/produk.repository.js";
import { validateToko } from "../../utils/validation.util.js";
import { findWithId } from "../../repository/toko.repository.js";

export const createProdukService = asyncHandler(async (res, body, files) => {
  const produk = JSON.parse(body["data"]);
  const file = files["file"][0];
  // console.log(produk);

  const requiredFields = [
    "toko_id",
    "nama",
    "harga",
    "kategori",
    "stok",
    "deskripsi",
    "expired_at",
  ];
  if (requiredFields.some((field) => !produk[field])) {
    res.status(400);
    throw new Error("Isi semua data");
  }

  // const toko = await findWithId(toko_id);

  // if (toko.status != 'Active') {
  //   res.status(400);
  //   throw new Error('Toko sedang tidak aktif');
  // }

  produk.image = file.filename;

  const result = await create(produk);

  return result;
});
