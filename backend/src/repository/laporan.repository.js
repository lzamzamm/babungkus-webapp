import Laporan from '../models/laporan.model.js';

export async function create(laporan) {
  return await Laporan.create(laporan);
}

export async function findOne(id) {
  return await Laporan.findOne({ laporan_id: id });
}

export async function deleteOne(id) {
  return await Laporan.deleteOne({ laporan_id: id });
}

export async function aggregate(pipeline) {
  return await Laporan.aggregate(pipeline);
}
