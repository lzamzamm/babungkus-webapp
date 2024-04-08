import express from "express";
import {
  createLaporan,
  getLaporanAll,
  getLaporanById,
  deleteLaporan,
} from "../controllers/laporan.controller.js";
import { protect } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/", protect, createLaporan);

router.get("/", protect, getLaporanAll);

router.get("/:id", protect, getLaporanById);

router.delete("/:id", protect, deleteLaporan);

export default router;
