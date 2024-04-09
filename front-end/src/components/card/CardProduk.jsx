import React, { useState, useEffect } from 'react';
import ImageNotAvailable from '../../assets/images/image-not-available.jpg';
import { Link } from 'react-router-dom'; // Impor Link dari react-router-dom

function CardProduk({ data }) {
    const { nama, toko_id, harga } = data;
    const [tokoNama, setTokoNama] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5555/api/toko/${toko_id}`)
            .then(response => response.json())
            .then(data => {
                setTokoNama(data.data[0].nama);
            })
            .catch(error => console.error('Error fetching toko data:', error));
    }, [toko_id]);

    return (
        <div className='max-w-full md:max-w-[400px] shadow-md hover:-translate-y-2 border transition duration-300 ease-in-out rounded-2xl overflow-hidden'>
            <div className='flex relative'>
                <img className='object-cover w-full md:w-[400px] h-[180px] bg-gray-300 filter brightness-75' src={ImageNotAvailable} alt='Gambar '></img>
                <Link to={`/toko/${toko_id}`} className='flex text-white text-shadow-md font-medium text-lg absolute inset-0 ml-5 mb-3 m-auto w-fit h-fit hover:text-primary'>{tokoNama}</Link>
            </div>
            <div className='flex flex-col items-start px-5 bg-tertiary cursor-pointer'>
                <p className='flex font-medium truncate text-xl pt-5 hover:text-primary'>{nama}</p>
                <p className='flex items-center truncate pt-1 pb-3'>Rp. {harga}</p>
            </div>
        </div>
    )
}

export default CardProduk;
