import asyncHandler from "express-async-handler";
import { create } from "../../repository/toko.repository.js";
import { findWithId } from "../../repository/user.repository.js";

export const createTokoService = asyncHandler(async (res, toko) => {
  const requiredFields = [
    "user_id",
    "nama",
    "deskripsi",
    "image",
    "jam_operasional",
    "lokasi",
    "no_telp",
  ];
  if (requiredFields.some((field) => !toko[field])) {
    res.status(400);
    throw new Error("Isi semua data");
  }

  const cekUser = findWithId(toko["user_id"]);
  if (cekUser) {
    res.status(400);
    throw new Error("User sudah membuat toko");
  }

  const newToko = { ...toko };

  const result = await create(newToko);
  //console.log(result);

  return result;
});
