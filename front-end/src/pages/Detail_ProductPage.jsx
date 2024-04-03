import React from 'react'
import Navbar from '../components/Navbar'
import { GoShareAndroid } from "react-icons/go";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Detail_ProductPage() {
  return (
    <div className='font-poppins'>
      <Navbar />
      <div className='flex hp:flex-col lg:flex-row gap-[2%] p-[5%] hp:h-[60vmax] w-full bg-slate-600'>
        <div className='h-[50%] lg:h-[60%] lg:w-[60%] bg-white rounded-[1vmax]'></div>
        <div className='lg:flex lg:flex-col h-[50%] lg:gap-[5%]'>
          <div className='flex hp:flex-row lg:flex-col'>
            <div className='flex hp:flex-row gap-[2%] lg:gap-[7.5%] hp:w-full lg:w-[25vmax] lg:flex-col'>
              <div className=' flex flex-col gap-[1%] w-full h-full p-[1.5%] lg:p-[5%] rounded-[0.5vmax] bg-white'>
                <div className='flex flex-row justify-between'>
                  <div className='pl-[2%] text-[1.5vmax] lg:text-[1.75vmax] font-semibold'> Rp 100.000 </div>
                  <GoShareAndroid className='lg:text-[1.5vmax]' />
                </div>
                <div className='pl-[2%] font-light text-[1vmax]'>Makanan - Nasi Goreng</div>
                <div className='pl-[2%] font-light text-[0.75vmax]'>10 hijriah 2077</div>
              </div>
              <div className='flex flex-col gap-[1%] w-full h-full rounded-[0.5vmax] p-[1.5%] lg:p-[5%] bg-white'>
                <div className='flex flex-row pl-[2%] gap-[2%]'>
                  <FaRegCircleUser className='lg:text-[2vmax]'> /</FaRegCircleUser>
                  <div className='lg:leading-none pl-[2%]'>
                    <div className='text-[1.2vmax] font-semibold '>Warteg Ibu Fatimah ical</div>
                    <div className='text-[1vmax] lg:pt-[3%]'>Depok, Sleman Kab, Yogyakarta D.I</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex hp:flex-row gap-[2%] hp:pt-[2.5%] hp:pb-[2%] lg:pb-0'>
            <div className='flex flex-row lg:flex-col hp:items-center hp:justify-center lg:items-start lg:p-[5%] gap-[5%] w-full h-full rounded-[0.5vmax] p-[2%] bg-white text-[1vmax]'>
              <div className=''>
                <span className='text-[#6E6E6E]'>Jenis: </span>Makanan
              </div>
              <div className=''>
                <span className='text-[#6E6E6E]'>Tanggal Dibuat: </span>20 November 2023
              </div>
            </div>
          </div>
          <Link to='/'>
            <button className='bg-white  text-[1.5vmax] hp:rounded-[0.5vmax] lg:w-full p-[1vmax] hover:bg-[#d9d9d9] hover:transition-all duration-300'>Pesan</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Detail_ProductPage
