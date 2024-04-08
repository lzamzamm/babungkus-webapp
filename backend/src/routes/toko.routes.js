import express from "express";
import {
  createToko,
  getTokoAll,
  getTokoById,
  UpdateToko,
  updateStatusToko,
} from "../controllers/toko.controller.js";

import { upload } from "../utils/upload/toko.img.js";

const router = express.Router();

router.post(
  "/",
  upload.fields([{ name: "file", maxCount: 1 }, { name: "data" }]),
  createToko
);

router.get("/", getTokoAll);

router.get("/:id", getTokoById);

router.put("/status", updateStatusToko);

router.put("/:id", UpdateToko);

export default router;
