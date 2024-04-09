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
    const [showMoreCount, setShowMoreCount] = useState(6);

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

    const handleShowMore = () => {
        setShowMoreCount(prevCount => prevCount + 6);
    };

    return (
        <div>
            <Navbar />
            <div className='flex-col max-w-screen-xl min-h-screen px-4 mx-auto mb-8 text-center bg-white md:px-8' >
                <h1 className='mb-1 text-2xl font-bold md:text-3xl pt-28'>Mau Babungkus?</h1>
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
                    <div className='flex items-center justify-center h-40'>
                        <div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-4 border-t-green-600" />
                    </div>
                ) : (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-7 gap-x-5'>
                        {searchResults.slice(0, showMoreCount).map(toko => (
                            <CardToko key={toko._id} data={toko} />
                        ))}
                    </div>
                )}
                {tokoData.length > showMoreCount && (
                    <button className='w-full mt-5 px-3 py-2 text-white rounded-md bg-primary' onClick={handleShowMore}>
                        Tampilkan lebih banyak
                    </button>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default TokoPage;
