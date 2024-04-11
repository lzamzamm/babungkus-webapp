import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../utils/config';

const StoreVerification = () => {
  const [permintaanToko, setPermintaanToko] = useState([]);

  const getPermintaanToko = async () => {
    try {
      const res = await axios.get(`${config.BASE_URL}/api/toko`, { withCredentials: true, credentials: 'include' });
      setPermintaanToko(res.data.data); // Pastikan struktur respons sesuai dengan yang diharapkan
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPermintaanToko();
  }, []);

  const handleFreeze = async (toko_id) => {
    try {
      const freeze = {
        toko_id: toko_id,
        status: 'Freeze' 
      };
  
      await axios.put(`http://localhost:5555/api/toko/status`, freeze, {
        withCredentials: true,
        credentials: 'include'
      });
      getPermintaanToko();
    } catch (err) {
      console.log(err); 
    }
  };

  const handleActive = async (toko_id) => {
    try {
      const active = {
        toko_id: toko_id,
        status: 'Active' 
      };
  
      await axios.put(`http://localhost:5555/api/toko/status`, active, {
        withCredentials: true,
        credentials: 'include'
      });
  
      getPermintaanToko();
    } catch (err) {
      console.log(err); 
    }
  };

  const handleBanned = async (toko_id) => {
    try {

      const banned = {
        toko_id: toko_id,
        status: 'Banned' 
      };
  
      await axios.put(`http://localhost:5555/api/toko/status`, banned, {
        withCredentials: true,
        credentials: 'include'
      });

      getPermintaanToko();
    } catch (err) {
      console.log(err); 
    }
  };
  

  return (
    <div className="p-3 w-full text-gray-800 mt-10">
      <h2 className="text-2xl mb-4">Verifikasi Pembukaan Toko</h2>
      {permintaanToko.length > 0 ? permintaanToko.map((toko) => (
        <div key={toko._id} className="mb-8 p-4 border border-gray-200 rounded shadow">
          <p><strong>Nama Toko:</strong> {toko.nama}</p>
          <p><strong>Alamat:</strong> {toko.lokasi}</p>
          <p><strong>Telepon:</strong> {toko.no_telp}</p>
          <p><strong>Jam Operasional:</strong> {toko.jam_operasional}</p>
          <p><strong>Deskripsi Toko:</strong> {toko.deskripsi}</p>
          <p><strong>Status:</strong> {toko.status}</p>
          <div className="flex space-x-2 mt-4">
            <button
              className="text-white bg-green-500 hover:bg-green-700 font-semibold py-2 px-4 rounded"
              onClick={() => handleActive(toko.toko_id)}
            >
              Active
            </button>
            <button
              className="text-white bg-blue-500 hover:bg-blue-700 font-semibold py-2 px-4 rounded"
              onClick={() => handleFreeze(toko.toko_id)}
            >
              Freeze
            </button>
            <button
              className="text-white bg-red-500 hover:bg-red-700 font-semibold py-2 px-4 rounded"
              onClick={() => handleBanned(toko.toko_id)}
            >
              Takedown
            </button>
          </div>
        </div>
      )) : <p>Tidak ada permintaan toko untuk ditampilkan.</p>}
    </div>
  );
};
  

export default StoreVerification;
