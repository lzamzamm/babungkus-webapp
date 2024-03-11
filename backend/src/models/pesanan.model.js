import mongoose from 'mongoose';

const pesananSchema = mongoose.Schema(
  {
    pesanan_id: {
      type: Number,
      unique: true,
    },
    user_id: {
      type: Number,
      required: true,
    },
    produk_id: {
      type: Number,
      required: true,
    },
    jumlah: {
      type: Number,
      required: true,
    },
    status_penjual: {
      type: String,
      enum: ['Selesai', 'Pending', 'Batal'],
      required: true,
    },
    status_pembeli: {
      type: String,
      enum: ['Selesai', 'Pending', 'Batal'],
      required: true,
    },
    pesan: {
      type: String,
      required: true,
    },
    harga_total: {
      type: Number,
      required: true,
    },
    expired_at: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

pesananSchema.pre('save', async function (next) {
  const doc = this;
  // Gunakan Model untuk mendapatkan nilai auto-increment
  console.log('tes middleware');
  try {
    // Gunakan Model untuk mendapatkan nilai auto-increment
    const last_doc = await mongoose.model('Pesanan').findOne().sort('-pesanan_id').exec();
    console.log(last_doc);

    // Tentukan nilai auto-increment untuk dokumen saat ini
    doc.pesanan_id = (last_doc ? last_doc.pesanan_id : 0) + 1;

    next();
  } catch (err) {
    return next(err);
  }
});

pesananSchema.methods.toJSON = function () {
  const obj = this.toObject();
  // Format the date to dd-mm-yyyy
  obj.expired_at = obj.expired_at ? obj.expired_at.toISOString().slice(0, 10).split('-').reverse().join('-') : null;
  return obj;
};

const Pesanan = mongoose.model('Pesanan', pesananSchema);

export default Pesanan;
