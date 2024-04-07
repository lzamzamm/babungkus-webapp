import Produk from '../models/produk.model.js';

export async function create(produk) {
  return await Produk.create(produk);
}

export async function find() {
  return await Produk.find({});
}

export async function findByKategori(kategori) {
  return await Produk.find({ kategori: kategori });
}

export async function findOne(id) {
  return await Produk.findOne({ produk_id: id });
}

export async function findOneAndUpdate(id, updateFields) {
  return await Produk.findOneAndUpdate({ produk_id: id }, { $set: updateFields });
}

export async function deleteOne(id) {
  return await Produk.deleteOne({ produk_id: id });
}

export async function aggregate(pipeline) {
  return await Produk.aggregate(pipeline);
}
