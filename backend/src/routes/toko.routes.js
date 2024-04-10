import express from "express";
import {
  createToko,
  getTokoAll,
  getTokoById,
  UpdateToko,
  updateStatusToko,
} from "../controllers/toko.controller.js";

import { upload } from "../utils/upload/toko.img.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
  "/",
  upload.fields([{ name: "file", maxCount: 1 }, { name: "data" }]),
  createToko
);

router.get("/", getTokoAll);

router.get("/:id", protect, getTokoById);

router.put("/status", protect, updateStatusToko);

router.put("/:id", protect, UpdateToko);

export default router;
