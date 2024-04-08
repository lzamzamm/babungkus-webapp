import mongoose from "mongoose";

const laporanSchema = mongoose.Schema({
  laporan_id: {
    type: Number,
    unique: true,
  },
  user_id: {
    type: Number,
    required: true,
  },
  toko_id: {
    type: Number,
    required: true,
  },
  judul: {
    type: String,
    required: true,
  },
  alasan: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
});

laporanSchema.pre("save", async function (next) {
  const doc = this;
  // Gunakan Model untuk mendapatkan nilai auto-increment
  console.log("tes middleware");
  try {
    // Gunakan Model untuk mendapatkan nilai auto-increment
    const last_doc = await mongoose
      .model("Laporan")
      .findOne()
      .sort("-laporan_id")
      .exec();
    console.log(last_doc);

    // Tentukan nilai auto-increment untuk dokumen saat ini
    doc.laporan_id = (last_doc ? last_doc.laporan_id : 0) + 1;
    next();
  } catch (err) {
    return next(err);
  }
});

const Laporan = mongoose.model("Laporan", laporanSchema);

export default Laporan;
