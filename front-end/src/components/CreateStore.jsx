import axios from "axios";
import React, { useState } from "react";

const CreateStoreForm = () => {
  const [storeImagePreview, setStoreImagePreview] = useState("");
  const [inputData, setInputData] = useState({});
  const [image, setImage] = useState();

  var formData = new FormData();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Hanya mengambil satu file
    setImage(file);
    if (file && file.type.substr(0, 5) === "image") {
      setStoreImagePreview(URL.createObjectURL(file)); // Membuat URL untuk preview
    }
  };

  const handleRemoveImagePreview = () => {
    setStoreImagePreview(""); // Menghapus preview gambar
  };

  const createHandler = async (e) => {
    e.preventDefault();
    // console.log(inputData);
    // console.log(image);
    var userInfo = JSON.parse(localStorage.getItem("userInfo"));
    inputData.user_id = userInfo.user_id;
    console.log(inputData);
    formData.append("data", JSON.stringify(inputData));
    formData.append("file", image);
    var res = await axios.post("http://localhost:5555/api/toko", formData);
    console.log(res);
  };

  return (
    <div
      className="p-5 w-full text-gray-800"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <h2 className="text-2xl mb-2">Buka Tokomu Sekarang!</h2>
      <p className="text-xl mb-2">
        Bersama-Sama Selamatkan Bumi dan Atasi Kelaparan
      </p>
      <hr
        className="mb-10"
        style={{ height: "2px", backgroundColor: "#000", border: "none" }}
      />
      <form className="max-w-2xl">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-l mb-2"
            htmlFor="storeImage"
          >
            Foto Toko
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="storeImage"
            name="storeImage"
            type="file"
            onChange={handleImageChange}
          />
          {storeImagePreview && (
            <div className="mt-4 relative w-32 h-32">
              <img
                src={storeImagePreview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                className="absolute top-0 right-0 bg-red-500 hover:bg-red-700 text-white font-bold p-1 rounded-full"
                onClick={handleRemoveImagePreview}
                style={{ top: "5px", right: "5px" }}
              >
                &times;
              </button>
            </div>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-l mb-2"
            htmlFor="storeName"
          >
            Nama Toko
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="NamaToko"
            name="nama"
            type="text"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-l mb-2" htmlFor="alamat">
            Alamat
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="alamat"
            name="lokasi"
            rows="4"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-l mb-2 mr-2"
            htmlFor="Telpon"
          >
            Telpon
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Telpon"
            name="no_telp"
            type="tel"
            onChange={handleInputChange}
          />
          <p className="text-gray-600 text-xs italic">
            Masukkan nomor telpon yang juga merupakan nomor WhatsApp
          </p>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-l mb-2"
            htmlFor="waktuMulai"
          >
            Jam Operasional
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="waktuMulai"
            name="jam_operasional"
            type="text"
            onChange={handleInputChange}
          />
        </div>
        {/* <div className="mb-4">
          <label
            className="block text-gray-700 text-l mb-2"
            htmlFor="waktuSelesai"
          >
            Waktu Tutup
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="waktuSelesai"
            name="waktuSelesai"
            type="time"
          />
        </div> */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-l mb-2"
            htmlFor="deskripsi"
          >
            Deskripsi Toko
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="deskripsi"
            name="deskripsi"
            rows="5"
            onChange={handleInputChange}
          ></textarea>
        </div>
        {/* Add additional fields for alamat toko, nomor telepon toko, jam operasional toko, and deskripsi singkat toko here */}

        <button
          className="bg-primary hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          //   type="submit"
          onClick={createHandler}
        >
          Buka Toko
        </button>
      </form>
    </div>
  );
};

export default CreateStoreForm;
