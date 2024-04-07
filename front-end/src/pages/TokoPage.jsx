import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import CardToko from '../components/card/CardToko'
import { IoIosSearch } from "react-icons/io";

function TokoPage() {
    const [tokoData, setTokoData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5555/api/toko/')
            .then(response => response.json())
            .then(data => {
                setTokoData(data.data);
                setSearchResults(data.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        const results = tokoData.filter(toko =>
            toko.nama.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm, tokoData]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <Navbar />
            <div className='bg-white flex-col mx-auto min-h-screen max-w-screen-xl text-center px-4 md:px-8 mb-8' >
                <h1 className='text-2xl md:text-3xl pt-28 mb-1 font-bold'>Mau Babungkus?</h1>
                <p>Sederhana, tapi Signifikan: Dari Sisa ke Solusi. Ayo jelajahi!</p>
                <div className='flex m-auto border border-gray-500 gap-2 align-middle justify-between rounded-lg px-3 py-2 mt-3 mb-8 max-w-[765px]'>
                    <input
                        className='w-full outline-none'
                        type="text"
                        placeholder='Cari Toko...'
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <IoIosSearch className='w-7 h-7'></IoIosSearch>
                </div>
                {isLoading ? (
                    <div className='flex justify-center items-center h-40'>
                        <div class="border-gray-300 h-10 w-10 animate-spin rounded-full border-4 border-t-green-600" />
                    </div>
                ) : (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-7 gap-x-5'>
                        {searchResults.length > 0 ? (
                            searchResults.slice(0, 6).map(toko => (
                                <CardToko key={toko._id} data={toko} />
                            ))
                        ) : (
                            <p>Toko "{searchTerm}" tidak ditemukan.</p>
                        )}
                    </div>
                )}
                {tokoData.length > 6 && <button className='text-white px-3 py-2 rounded-md w-full bg-primary'>Tampilkan lebih banyak</button>}
            </div>
            <Footer />
        </div>
    )
}

export default TokoPage;
