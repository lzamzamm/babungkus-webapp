import mongoose from "mongoose";

const tokoSchema = mongoose.Schema(
  {
    toko_id: {
      type: Number,
      unique: true,
    },
    user_id: {
      type: Number,
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
    status: {
      type: String,
      enum: ["Pending", "Freeze", "Active", "Banned"],
      default: "Pending",
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    jam_operasional: {
      type: String,
      required: true,
    },
    lokasi: {
      type: String,
      required: true,
    },
    no_telp: {
      type: String,
      required: true,
    },
    freeze_at: {
      type: Date,
    },
  },
  { timestamps: true }
);

tokoSchema.pre("save", async function (next) {
  const doc = this;
  // Gunakan Model untuk mendapatkan nilai auto-increment
  //console.log("tes middleware");
  try {
    // Gunakan Model untuk mendapatkan nilai auto-increment
    const last_doc = await mongoose
      .model("Toko")
      .findOne()
      .sort("-toko_id")
      .exec();
    //console.log(last_doc);

    // Tentukan nilai auto-increment untuk dokumen saat ini
    doc.toko_id = (last_doc ? last_doc.toko_id : 0) + 1;
    next();
  } catch (err) {
    return next(err);
  }
});

const Toko = mongoose.model("Toko", tokoSchema);

export default Toko;
