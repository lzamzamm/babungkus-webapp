import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StoreUpdateForm = () => {
  const [nama, setNama] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [image, setImage] = useState('');
  const [jamOperasional, setJamOperasional] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [noTelp, setNoTelp] = useState('');

  const getStoreById = async () => {
    try {
      const response = await axios.get(`http://localhost:5555/api/toko`, { withCredentials: true, credentials: 'include' });
      setNama(response.data.data.nama);
      setDeskripsi(response.data.data.deskripsi);
      setImage(response.data.data.image);
      setJamOperasional(response.data.data.jamOperasional);
      setLokasi(response.data.data.lokasi);
      setNoTelp(response.data.data.noTelp);
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStoreById();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const tokoData = {
        nama: nama,
        deskripsi: deskripsi,
        image: image,
        jam_operational: jamOperasional,
        lokasi: lokasi,
        no_telp: noTelp,
      };
      await axios.patch(`http://localhost:5555/api/toko/update`, userData, { withCredentials: true, credentials: 'include' });
      alert('Data berhasil diperbarui');
    } catch (err) {
      console.log(err);
      alert('Gagal memperbarui data');
    }
  };
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setStoreImagePreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImagePreview = () => {
    setStoreImagePreview('');
  };


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
