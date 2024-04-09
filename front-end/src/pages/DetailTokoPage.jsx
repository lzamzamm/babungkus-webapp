import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdLocationOn } from "react-icons/md";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { IoIosArrowForward } from "react-icons/io";
import CardProduk from '../components/card/CardProduk';

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
        return <div className='min-h-screen align-middle'>
                    <div className='flex items-center justify-center h-96'>
                        <div className="border-gray-300 h-16 w-16 animate-spin rounded-full border-8 border-t-green-600" />
                    </div>
                </div>;
    }

    if (error) {
        return <div className='min-h-screen'>Error: {error}</div>;
    }

    if (!toko) {
        return <div className='min-h-screen'>Tidak ada data toko yang ditemukan.</div>;
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
            <h2 className='pt-5 md:text-3xl text-xl font-semibold'>{toko.nama}</h2>
            <p className='flex items-center truncate pb-3'><MdLocationOn className='text-red-600' /> {toko.lokasi}</p>
            <span className='flex'><h2>Jam Operasional:&nbsp;</h2>{toko.jam_operasional}</span>
            <h2>Deskripsi :</h2>
            <p>{toko.deskripsi}</p>
            <div class="inline-flex items-center justify-center w-full">
                <hr class="w-full h-px my-8 bg-gray-400 border-0"></hr>
                <h2 class="text-lg md:text-xl absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2">Daftar Produk</h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-7 gap-x-5 mb-7'>
              {toko.info_produk.map(produk => (
                <CardProduk key={produk._id} data={produk} />
              ))}
            </div>
        </div>
        <Footer/>
        </>
        
    );
}

export default DetailTokoPage;
