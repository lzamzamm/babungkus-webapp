import asyncHandler from "express-async-handler";
import Produk from "../models/produk.model.js";
import { createProdukService } from "../service/produk/create.service.js";
import {
  getProdukAllService,
  getProdukByIdService,
  getProdukByKategoriService,
} from "../service/produk/get.service.js";
import { updateProdukService } from "../service/produk/update.service.js";
import { deleteProdukService } from "../service/produk/delete.service.js";

const createProduk = asyncHandler(async (req, res) => {
  const produk = await createProdukService(res, req.body);

  return res.status(200).json({
    status: "success",
    message: "Produk berhasil dibuat",
    data: produk,
  });
});

const getProdukAll = asyncHandler(async (req, res) => {
  const produk = await getProdukAllService();

  return res.status(200).json({
    status: "success",
    data: produk,
  });
});

const getProdukById = asyncHandler(async (req, res) => {
  const produk = await getProdukByIdService(req.params);

  return res.status(200).json({
    status: "success",
    data: produk,
  });
});

const getProdukByKategori = asyncHandler(async (req, res) => {
  const produk = await getProdukByKategoriService(req.body);

  return res.status(200).json({
    status: "success",
    data: produk,
  });
});
const getProdukByToko = asyncHandler(async (req, res) => {
  const produk = await getProdukByKategoriService(req.body);

  return res.status(200).json({
    status: "success",
    data: produk,
  });
});

const UpdateProduk = asyncHandler(async (req, res) => {
  var { id } = req.params;

  var { toko_id, nama, harga, kategori, stok, deskripsi, image, expired_at } =
    req.body;

  if (
    !toko_id &&
    !nama &&
    !deskripsi &&
    !image &&
    !harga &&
    !kategori &&
    !stok &&
    !expired_at
  ) {
    res.status(400);
    throw new Error("Tidak ada data yang terisi");
  }

  var updateFields = { ...req.body };

  if (req.file) {
    updateFields.image = req.file.filename;
  }

  const produk = await updateProdukService(id, updateFields);

  res.status(200).json({
    status: "Success",
    message: "Produk berhasil diupdate",
    data: produk,
  });
});

const deleteProduk = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await deleteProdukService(id);

  return res.status(200).json({
    status: "success",
    message: "Produk berhasil dihapus",
  });
});

export {
  createProduk,
  getProdukAll,
  getProdukById,
  getProdukByKategori,
  UpdateProduk,
  deleteProduk,
};
