import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./configs/db.config.js";
import toko_routes from "./routes/toko.routes.js";
import produk_routes from "./routes/produk.routes.js";
import pesanan_routes from "./routes/pesanan.routes.js";
import laporan_routes from "./routes/laporan.routes.js";
import userRoutes from "./routes/user.route.js";
import { notFound, errorHandler } from "./middleware/error.middleware.js";

import cors from "cors";

export const app = express();

const corsOptions = {
  origin: "http://localhost:5173", // Alamat domain React
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Mengizinkan pengiriman cookies
  optionsSuccessStatus: 204,
};

app.use(Cors(corsOptions));

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("hello");
});

// API Toko
app.use("/api/toko", toko_routes);
app.use("/api/produk", produk_routes);
app.use("/api/pesanan", pesanan_routes);
app.use("/api/laporan", laporan_routes);
app.use("/api/pesanan", pesanan_routes);
app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

mongoose.connect(mongoDBURL).then(() => {
  console.log("App connected to database");
  app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
  });
});
