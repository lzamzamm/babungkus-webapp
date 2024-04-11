import React, { useState, useEffect } from "react";
import config from "../utils/config";
import axios from "axios";

const StoreUpdateForm = () => {
  const [storeImagePreview, setStoreImagePreview] = useState("");
  const [nama, setNama] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [jamOperasional, setJamOperasional] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [noTelp, setNoTelp] = useState('');
  const [imageToko, setImageToko] = useState(''); 
  const [imageData, setImageData] = useState();
  var formData = new FormData();

  var userInfo = JSON.parse(localStorage.getItem("userInfo"));
  var id = userInfo.user_id;
  
  const getTokoUser = async () => {
    try {
  
      const res = await axios.get(`${config.BASE_URL}/api/toko/${id}`, { withCredentials: true, credentials: 'include' });
      setImageToko(res.data.data[0].image);
      setNama(res.data.data[0].nama);
      setDeskripsi(res.data.data[0].deskripsi);
      setJamOperasional(res.data.data[0].jam_operasional);
      setLokasi(res.data.data[0].lokasi);
      setNoTelp(res.data.data[0].no_telp);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTokoUser();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);

    if(file) {
      setImageData(file);
    }
    if (file && file.type.startsWith("image/")) {
      setStoreImagePreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImagePreview = () => {
    setStoreImagePreview("");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const tokoData = {
        nama: nama,
        deskripsi: deskripsi,
        jam_operasional: jamOperasional,
        lokasi: lokasi,
        no_telp: noTelp,
      };
      // console.log(imageData);

      formData.append("data", JSON.stringify(tokoData));
      formData.append("file", imageData);
      formData.get("file")
    
      await axios.put(`${config.BASE_URL}/api/toko/${id}`, formData, { withCredentials: true, credentials: 'include' });
      window.location.reload();
      alert('Data berhasil diperbarui');
    } catch (err) {
      console.log(err);
      alert('Gagal memperbarui data');
    }
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
      <form onSubmit={handleFormSubmit}  className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl">
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
          <div className="relative mt-4 h-32 w-32">
          <img
                src={`${config.BASE_URL}/toko/${imageToko}`}
                alt="Preview"
                className="h-full w-full object-cover"
              />
          </div>
        </div>
        <div className="sm:text-l mb-2 text-sm sm:mb-3">
          <label
            className="text-l mb-2 block text-gray-700"
            htmlFor="storeName"
          >
            Nama Toko
          </label>
          <input
            className="focus:shadow-outline w-full text-lg appearance-none rounded border px-4 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="NamaToko"
            name="NamaToko"
            type="text"
            onChange={(e) => setNama(e.target.value)}
            value={nama}
            required
          />
        </div>
        <div className="sm:text-l mb-2 text-sm sm:mb-3">
          <label className="text-l mb-2 block text-gray-700" htmlFor="alamat">
            Alamat
          </label>
          <textarea
            className="focus:shadow-outline text-lg w-full appearance-none rounded border px-4 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="alamat"
            name="alamat"
            rows="4"
            onChange={(e) => setLokasi(e.target.value)}
            value={lokasi}
            required
          ></textarea>
        </div>
        <div className="sm:text-l mb-2 text-sm sm:mb-3">
          <label
            className="text-l mb-2 mr-2 block text-gray-700"
            htmlFor="Telpon"
          >
            Telpon
          </label>
          <input
            className="focus:shadow-outline text-lg w-full appearance-none rounded border px-4 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="Telpon"
            name="Telpon"
            type="tel"
            onChange={(e) => setNoTelp(e.target.value)}
            value={noTelp}
            required
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
            className="focus:shadow-outline text-lg w-full appearance-none rounded border px-4 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="jamOperasional"
            name="jamOperasional"
            type="text"
            onChange={(e) => setJamOperasional(e.target.value)}
            value={jamOperasional}
            required
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
            className="focus:shadow-outline text-lg w-full appearance-none rounded border px-4 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="deskripsi"
            name="deskripsi"
            rows="5"
            onChange={(e) => setDeskripsi(e.target.value)}
            value={deskripsi}
            required
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