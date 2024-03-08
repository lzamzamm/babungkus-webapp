import asyncHandler from 'express-async-handler';
import Pesanan from '../models/pesanan.model.js';

const createPesanan = asyncHandler(async (req, res) => {
  const { user_id, produk_id, status_penjual, status_pembeli, jumlah, pesan, harga_total, expire_at } = req.body;

  if (!user_id || !produk_id || !status_penjual || !status_pembeli || !harga_total || !jumlah || !pesan || !expire_at) {
    res.status(400);
    throw new Error('isi semua data');
  }

  const new_pesanan = {
    user_id: user_id,
    produk_id: produk_id,
    status_penjual: status_penjual,
    status_pembeli: status_pembeli,
    jumlah: jumlah,
    pesan: pesan,
    harga_total: harga_total,
    expire_at: expire_at,
  };

  const pesanan = await Pesanan.create(new_pesanan);

  return res.status(200).json({
    status: 'success',
    message: 'Pesanan berhasil dibuat',
    data: pesanan,
  });
});

const getPesananAll = asyncHandler(async (req, res) => {
  const pesanan = await Pesanan.find({});

  return res.status(200).json({
    status: 'success',
    data: pesanan,
  });
});

const getPesananById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const pesanan = await Pesanan.findOne({ pesanan_id: id });

  if (!pesanan) {
    res.status(404);
    throw new Error('Pesanan tidak ditemukan');
  }

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

  const pesanan = await Pesanan.findOneAndUpdate({ pesanan_id: id }, { $set: updateFields });

  if (!pesanan) {
    res.status(404);
    throw new Error('Pesanan tidak ditemukan');
  }

  const pesananNew = await Pesanan.findOne({ pesanan_id: id });

  res.status(200).json({
    status: 'Success',
    message: 'Pesanan berhasil diupdate',
    data: pesananNew,
  });
});

const deletePesanan = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const pesanan = await Pesanan.findOne({ pesanan_id: id });

  if (!pesanan) {
    res.status(404);
    throw new Error('Pesanan tidak ditemukan');
  }

  await Pesanan.deleteOne({ pesanan_id: id });

  return res.status(200).json({
    status: 'success',
    message: 'Pesanan berhasil dihapus',
  });
});

export { createPesanan, getPesananAll, getPesananById, updatePesanan, deletePesanan };
