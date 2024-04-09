import express from 'express';
import { createProduk, deleteProduk, getProdukAll, getProdukById, getProdukByKategori, UpdateProduk } from '../controllers/produk.controller.js';
import { upload } from '../utils/upload/produk.img.js';
import express from 'express';
import { createProduk, deleteProduk, getProdukAll, getProdukById, getProdukByKategori, UpdateProduk } from '../controllers/produk.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/', protect, upload.fields([{ name: 'file', maxCount: 1 }, { name: 'data' }]), createProduk);

router.get('/', getProdukAll);

router.get('/kategori', getProdukByKategori);

router.get('/:id', getProdukById);

router.patch('/:id', protect, upload.fields([{ name: 'file', maxCount: 1 }, { name: 'data' }]), UpdateProduk);

router.delete('/:id', protect, deleteProduk);

export default router;
