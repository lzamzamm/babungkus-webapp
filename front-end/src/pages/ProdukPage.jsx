import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import CardProduk from '../components/card/CardProduk'
import { IoIosSearch } from "react-icons/io";

function ProdukPage() {
    return (
      <div>
        <Navbar/>
        <div className='bg-white flex-col mx-auto min-h-screen max-w-screen-xl text-center px-4 md:px-8 mb-8' >
            <h1 className='text-2xl md:text-3xl pt-28 mb-1 font-bold'>Mau Babungkus?</h1>
            <p>Sederhana, tapi Signifikan: Dari Sisa ke Solusi. Ayo jelajahi!</p>
            <div className='flex m-auto border border-gray-500 gap-2 align-middle justify-between rounded-lg px-3 py-2 mt-3 mb-8 max-w-[765px]'>
                <input className='w-full outline-none' type="text" placeholder='Cari Toko...'/>
                <IoIosSearch className='w-7 h-7'></IoIosSearch>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-7 gap-x-5'>
                <CardProduk></CardProduk>
            </div>
            <button className='hidden text-white px-3 py-2 rounded-md w-full bg-primary'>Tampilkan lebih banyak</button>
        </div>
        <Footer/>
      </div>
    )
  }
  
  export default ProdukPage;