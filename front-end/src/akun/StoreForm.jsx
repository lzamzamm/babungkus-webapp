import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const StoreUpdateForm = () => {
  const [storeImagePreview, setStoreImagePreview] = useState("");
  const [imageToko, setImageToko] = useState()

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setStoreImagePreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImagePreview = () => {
    setStoreImagePreview('');
  };

  const User = () => {
    const [idUser, setIdUser] = useState("");
    const [nama_lengkap, setNamaLengkap] = useState("");
  };

  
  const getTokoUser = async () => {
    var userInfo = JSON.parse(localStorage.getItem("userInfo"));
    var id = userInfo.user_id;

    const res = await axios.get(`http://localhost:5555/api/toko/${id}`, { withCredentials: true, credentials: 'include' })
    //console.log(res.data.data[0].image)
    setImageToko(res.data.data[0].image)
  }

  useEffect(() => {
    getTokoUser();
  }, []);

  return (
    <div className="p-3 w-full text-gray-800 mt-10 md:mt-2 lg:mt-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <h2 className="lg:text-2xl md:text-xl sm:text-base mb-2">Data Outletku!</h2>
      <hr className="mb-5 sm:mb-10" style={{ height: '2px', backgroundColor: '#000', border: 'none' }} />
      <form className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl">
        <div className="mb-2 sm:mb-3 text-sm sm:text-lg">
          <label htmlFor="storeImage" className="block text-gray-700 text-l mb-2">
            Foto Toko
          </label>
          <input type="file" id="storeImage" name="storeImage" className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleImageChange} />
          {storeImagePreview && (
            <div className="mt-4 relative w-32 h-32">
              <img src={storeImagePreview} alt="Preview" className="w-full h-full object-cover" />
              <button type="button" onClick={handleRemoveImagePreview} className="absolute top-0 right-0 bg-red-500 hover:bg-red-700 text-white font-bold p-1 rounded-full" style={{ top: '5px', right: '5px' }}>
                &times;
              </button>
            </div>
          )}
          <div className="relative mt-4 h-32 w-32">
          <img
                src={`http://localhost:5555/toko/${imageToko}`}
                alt="Preview"
                className="h-full w-full object-cover"
              />
          </div>
        </div>
        <div className="mb-2 sm:mb-3 text-sm sm:text-l">
          <label className="block text-gray-700 text-l mb-2" htmlFor="storeName">
            Nama Toko
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="NamaToko" name="NamaToko" type="text" />
        </div>
        <div className="mb-2 sm:mb-3 text-sm sm:text-l">
          <label className="block text-gray-700 text-l mb-2" htmlFor="alamat">
            Alamat
          </label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="alamat" name="alamat" rows="4"></textarea>
        </div>
        <div className="mb-2 sm:mb-3 text-sm sm:text-l">
          <label className="block text-gray-700 text-l mb-2 mr-2" htmlFor="Email">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Email" name="Email" type="email" />
        </div>
        <div className="mb-2 sm:mb-3 text-sm sm:text-l">
          <label className="block text-gray-700 text-l mb-2 mr-2" htmlFor="Telpon">
            Telpon
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Telpon" name="Telpon" type="tel" />
          <p className="text-gray-600 text-xs italic">Masukkan nomor telpon yang juga merupakan nomor WhatsApp</p>
        </div>
        <div className="mb-2 sm:mb-3 text-sm sm:text-l">
          <label className="block text-gray-700 text-l mb-2" htmlFor="waktuMulai">
            Jam Operasional
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="waktuMulai" name="waktuMulai" type="text" />
        </div>
        <div className="mb-2 sm:mb-3 text-sm sm:text-l">
          <label className="block text-gray-700 text-l mb-2" htmlFor="deskripsi">
            Deskripsi Toko
          </label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="deskripsi" name="deskripsi" rows="5"></textarea>
        </div>
        <button className="bg-primary hover:bg-amber-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default StoreUpdateForm;
