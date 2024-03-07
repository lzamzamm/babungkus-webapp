import mongoose from 'mongoose';

const produkSchema = mongoose.Schema({
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
  expire_at: {
    type: String,
    required: true,
  },
});

produkSchema.pre('save', async function (next) {
  const doc = this;
  // Gunakan Model untuk mendapatkan nilai auto-increment
  console.log('tes middleware');
  try {
    // Gunakan Model untuk mendapatkan nilai auto-increment
    const last_doc = await mongoose.model('Produk').findOne().sort('-produk_id').exec();
    console.log(last_doc);

    // Tentukan nilai auto-increment untuk dokumen saat ini
    doc.produk_id = (last_doc ? last_doc.produk_id : 0) + 1;
    next();
  } catch (err) {
    return next(err);
  }
});

const Produk = mongoose.model('Produk', produkSchema);

export default Produk;
