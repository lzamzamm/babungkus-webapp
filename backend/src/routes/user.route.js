import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  updateUser,
  getCurrentUser,
  registerAdmin,
} from "../controllers/user.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", loginUser);
router.get("/", protect, getCurrentUser);
router.post("/logout", logoutUser);
router.post("/register", registerUser);
router.post("/admin", registerAdmin);
router.patch("/update", protect, updateUser);

export default router;
