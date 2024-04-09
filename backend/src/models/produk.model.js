import mongoose from "mongoose";

const produkSchema = mongoose.Schema(
  {
    produk_id: {
      type: Number,
      unique: true,
    },
    toko_id: {
      type: Number,
      required: true,
    },
    nama: {
      type: String,
      required: true,
    },
    harga: {
      type: Number,
      required: true,
    },
    kategori: {
      type: String,
      enum: ["Makanan", "Minuman", "Pakan"],
      required: true,
    },
    stok: {
      type: Number,
      required: true,
    },
    deskripsi: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    expired_at: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

produkSchema.pre("save", async function (next) {
  const doc = this;
  // Gunakan Model untuk mendapatkan nilai auto-increment
  console.log("tes middleware");
  try {
    // Gunakan Model untuk mendapatkan nilai auto-increment
    const last_doc = await mongoose
      .model("Produk")
      .findOne()
      .sort("-produk_id")
      .exec();
    console.log(last_doc);

    // Tentukan nilai auto-increment untuk dokumen saat ini
    doc.produk_id = (last_doc ? last_doc.produk_id : 0) + 1;
    next();
  } catch (err) {
    return next(err);
  }
});

produkSchema.methods.toJSON = function () {
  const obj = this.toObject();
  // Format the date to dd-mm-yyyy
  obj.expired_at = obj.expired_at
    ? obj.expired_at.toISOString().slice(0, 10).split("-").reverse().join("-")
    : null;
  return obj;
};

const Produk = mongoose.model("Produk", produkSchema);

export default Produk;
