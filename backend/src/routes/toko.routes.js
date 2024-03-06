import express from "express";
import {
  createToko,
  getTokoAll,
  getTokoById,
  UpdateToko,
} from "../controllers/toko.controller.js";

const router = express.Router();

router.post("/", createToko);

router.get("/", getTokoAll);

router.get("/:id", getTokoById);

router.put("/:id", UpdateToko);

export default router;
