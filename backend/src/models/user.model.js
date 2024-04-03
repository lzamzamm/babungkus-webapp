import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = mongoose.Schema(
  {
    user_id: {
      type: Number,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    nama_lengkap: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    no_telp: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
  const doc = this;
  // Gunakan Model untuk mendapatkan nilai auto-increment
  try {
    // Gunakan Model untuk mendapatkan nilai auto-increment
    const lastDoc = await mongoose.model('User').findOne().sort('-user_id').exec();
    // console.log(lastDoc);

    // Tentukan nilai auto-increment untuk dokumen saat ini
    doc.user_id = (lastDoc ? lastDoc.user_id : 0) + 1;
    next();
  } catch (err) {
    return next(err);
  }
});

const User = mongoose.model('User', userSchema);

export default User;
