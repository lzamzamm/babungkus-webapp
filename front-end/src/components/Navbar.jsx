import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div class=' w-full fixed font-poppins text-[14px] sm:text-[22px] flex justify-center items-center sm:pt-[1%] sm:pb-[1%] pt-[2%] pl-[5%] pr-[5%] pb-[2%] shadow-mini-xlx sm:shadow-xlx'>
      <div class='flex justify-between w-full'>
        <div class='flex items-center gap-[10%] w-[55%]'>
          <div class='w-[45px] h-[45px] sm:w-[70px] sm:h-[70px] '>
            <div class='w-full h-full rounded-[50%] bg-abu-abu' />
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
        <div class=' font-inter w-[25%] flex items-center justify-between'>
          <Link to='/' class=' hover:bg-[#d6d4d4] w-[45%] p-[3%] text-center bg-abu-abu rounded-md'>
            Masuk
          </Link>
          <Link to='/' class=' hover:bg-[#d6d4d4] w-[45%] p-[3%] text-center bg-abu-abu rounded-md'>
            Daftar
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar