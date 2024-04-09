import express from 'express';
import { createProduk, deleteProduk, getProdukAll, getProdukById, getProdukByKategori, UpdateProduk } from '../controllers/produk.controller.js';
import { upload } from '../utils/upload/produk.img.js';

const router = express.Router();

router.post('/', upload.fields([{ name: 'file', maxCount: 1 }, { name: 'data' }]), createProduk);

router.get('/', getProdukAll);

router.get('/kategori', getProdukByKategori);

router.get('/:id', getProdukById);

router.patch('/:id', upload.fields([{ name: 'file', maxCount: 1 }, { name: 'data' }]), UpdateProduk);

router.delete('/:id', deleteProduk);

export default router;
