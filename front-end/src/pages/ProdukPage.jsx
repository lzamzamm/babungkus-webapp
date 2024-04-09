import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CardProduk from '../components/card/CardProduk';
import { IoIosSearch } from "react-icons/io";
import { useParams } from 'react-router-dom';

function ProdukPage() {
  const { kategori } = useParams();
  const [produkData, setProdukData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showMoreCount, setShowMoreCount] = useState(6);

  useEffect(() => {
    fetch('http://localhost:5555/api/produk/')
      .then(response => response.json())
      .then(data => {
        setProdukData(data.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    // Menunggu hingga kita memiliki data produk yang diperbarui
    if (!isLoading) {
      let filteredData = [...produkData];
      if (kategori) {
        filteredData = filteredData.filter(produk =>
          produk.kategori.toLowerCase() === kategori.toLowerCase()
        );
      }
      // Melakukan pencarian berdasarkan `searchTerm`
      const results = filteredData.filter(produk =>
        produk.nama.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  }, [searchTerm, kategori, produkData, isLoading]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleShowMore = () => {
    setShowMoreCount(prevCount => prevCount + 6);
  };

  return (
    <div>
      <Navbar/>
      <div className='bg-white flex-col mx-auto min-h-screen max-w-screen-xl text-center px-4 md:px-8 mb-8'>
        <h1 className='text-2xl md:text-3xl pt-28 mb-1 font-bold'>Mau Babungkus?</h1>
        <p>Sederhana, tapi Signifikan: Dari Sisa ke Solusi. Ayo jelajahi!</p>
        <div className='flex m-auto border border-gray-500 gap-2 align-middle justify-between rounded-lg px-3 py-2 mt-3 mb-8 max-w-[765px]'>
          <input
            className='w-full outline-none'
            type="text"
            placeholder='Cari Produk...'
            value={searchTerm}
            onChange={handleSearchChange}
          />                
          <IoIosSearch className='w-7 h-7'></IoIosSearch>
        </div>
        {isLoading ? (
          <div className='flex items-center justify-center h-40'>
            <div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-4 border-t-green-600" />
          </div>
        ) : (
          <>
            {searchResults.length === 0 ? (
              <p>Tidak ada produk tersedia dalam kategori ini.</p>
            ) : (
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-7 gap-x-5'>
                {searchResults.slice(0, showMoreCount).map(produk => (
                  <CardProduk key={produk._id} data={produk} />
                ))}
              </div>
            )}
          </>
        )}
        {produkData.length > showMoreCount && (
          <button className='w-full mt-5 px-3 py-2 text-white rounded-md bg-primary' onClick={handleShowMore}>
            Tampilkan lebih banyak
          </button>
        )}
      </div>
      <Footer/>
    </div>
  );
}

export default ProdukPage;
