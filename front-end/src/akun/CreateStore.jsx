import React, { useState, useEffect } from "react";
import config from "../utils/config";
import axios from "axios";

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
    const file = e.target.files[0];
    if (file.size > 5242880) {
      alert("File size must not exceed 5MB");
      return;
    }
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
    try {
      var userInfo = JSON.parse(localStorage.getItem("userInfo"));
      inputData.user_id = userInfo.user_id;
      formData.append("data", JSON.stringify(inputData));
      formData.append("file", image);
      var response = await axios.post(`${config.BASE_URL}/api/toko`, formData,);
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

  return (
    <div
      className="mt-10 w-full p-3 text-gray-800 md:mt-2 lg:mt-1"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <h2 className="mb-2 text-xl md:text-xl lg:text-2xl">
        Buka Outletmu Sekarang!
      </h2>
      <p className="text-l mb-2">
        Bersama-Sama Selamatkan Bumi dan Atasi Kelaparan
      </p>
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
            Foto Toko
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
            htmlFor="storeName"
          >
            Nama Toko
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-4 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="NamaToko"
            name="nama"
            type="text"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-2 text-sm sm:mb-3 sm:text-lg">
          <label className="text-l mb-2 block text-gray-700" htmlFor="alamat">
            Alamat
          </label>
          <textarea
            className="focus:shadow-outline w-full appearance-none rounded border px-4 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="alamat"
            name="lokasi"
            rows="4"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="mb-2 text-sm sm:mb-3 sm:text-lg">
          <label
            className="text-l mb-2 mr-2 block text-gray-700"
            htmlFor="Telpon"
          >
            Telpon
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-4 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="Telpon"
            name="no_telp"
            type="tel"
            onChange={handleInputChange}
          />
          <p className="text-xs italic text-gray-600">
            Masukkan nomor telpon yang juga merupakan nomor WhatsApp
          </p>
        </div>
        <div className="mb-2 text-sm sm:mb-3 sm:text-lg">
          <label
            className="text-l mb-2 block text-gray-700"
            htmlFor="waktuMulai"
          >
            Jam Operasional
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-4 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="jamOperasional"
            name="jam_operasional"
            type="text"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="text-l mb-2 block text-gray-700"
            htmlFor="deskripsi"
          >
            Deskripsi Toko
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
          Buka Toko
        </button>
      </form>
    </div>
  );
};

export default CreateStoreForm;