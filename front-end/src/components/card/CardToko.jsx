import React, { useState } from 'react';
import { MdLocationOn } from "react-icons/md";
import ImageNotAvailable from '../../assets/images/image-not-available.jpg';

function CardToko() {
    return (
        <div className='max-w-full md:max-w-[360px] shadow-md hover:-translate-y-2 border transition duration-300 ease-in-out rounded-2xl overflow-hidden'>
            <div className='flex relative'>
                <img className='object-cover w-full md:w-[360px] h-[180px] bg-gray-300' src={ImageNotAvailable} alt=''></img>
                <p className='flex absolute inset-0 mt-3 mr-3 m-auto rounded-md bg-OpenContainer text-onOpenContainer p-2 w-fit h-fit'>STATUS</p>
            </div>
            <div className='flex flex-col items-start px-5 bg-tertiary'>
                <a href='/toko' className='flex font-semibold truncate text-xl pt-5 hover:text-primary'>Nama Toko</a>
                <a href='' className='flex items-center truncate pt-1 pb-3'><MdLocationOn className='text-red-600'/> Alamat Toko</a>
                <p className='text-sm py-1 px-3 rounded-md bg-secondary text-white mb-5'>Makanan</p>
            </div>
        </div>
    )
}

export default CardToko;