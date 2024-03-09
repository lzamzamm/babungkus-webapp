import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import Babungkus from '/assets/images/babungkuz.svg';

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div class=' w-full font-poppins hp:text-[1.75vmax] flex justify-center items-center pt-[0.5%] pl-[5%] pr-[5%] pb-[0.5%] shadow-mini-xlx sm:shadow-xlx'>
      <div class='flex justify-between w-full'>
        <div class='flex items-center gap-[10%] w-[60%]'>
          <div class='hp:w-[7vw] flex justify-center items-center '>
            <img src={Babungkus} class='w-full h-full rounded-[50%] '>
              
            </img>
          </div>
          <div class='hover:bg-[#d6d4d4] flex items-center justify-center'>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              class='flex items-center justify-center'>
              Produk
              {!isOpen ? (
                <IoIosArrowDown class='pl-[10%]' />
              ) : (
                <IoIosArrowUp class='pl-[10%]' />
              )}
            </button>
            {isOpen && (
              <div class='absolute p-[1%] mt-[15%] bg-slate-400'>
                <Link to='/'>Makanan</Link>
                <Link to='/'>Minuman</Link>
              </div>
            )}
          </div>
          <Link to='/' class='hover:bg-[#d6d4d4]'>Outlet</Link>
          <Link to='/' class='hover:bg-[#d6d4d4]'>Kontak</Link>
        </div>
        <div class=' font-inter text-[] w-[25%] flex items-center justify-between'>
          <Link to='/' class=' hover:bg-[#d6d4d4] w-[10vw] p-[3%] text-center bg-abu-abu rounded-md'>
            Masuk
          </Link>
          <Link to='/' class=' hover:bg-[#d6d4d4] w-[10vw] p-[3%] text-center bg-abu-abu rounded-md'>
            Daftar
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar