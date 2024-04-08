import React, { useState } from 'react';
import { MdLocationOn } from "react-icons/md";
import ImageNotAvailable from '../../assets/images/image-not-available.jpg';

function CardToko() {
    return (
        <div className='max-w-full md:max-w-[360px] shadow-md hover:-translate-y-2 border transition duration-300 ease-in-out rounded-2xl overflow-hidden'>
            <div className='flex relative'>
                <img className='object-cover w-full md:w-[360px] h-[180px] bg-gray-300 filter brightness-75' src={ImageNotAvailable} alt='Gambar '></img>
                <a href='/toko' className='flex text-white text-shadow-md font-medium text-lg absolute inset-0 ml-5 mb-3 m-auto w-fit h-fit hover:text-primary'>Nama Toko</a>
            </div>
            <div className='flex flex-col items-start px-5 bg-tertiary cursor-pointer'>
                <p className='flex font-medium truncate text-xl pt-5 hover:text-primary'>Nama Produk</p>
                <p className='flex items-center truncate pt-1 pb-3'>Rp.9999</p>
            </div>
        </div>
    )
}

export default CardToko;