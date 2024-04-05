import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';

import Food_1 from '../../public/assets/images/beranda/food-1.jpg'
import { RiRecycleLine } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";

function RiwayatPage() {
  return (
    <div className='font-poppins'>
      <Navbar />
      <div className='flex hp:flex-col lg:flex-row p-[5%] h-auto bg-slate-400 gap-[2vh] '>
        <div className='lg:h-[35vmax] lg:w-[20%] bg-white hidden lg:block rounded-[0.5vmax]'>
          <div className='flex flex-col items-center w-full h-full gap-[5%] overflow-hidden'>
            <FaRegCircleUser className='text-[7.5vmax] pt-[10%]' />
            <div className='font-semibold text-[2vmax] p-[0.5%] w-full text-center'>UIN Sunan Kalijaga Yogyakarta</div>
            <div className='font-light text-[1.75vmax] p-[0.5%] w-full text-center'>uinsuka @student.ac.id</div>
            <div className='font-light text-[1.75vmax] p-[0.5%] w-full text-center'>081245892378</div>
          </div>
        </div>
        <div className='hp:h-[20vmax] lg:w-[40%]'>
          <p className='font-semibold lg:text-center h-[15%] text-[1.75vmax]'>Pembelian</p>
          <ul className='bg-gray-100 h-[85%] rounded-[0.5vmax]'>
            <li className='h-full'>
              <div className='flex flex-row justify-between h-[20%] bg-slate-300 p-[1.5%] rounded-t-[0.5vmax]'>
                <div className='flex flex-row items-center w-[60%]'>
                  <RiRecycleLine className='lg:text-[2.5vmax]' />
                  <div className='text-[1.5vmax] pl-[5%]'>12 Feb 2024</div>
                </div>
                <div className='text-[1.25vmax] pt-[0.5%] pb-[0.5%] pl-[1%] pr-[1%] bg-orange-300 rounded-[0.5vmax]'>Pending</div>
              </div>
              <Link to='/'>
                <div className='h-[80%] p-[3%] hover:bg-slate-200'>
                  <div className='flex flex-row h-[80%]'>
                    <img className='h-[70%] w-[20%] rounded-[1vmax]' src={Food_1} />
                    <div className='flex flex-col pl-[5%] w-[75%]'>
                      <p className='font-light text-[1.75vmax]'>Nasi Goreng</p>
                      <p className='text-[#777777] text-[1.4vmax]'>Makanan</p>
                    </div>
                  </div>
                  <p className='h-[20%] text-[1.5vmax] text-end'><span className='text-[1.25vmax] pr-[2%]'>Total Pesanan </span> Rp 40.000 </p>
                </div> 
              </Link>
            </li>
          </ul>
        </div>
        <div className='hp:h-[20vmax] lg:w-[40%]'>
          <p className='font-semibold lg:text-center h-[15%] text-[1.75vmax]'>Penjualan</p>
          <ul className='bg-gray-100 h-[85%] rounded-[0.5vmax]'>
            <li className='h-full'>
              <div className='flex flex-row justify-between h-[20%] bg-slate-300 p-[1.5%] rounded-t-[0.5vmax]'>
                <div className='flex flex-row items-center w-[60%]'>
                  <RiRecycleLine className='text-[2.5vmax]' />
                  <div className='text-[1.5vmax] pl-[5%]'>12 Feb 2024</div>
                </div>
                <div className='text-[1.25vmax] pt-[0.5%] pb-[0.5%] pl-[1%] pr-[1%] bg-orange-300 rounded-[0.5vmax]'>Pending</div>
              </div>
              <Link to='/'>
                <div className='h-[80%] p-[3%] hover:bg-slate-200'>
                  <div className='flex flex-row h-[80%]'>
                    <img className='h-[70%] w-[20%] rounded-[1vmax]' src={Food_1} />
                    <div className='flex flex-col pl-[5%] w-[75%]'>
                      <p className='font-light text-[1.75vmax]'>Nasi Goreng</p>
                      <p className='text-[#777777] text-[1.4vmax]'>Makanan</p>
                    </div>
                  </div>
                  <p className='h-[20%] text-[1.5vmax] text-end'><span className='text-[1.25vmax] pr-[2%]'>Total Pesanan </span> Rp 40.000 </p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RiwayatPage
