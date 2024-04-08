import asyncHandler from 'express-async-handler';
import { create } from '../../repository/toko.repository.js';
import { findWithId } from '../../repository/toko.repository.js';

export const createTokoService = asyncHandler(async (res, body, files) => {
  const toko = JSON.parse(body['data']);
  const file = files['file'][0];
  // console.log(toko, file);
  const requiredFields = ['nama', 'lokasi', 'no_telp', 'jam_operasional', 'deskripsi', 'user_id'];
  if (requiredFields.some((field) => !toko[field])) {
    res.status(400);
    throw new Error('Isi semua data');
  }

  const cekUser = await findWithId(toko['user_id']);

  // console.log(toko);
  if (cekUser) {
    res.status(400);
    throw new Error('User sudah membuat toko');
  }

  toko.image = file.filename;

  const result = await create(toko);
  //console.log(result);

  return result;
});
