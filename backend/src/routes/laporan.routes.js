import express from 'express';
import { createLaporan, getLaporanAll, getLaporanById, deleteLaporan } from '../controllers/laporan.controller.js';
import { protect } from '../middleware/auth.middleware.js';
import { upload } from '../utils/upload/laporan.img.js';

const router = express.Router();

router.post('/', protect, upload.fields([{ name: 'file', maxCount: 1 }, { name: 'data' }]), createLaporan);

router.get('/', protect, getLaporanAll);

router.get('/:id', protect, getLaporanById);

router.delete('/:id', protect, deleteLaporan);

export default router;
