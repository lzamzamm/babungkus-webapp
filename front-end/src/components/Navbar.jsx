import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import LogoBabungkus from '/assets/images/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { label: 'Produk', href: '/', subItems: [{ label: 'Makanan', href: '/' }, { label: 'Minuman', href: '/' }] },
    { label: 'Outlet', href: '/' },
    { label: 'Kontak', href: '/' }
  ];

  const buttonItems = [
    { label: 'Masuk', href: '/login' },
    { label: 'Daftar', href: '/register' }
  ];

  return (
    <div className='w-full font-poppins hp:text-[1.75vmax] flex justify-center items-center py-4 px-[5%] shadow-mini-xlx sm:shadow-xlx'>
      <div className='flex justify-between w-full'>
        <div className='flex items-center gap-[10%] w-[60%]'>
          <div className='hp:w-[7vw] flex justify-center items-center'>
            <img src={LogoBabungkus} className='w-full h-full' alt="Logo Babungkus" />
          </div>
          <div className='hover:text-primary flex items-center justify-center'>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className='flex items-center justify-center'>
              Produk
              {!isOpen ? (
                <IoIosArrowDown className='pl-[10%]' />
              ) : (
                <IoIosArrowUp className='pl-[10%]' />
              )}
            </button>
            {isOpen && (
              <div className='absolute p-[1%] mt-[15%] bg-slate-400'>
                {navItems[0].subItems.map((item, index) => (
                  <Link key={index} to={item.href}>{item.label}</Link>
                ))}
              </div>
            )}
          </div>
          {navItems.slice(1).map((item, index) => (
            <Link key={index} to={item.href} className='hover:text-primary'>{item.label}</Link>
          ))}
        </div>
        <div className='font-inter text-[] w-[25%] flex items-center justify-between'>
          {buttonItems.map((item, index) => (
            <Link key={index} to={item.href} className='hover:bg-[#d6d4d4] w-[10vw] p-[3%] text-center bg-abu-abu rounded-md'>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
