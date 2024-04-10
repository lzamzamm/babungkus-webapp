/* import React, { useState, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa'; // Pastikan Anda telah mengimpor ini
import { MdDelete } from 'react-icons/md'; // Pastikan Anda telah mengimpor ini
import axios from 'axios';

const ProdukSaya = () => {
  const [data, setData] = useState([]); // State untuk menyimpan data produk

  useEffect(() => {
    // Contoh fungsi untuk memuat data (gantikan dengan logika pengambilan data Anda)
    const fetchData = async () => {
      const response = await axios.get('http://localhost:5555/api/produk');
      console.log(response.data);
      // const data = await response.json();
      setData(response.data); // Set data produk ke state
    };

    fetchData();
  }, []); // Kode ini akan dijalankan sekali setelah komponen dimuat

  // Fungsi handleEdit (perlu diimplementasikan)
  const handleEdit = (id) => {
    console.log('Edit', id);
    // Implementasi fungsi untuk mengedit produk
  };

  // Fungsi handleDelete (perlu diimplementasikan)
  const handleDelete = (id) => {
    console.log('Delete', id);
    // Implementasi fungsi untuk menghapus produk
  };

  return (
    <div className="container mx-auto p-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="text-start my-10">
        <h1 className="text-2xl font-bold">Produk Saya</h1>
        <p className="mt-2 text-l">Atur Produkmu di sini</p>
        <hr className="mb-10" style={{ height: '2px', backgroundColor: '#000', border: 'none' }} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {data.map((item) => (
          <div key={item.id} className="border rounded-lg p-4">
            <img src={item.foto_produk} alt={item.nama_produk} className="w-full h-32 object-cover rounded mb-4" />
            <h4 className="font-bold">{item.nama_produk}</h4>
            <p>Tanggal Dibuat: {item.tanggal_dibuat}</p>
            <p>Tanggal Kadaluarsa: {item.tanggal_kadaluarsa}</p>
            <p>Jenis Makanan: {item.jenis_makanan}</p>
            <div className="flex justify-between items-center mt-4">
              <button onClick={() => handleEdit(item.id)} className="text-green-500 hover:text-blue-500 mr-2">
                <FaEdit />
              </button>
              <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:text-red-700">
                <MdDelete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProdukSaya;
 */
