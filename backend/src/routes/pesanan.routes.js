import express from "express";
import {
  createPesanan,
  getPesananAll,
  getPesananById,
  updatePesanan,
  deletePesanan,
  getPesananAllCurrentUser,
} from "../controllers/pesanan.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createPesanan);

router.get("/", protect, getPesananAll);

router.get("/current/user", protect, getPesananAllCurrentUser);

router.get("/:id", protect, getPesananById);

router.patch("/:id", protect, updatePesanan);

router.delete("/:id", protect, deletePesanan);

export default router;
