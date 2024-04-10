import asyncHandler from 'express-async-handler';
import Toko from '../models/toko.model.js';
import { createTokoService } from '../service/toko/create.service.js';
import { getTokoAllService, getTokoIdService, getTokoByStatusService } from '../service/toko/get.service.js';
import { updateTokoService } from '../service/toko/update.service.js';
import { updateStatusTokoService } from '../service/toko/update.service.js';

const createToko = asyncHandler(async (req, res) => {
  const toko = await createTokoService(res, req.body, req.files);

  return res.status(200).json({
    status: 'Success',
    message: 'Toko berhasil dibuat',
    data: toko,
  });
});

const getTokoAll = asyncHandler(async (req, res) => {
  const toko = await getTokoAllService();

  res.status(200).json({
    status: 'Success',
    data: toko,
  });
});

const getTokoByStatus = asyncHandler(async (req, res) => {
  const toko = await getTokoByStatusService(req.body.status);

  res.status(200).json({
    status: 'Success',
    data: toko,
  });
});

const getTokoById = asyncHandler(async (req, res) => {
  const toko = await getTokoIdService(res, req.params);

  res.status(200).json({
    status: 'Success',
    data: toko,
  });
});

const UpdateToko = asyncHandler(async (req, res) => {
  const toko = await updateTokoService(res, req.params, req.body, req.file);

  res.status(200).json({
    status: 'Success',
    message: 'Toko berhasil diupdate',
    data: toko,
  });
});

const updateStatusToko = asyncHandler(async (req, res) => {
  const toko = await updateStatusTokoService(res, req.body);

  res.status(200).json({
    status: 'Success',
    message: 'Toko berhasil di freeze',
    data: toko,
  });
});

export { createToko, getTokoAll, getTokoByStatus, getTokoById, UpdateToko, updateStatusToko };
