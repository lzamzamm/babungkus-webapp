import asyncHandler from "express-async-handler";
import { create } from "../../repository/produk.repository.js";
import { validateToko } from "../../utils/validation.util.js";
import { findWithId } from "../../repository/toko.repository.js";

export const createProdukService = asyncHandler(async (res, data) => {
  const { toko_id, nama, harga, kategori, stok, deskripsi, image, expired_at } =
    data;
  if (
    !toko_id ||
    !nama ||
    !deskripsi ||
    !image ||
    !harga ||
    !kategori ||
    !stok ||
    !expired_at
  ) {
    res.status(400);
    throw new Error("isi semua data");
  }

  const toko = await findWithId(toko_id);

  if (toko.status != "Active") {
    res.status(400);
    throw new Error("Toko sedang tidak aktif");
  }

  const produk = {
    toko_id: data.toko_id,
    nama: data.nama,
    harga: data.harga,
    kategori: data.kategori,
    stok: data.stok,
    deskripsi: data.deskripsi,
    image: data.image,
    expired_at: data.expired_at,
  };

  const result = await create(produk);

  return result;
});
