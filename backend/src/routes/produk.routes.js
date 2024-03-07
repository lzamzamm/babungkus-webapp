import express from 'express';
import { createProduk, deleteProduk, getProdukAll, getProdukById, getProdukByKategori, UpdateProduk } from '../controllers/produk.controller.js';

const router = express.Router();

router.post('/', createProduk);

router.get('/', getProdukAll);

router.get('/kategori', getProdukByKategori);

router.get('/:id', getProdukById);

router.patch('/:id', UpdateProduk);

router.delete('/:id', deleteProduk);

export default router;
