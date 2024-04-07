import React from 'react';
import { MdLocationOn } from "react-icons/md";
import ImageNotAvailable from '../../assets/images/image-not-available.jpg';

function CardToko({ data }) {
    const { nama, lokasi, deskripsi } = data;

    return (
        <div className='max-w-full md:max-w-[400px] shadow-md hover:-translate-y-2 border transition duration-300 ease-in-out rounded-2xl overflow-hidden'>
            <div className='flex relative'>
                <img className='object-cover w-full md:w-[400px] h-[180px] bg-gray-300' src={ImageNotAvailable} alt='' />
            </div>
            <div className='flex flex-col items-start px-5 bg-tertiary'>
                <a href='/toko' className='flex font-semibold truncate text-xl pt-5 hover:text-primary'>{nama}</a>
                <a href='' className='flex items-center truncate pt-1 pb-3'><MdLocationOn className='text-red-600' /> {lokasi}</a>
                <p className='text-sm text-left line-clamp-2 mb-5'>{deskripsi}</p>
            </div>
        </div>
    )
}

export default CardToko;
