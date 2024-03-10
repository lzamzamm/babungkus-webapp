import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./configs/db.config.js";
import tokoRoutes from "./routes/toko.routes.js";
import produkRoutes from "./routes/produk.routes.js";
import { notFound, errorHandler } from "./middleware/error.middleware.js";
import userRoutes from "./routes/user.route.js";

import Cors from "cors";

export const app = express();

const corsOptions = {
  origin: "*", // Alamat domain React
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Mengizinkan pengiriman cookies
  optionsSuccessStatus: 204,
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("hello");
});

// API Toko
app.use("/api/toko", tokoRoutes);
app.use("/api/produk", produkRoutes);
app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

mongoose.connect(mongoDBURL).then(() => {
  console.log("App connected to database");
  app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
  });
});
