import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { IoIosArrowForward } from "react-icons/io";

function DetailTokoPage() {
    const { id } = useParams();
    const [toko, setToko] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [imageExists, setImageExists] = useState(true); // State untuk menandai apakah file gambar ada atau tidak

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5555/api/toko/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Gagal mengambil data dari server');
                }
                return response.json();
            })
            .then(data => {
                setToko(data.data[0]); // Ambil objek pertama dari array data
                setLoading(false);

                // Cek apakah file gambar ada di path yang diberikan
                const img = new Image();
                img.onload = () => {
                    setImageExists(true);
                };
                img.onerror = () => {
                    setImageExists(false);
                };
                img.src = `../../public/assets/images/toko/${data.data[0].image}`;
            })
            .catch(error => {
                console.error('Error fetching toko data:', error);
                setError(error.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!toko) {
        return <div>Tidak ada data toko yang ditemukan.</div>;
    }

    return (
        <>
        <Navbar/>
         <div className='pt-24 min-h-screen px-[5%]'>
            <span className='flex text-lg items-center py-4 gap-2 cursor-pointer'>
                <a href='/toko' className='hover:text-primary'>Toko</a> 
                <IoIosArrowForward/>
                <span>{toko.nama} </span>
            </span>
            {imageExists ? (
                <img className='w-full border border-gray-300 object-cover rounded-lg h-[350px]' src={`../../public/assets/images/toko/${toko.image}`} alt={`Gambar ${toko.nama}`} />
            ) : (
                <img className='w-full border border-gray-300 object-cover rounded-lg h-[350px]' src="../../public/assets/images/image-not-available.jpg" alt="Gambar tidak tersedia" />
            )}
            <h2 className='pt-3 text-2xl font-semibold'>{toko.nama}</h2>
            <p>Deskripsi: {toko.deskripsi}</p>
        </div>
        <Footer/>
        </>
        
    );
}

export default DetailTokoPage;
