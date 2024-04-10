import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "../backend/public/assets/images/produk");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      "produk" +
        file.fieldname +
        "_" +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

export { upload };
