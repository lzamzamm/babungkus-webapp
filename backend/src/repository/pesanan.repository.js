import Pesanan from '../models/pesanan.model.js';

export async function create(pesanan) {
  return await Pesanan.create(pesanan);
}

export async function find() {
  return await Pesanan.find({});
}

export async function findOne(id) {
  return await Pesanan.findOne({ pesanan_id: id });
}

export async function findOneAndUpdate(id, updateFields) {
  return await Pesanan.findOneAndUpdate({ pesanan_id: id }, { $set: updateFields });
}

export async function deleteOne(id) {
  return await Pesanan.deleteOne({ pesanan_id: id });
}
