import asyncHandler from 'express-async-handler';
import { find, findWithId, findWithStatus, aggregate, findOneByName } from '../../repository/toko.repository.js';

export const getTokoAllService = asyncHandler(async () => {
  const result = await find();

  return result;
});

export const getTokoByStatusService = asyncHandler(async (data) => {
  const result = await findWithStatus(data.status);

  return result;
});

export const getTokoByNameService = asyncHandler(async (nama) => {
  const result = await findOneByName(nama);

  return result;
});

export const getTokoIdService = asyncHandler(async (res, { id }) => {
  const pipeline = [
    {
      $match: {
        user_id: parseInt(id),
      },
    },
    {
      $lookup: {
        from: 'produks',
        localField: 'toko_id',
        foreignField: 'toko_id',
        as: 'info_produk',
      },
    },
  ];
  const result = await aggregate(pipeline);

  if (!result) {
    res.status(404);
    throw new Error('Toko tidak ditemukan');
  }

  return result;
});
