import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  updateUser,
  getCurrentUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", loginUser);
router.get("/", getCurrentUser);
router.post("/logout", logoutUser);
router.post("/register", registerUser);
router.patch("/update", updateUser);

export default router;
