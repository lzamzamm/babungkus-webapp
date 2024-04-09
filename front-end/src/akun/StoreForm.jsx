import React, { useState } from "react";

const StoreUpdateForm = () => {
  const [storeImagePreview, setStoreImagePreview] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setStoreImagePreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImagePreview = () => {
    setStoreImagePreview("");
  };

  const User = () => {
    const [idUser, setIdUser] = useState("");
    const [nama_lengkap, setNamaLengkap] = useState("");
  };

  return (
    <div
      className="mt-10 w-full p-3 text-gray-800 md:mt-2 lg:mt-1"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <h2 className="mb-2 sm:text-base md:text-xl lg:text-2xl">
        Data Outletku!
      </h2>
      <hr
        className="mb-5 sm:mb-10"
        style={{ height: "2px", backgroundColor: "#000", border: "none" }}
      />
      <form className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl">
        <div className="mb-2 text-sm sm:mb-3 sm:text-lg">
          <label
            htmlFor="storeImage"
            className="text-l mb-2 block text-gray-700"
          >
            Foto Toko
          </label>
          <input
            type="file"
            id="storeImage"
            name="storeImage"
            className="focus:shadow-outline w-full appearance-none rounded border px-4 py-2 leading-tight text-gray-700 shadow focus:outline-none"
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
                onClick={handleRemoveImagePreview}
                className="absolute right-0 top-0 rounded-full bg-red-500 p-1 font-bold text-white hover:bg-red-700"
                style={{ top: "5px", right: "5px" }}
              >
                &times;
              </button>
            </div>
          )}
        </div>
        <div className="sm:text-l mb-2 text-sm sm:mb-3">
          <label
            className="text-l mb-2 block text-gray-700"
            htmlFor="storeName"
          >
            Nama Toko
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-4 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="NamaToko"
            name="NamaToko"
            type="text"
          />
        </div>
        <div className="sm:text-l mb-2 text-sm sm:mb-3">
          <label className="text-l mb-2 block text-gray-700" htmlFor="alamat">
            Alamat
          </label>
          <textarea
            className="focus:shadow-outline w-full appearance-none rounded border px-4 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="alamat"
            name="alamat"
            rows="4"
          ></textarea>
        </div>
        <div className="sm:text-l mb-2 text-sm sm:mb-3">
          <label
            className="text-l mb-2 mr-2 block text-gray-700"
            htmlFor="Email"
          >
            Email
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-4 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="Email"
            name="Email"
            type="email"
          />
        </div>
        <div className="sm:text-l mb-2 text-sm sm:mb-3">
          <label
            className="text-l mb-2 mr-2 block text-gray-700"
            htmlFor="Telpon"
          >
            Telpon
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-4 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="Telpon"
            name="Telpon"
            type="tel"
          />
          <p className="text-xs italic text-gray-600">
            Masukkan nomor telpon yang juga merupakan nomor WhatsApp
          </p>
        </div>
        <div className="sm:text-l mb-2 text-sm sm:mb-3">
          <label
            className="text-l mb-2 block text-gray-700"
            htmlFor="waktuMulai"
          >
            Jam Operasional
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-4 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="waktuMulai"
            name="waktuMulai"
            type="text"
          />
        </div>
        <div className="sm:text-l mb-2 text-sm sm:mb-3">
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
          ></textarea>
        </div>
        <button
          className="focus:shadow-outline rounded bg-primary px-4 py-3 font-bold text-white hover:bg-amber-700 focus:outline-none"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default StoreUpdateForm;
