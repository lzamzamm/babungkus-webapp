import express from 'express';
import { createLaporan, getLaporanAll, getLaporanById, deleteLaporan } from '../controllers/laporan.controller.js';
import { upload } from '../utils/upload/laporan.img.js';

const router = express.Router();

router.post('/', upload.fields([{ name: 'file', maxCount: 1 }, { name: 'data' }]), createLaporan);

router.get('/', getLaporanAll);

router.get('/:id', getLaporanById);

router.delete('/:id', deleteLaporan);

export default router;
