import Pesanan from '../models/pesanan.model.js';

export async function create(pesanan) {
  return await Pesanan.create(pesanan);
}

export async function find() {
  return await Pesanan.find({});
}
