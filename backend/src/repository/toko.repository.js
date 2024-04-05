import Toko from "../models/toko.model.js";

export async function create(toko) {
  return await Toko.create(toko);
}

export async function find() {
  return await Toko.find({});
}

export async function findWithId(id) {
  return await Toko.findOne({ toko_id: id });
}

export async function findWithStatus(status) {
  return await Toko.findOne({ toko_id: status });
}
export async function findWithUserId(id) {
  return await Toko.findOne({ user_id: id });
}

export async function findOneAndUpdate(id, toko) {
  return await Toko.findOneAndUpdate({ user_id: id }, { $set: toko });
}
