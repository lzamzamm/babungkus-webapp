import mongoose from "mongoose";

const tokoSchema = mongoose.Schema({
  tokoId: {
    type: String,
    required: true,
  },
  nama: {
    type: String,
    required: true,
  },
  deskripsi: {
    type: String,
    required: true,
  },
  isConfirmed: {
    type: Boolean,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  jamOperasional: {
    type: String,
    required: true,
  },
  lokasi: {
    type: String,
    required: true,
  },
  noTelp: {
    type: String,
    required: true,
  },
});

tokoSchema.pre("save", async function (next) {
  const doc = this;
  // Gunakan Model untuk mendapatkan nilai auto-increment
  // console.log("tes middleware");
  try {
    // Gunakan Model untuk mendapatkan nilai auto-increment
    const lastDoc = await mongoose
      .model("Siswa")
      .findOne()
      .sort("-tokoId")
      .exec();
    console.log(lastDoc);

    // Tentukan nilai auto-increment untuk dokumen saat ini
    doc.tokoId = (lastDoc ? lastDoc.tokoId : 1) + 1;
    next();
  } catch (err) {
    return next(err);
  }
});

const Siswa = mongoose.model("Toko", tokoSchema);

export default tokoSchema;
