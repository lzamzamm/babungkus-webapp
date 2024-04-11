import axios from "axios";
import React, { useEffect, useState } from "react";
import config from "../utils/config";

const AddProductForm = () => {
  const [storeImagePreview, setStoreImagePreview] = useState("");
  const [inputData, setInputData] = useState({});
  const [image, setImage] = useState();
  const [tokoId, setTokoId] = useState([]);

  var formData = new FormData();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const maxFileSize = 5 * 1024 * 1024;
    if (file) {
      if (file.type.substr(0, 5) === "image" && file.size <= maxFileSize) {
        setImage(file);
        setStoreImagePreview(URL.createObjectURL(file));
      } else if (file.size > maxFileSize) {
        alert("Ukuran gambar melebihi batas maksimal 5MB.");
        e.target.value = "";
      } else {
        alert("File yang diunggah bukan gambar.");
      }
    }
  };

  const handleRemoveImagePreview = () => {
    setStoreImagePreview("");
  };

  const getToko = async () => {
    var userInfo = JSON.parse(localStorage.getItem("userInfo"));
    var response = await axios.get(
      `${config.BASE_URL}/api/toko/${userInfo.user_id}`,
      { withCredentials: true },
    );

    setTokoId(response.data.data[0].toko_id);
  };

  const createHandler = async (e) => {
    e.preventDefault();
    try {
      // var userInfo = JSON.parse(localStorage.getItem("userInfo"));
      inputData.toko_id = tokoId;
      formData.append("data", JSON.stringify(inputData));
      formData.append("file", image);
      var response = await axios.post(`${config.BASE_URL}/api/produk`, formData, {
        withCredentials: true,
        credentials: "include",
      });
      if (response.data.status === "success") {
        alert(response.data.message);
      } else {
        alert(response.data.message);
      }
      window.location.reload();
    } catch (error) {
      if (error.response) {
        if (error.response.data.status === "fail") {
          alert(error.response.data.message);
        } else if (error.response.data.status === "error") {
          alert(error.response.data.message);
        }
      } else {
        alert("Terjadi kesalahan saat mengirim permintaan.");
      }
    }
  };

  useEffect(() => {
    getToko();
  }, []);

  return (
    <div
      className="mt-10 w-full p-3 text-gray-800 md:mt-2 lg:mt-1"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <h2 className="mb-2 sm:text-base md:text-xl lg:text-2xl">
        Tambah Produk
      </h2>
      <hr
        className="mb-5 sm:mb-10"
        style={{ height: "2px", backgroundColor: "#000", border: "none" }}
      />
      <form className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl">
        <div className="mb-2 text-sm sm:mb-3 sm:text-lg">
          <label
            className="text-l mb-2 block text-gray-700"
            htmlFor="storeImage"
          >
            Foto Produk
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-4 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="storeImage"
            name="storeImage"
            type="file"
            onChange={handleImageChange}
          />
          {storeImagePreview && (
            <div className="relative mt-4 h-32 w-32">
              <img
                src={storeImagePreview}
                alt="Preview"
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                className="absolute right-0 top-0 rounded-full bg-red-500 p-1 font-bold text-white hover:bg-red-700"
                onClick={handleRemoveImagePreview}
                style={{ top: "5px", right: "5px" }}
              >
                &times;
              </button>
            </div>
          )}
        </div>
        <div className="mb-2 text-sm sm:mb-3 sm:text-lg">
          <label
            className="text-l mb-2 block text-gray-700"
            htmlFor="namaProduk"
          >
            Nama Produk
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-4 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="namaProduk"
            name="nama"
            type="text"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-2 text-sm sm:mb-3 sm:text-lg">
          <label className="text-l mb-2 block text-gray-700" htmlFor="harga">
            Harga
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-4 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="harga"
            name="harga"
            type="number"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-2 text-sm sm:mb-3 sm:text-lg">
          <label className="text-l mb-2 block text-gray-700" htmlFor="stok">
            Stok
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-4 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="stok"
            name="stok"
            type="number"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-2 text-sm sm:mb-3 sm:text-lg">
          <label
            className="text-l mb-2 block text-gray-700"
            htmlFor="expire_at"
          >
            Tanggal Kadaluwarsa
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-4 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="expire_at"
            name="expired_at"
            type="date"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-2 text-sm sm:mb-3 sm:text-lg">
          <label
            className="text-l mb-2 block text-gray-700"
            htmlFor="jenisMakanan"
          >
            Jenis Makanan
          </label>
          <select
            className="focus:shadow-outline w-full appearance-none rounded border px-4 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="jenisMakanan"
            name="kategori"
            onChange={handleInputChange}
          >
            <option value="">-- Jenis --</option>
            <option value="Makanan">Makanan</option>
            <option value="Minuman">Minuman</option>
            <option value="Pakan">Pakan</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="text-l mb-2 block text-gray-700"
            htmlFor="deskripsi"
          >
            Deskripsi Produk
          </label>
          <textarea
            className="focus:shadow-outline w-full appearance-none rounded border px-4 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="deskripsi"
            name="deskripsi"
            rows="5"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button
          className="focus:shadow-outline rounded bg-primary px-4 py-3 font-bold text-white hover:bg-amber-700 focus:outline-none"
          onClick={createHandler}
        >
          Tambah
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
