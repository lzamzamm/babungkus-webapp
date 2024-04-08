import express from "express";
import {
  createProduk,
  deleteProduk,
  getProdukAll,
  getProdukById,
  getProdukByKategori,
  UpdateProduk,
} from "../controllers/produk.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createProduk);

router.get("/", getProdukAll);

router.get("/kategori", getProdukByKategori);

router.get("/:id", getProdukById);

router.patch("/:id", protect, UpdateProduk);

router.delete("/:id", protect, deleteProduk);

export default router;
