import express from 'express';
import { createLaporan, getLaporanAll, getLaporanById, deleteLaporan } from '../controllers/laporan.controller.js';

const router = express.Router();

router.post('/', createLaporan);

router.get('/', getLaporanAll);

router.get('/:id', getLaporanById);

router.delete('/:id', deleteLaporan);

export default router;
