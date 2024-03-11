import asyncHandler from 'express-async-handler';
import Produk from '../models/produk.model.js';

const createProduk = asyncHandler(async (req, res) => {
  const { toko_id, nama, harga, kategori, stok, deskripsi, image, expire_at } = req.body;

  if (!toko_id || !nama || !deskripsi || !image || !harga || !kategori || !stok || !expire_at) {
    res.status(400);
    throw new Error('isi semua data');
  }

  var updateFields = { ...req.body };

  if (req.file) {
    updateFields.image = req.file.filename;
  }

  const new_produk = {
    toko_id: toko_id,
    nama: nama,
    harga: harga,
    kategori: kategori,
    stok: stok,
    deskripsi: deskripsi,
    image: image,
    expire_at: expire_at,
  };

  const produk = await Produk.create(new_produk);

  return res.status(200).json({
    status: 'success',
    message: 'Produk berhasil dibuat',
    data: produk,
  });
});

const getProdukAll = asyncHandler(async (req, res) => {
  const produk = await Produk.find({});

  return res.status(200).json({
    status: 'success',
    data: produk,
  });
});

const getProdukById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const produk = await Produk.findOne({ produk_id: id });

  if (!produk) {
    res.status(404);
    throw new Error('Produk tidak ditemukan');
  }

  return res.status(200).json({
    status: 'success',
    data: produk,
  });
});

const getProdukByKategori = asyncHandler(async (req, res) => {
  const { kategori } = req.body;

  const produk = await Produk.find({ kategori: kategori });

  return res.status(200).json({
    status: 'success',
    data: produk,
  });
});

const UpdateProduk = asyncHandler(async (req, res) => {
  var { id } = req.params;

  var { toko_id, nama, harga, kategori, stok, deskripsi, image, expire_at } = req.body;

  if (!toko_id && !nama && !deskripsi && !image && !harga && !kategori && !stok && !expire_at) {
    res.status(400);
    throw new Error('Tidak ada data yang terisi');
  }

  var updateFields = { ...req.body };

  if (req.file) {
    updateFields.image = req.file.filename;
  }

  const produk = await Produk.findOneAndUpdate({ produk_id: id }, { $set: updateFields });

  if (!produk) {
    res.status(404);
    throw new Error('Produk tidak ditemukan');
  }

  const produkNew = await Produk.findOne({ produk_id: id });

  res.status(200).json({
    status: 'Success',
    message: 'Produk berhasil diupdate',
    data: produkNew,
  });
});

const deleteProduk = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const produk = await Produk.findOne({ produk_id: id });

  if (!produk) {
    res.status(404);
    throw new Error('Produk tidak ditemukan');
  }

  await Produk.deleteOne({ produk_id: id });

  return res.status(200).json({
    status: 'success',
    message: 'Produk berhasil dihapus',
  });
});

export { createProduk, getProdukAll, getProdukById, getProdukByKategori, UpdateProduk, deleteProduk };
