import asyncHandler from 'express-async-handler';
import Pesanan from '../models/pesanan.model.js';
import { createPesananService } from '../service/pesanan/create.service.js';
import { getPesananAllCurrentUserService, getPesananAllService, getPesananByIdService } from '../service/pesanan/get.service.js';
import { updatePesananService } from '../service/pesanan/update.service.js';
import { deletePesananService } from '../service/pesanan/delete.service.js';

const createPesanan = asyncHandler(async (req, res) => {
  const { user_id, produk_id, status_penjual, status_pembeli, jumlah, pesan, harga_total, expired_at } = req.body;

  if (!user_id || !produk_id || !status_penjual || !status_pembeli || !harga_total || !jumlah || !pesan || !expired_at) {
    res.status(400);
    throw new Error('isi semua data');
  }

  const pesanan = await createPesananService(res, req.body);

  return res.status(200).json({
    status: 'success',
    message: 'Pesanan berhasil dibuat',
    data: pesanan,
  });
});

const getPesananAll = asyncHandler(async (req, res) => {
  const pesanan = await getPesananAllService();

  return res.status(200).json({
    status: 'success',
    data: pesanan,
  });
});

const getPesananAllCurrentUser = asyncHandler(async (req, res) => {
  const pesanan = await getPesananAllCurrentUserService(req.user.user_id);
  console.log(req.user.user_id);

  return res.status(200).json({
    status: 'success',
    data: pesanan,
  });
});

const getPesananById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const pesanan = await getPesananByIdService(id);

  return res.status(200).json({
    status: 'success',
    data: pesanan,
  });
});

const updatePesanan = asyncHandler(async (req, res) => {
  var { id } = req.params;
  const { user_id, produk_id, status_penjual, status_pembeli, jumlah, pesan, harga_total, expire_at } = req.body;

  if (!user_id && !produk_id && !status_penjual && !status_pembeli && !jumlah && !pesan && !harga_total && !expire_at) {
    res.status(400);
    throw new Error('Tidak ada data yang terisi');
  }

  var updateFields = { ...req.body };

  const pesanan = await updatePesananService(id, updateFields);

  res.status(200).json({
    status: 'Success',
    message: 'Pesanan berhasil diupdate',
    data: pesanan,
  });
});

const deletePesanan = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await deletePesananService(id);

  return res.status(200).json({
    status: 'success',
    message: 'Pesanan berhasil dihapus',
  });
});

export { createPesanan, getPesananAll, getPesananAllCurrentUser, getPesananById, updatePesanan, deletePesanan };
