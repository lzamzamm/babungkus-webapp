import express from "express";
import mongoose from "mongoose";

import Cors from "cors";

export const app = express;

const corsOptions = {
  origin: "*", // Alamat domain React
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Mengizinkan pengiriman cookies
  optionsSuccessStatus: 204,
};

app.use(express.json());
