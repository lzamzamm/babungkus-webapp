import asyncHandler from 'express-async-handler';
import { aggregate, find, findOne } from '../../repository/pesanan.repository.js';

export const getPesananAllService = asyncHandler(async () => {
  const result = await find();
  return result;
});

export const getPesananAllCurrentUserService = asyncHandler(async (id) => {
  const pipeline = [
    {
      $match: {
        user_id: parseInt(id),
      },
    },
    {
      $lookup: {
        from: 'produks',
        localField: 'produk_id',
        foreignField: 'produk_id',
        as: 'info_produk',
      },
    },
    {
      $unwind: '$info_produk',
    },
  ];

  const result = await aggregate(pipeline);

  return result;
});

export const getPesananByIdService = asyncHandler(async (id) => {
  const result = await findOne(id);

  if (!result) {
    const error = new Error('Pesanan tidak ditemukan');
    error.status = 404;
    throw error;
  }

  return result;
});
