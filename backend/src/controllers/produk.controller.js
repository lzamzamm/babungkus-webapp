import asyncHandler from 'express-async-handler';
import Produk from '../models/produk.model.js';
import { createProdukService } from '../service/produk/create.service.js';
import { getProdukAllService, getProdukByIdService, getProdukByKategoriService } from '../service/produk/get.service.js';
import { updateProdukService } from '../service/produk/update.service.js';
import { deleteProdukService } from '../service/produk/delete.service.js';

const createProduk = asyncHandler(async (req, res) => {
  const produk = await createProdukService(res, req.body, req.files);

  return res.status(200).json({
    status: 'success',
    message: 'Produk berhasil dibuat',
    data: produk,
  });
});

const getProdukAll = asyncHandler(async (req, res) => {
  const produk = await getProdukAllService();

  return res.status(200).json({
    status: 'success',
    data: produk,
  });
});

const getProdukById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const produk = await getProdukByIdService(id);

  return res.status(200).json({
    status: 'success',
    data: produk,
  });
});

const getProdukByKategori = asyncHandler(async (req, res) => {
  const produk = await getProdukByKategoriService(req.body);

  return res.status(200).json({
    status: 'success',
    data: produk,
  });
});

const getProdukByToko = asyncHandler(async (req, res) => {
  const produk = await getProdukByKategoriService(req.body);

  return res.status(200).json({
    status: 'success',
    data: produk,
  });
});

const UpdateProduk = asyncHandler(async (req, res) => {
  var { id } = req.params;
  const produk = await updateProdukService(id, req.body, req.files);

  res.status(200).json({
    status: 'Success',
    message: 'Produk berhasil diupdate',
    data: produk,
  });
});

const deleteProduk = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await deleteProdukService(id);

  return res.status(200).json({
    status: 'success',
    message: 'Produk berhasil dihapus',
  });
});

export { createProduk, getProdukAll, getProdukById, getProdukByKategori, UpdateProduk, deleteProduk };
