import express from 'express';
import { createPesanan, getPesananAll, getPesananById, updatePesanan, deletePesanan } from '../controllers/pesanan.controller.js';

const router = express.Router();

router.post('/', createPesanan);

router.get('/', getPesananAll);

router.get('/:id', getPesananById);

router.patch('/:id', updatePesanan);

router.delete('/:id', deletePesanan);

export default router;
