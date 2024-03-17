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
    <div className='w-full font-poppins md:text-lg flex justify-center items-center py-4 px-[5%] shadow-mini-xlx sm:shadow-xlx'>
      <div className='flex justify-between w-full'>
        <div className='flex items-center gap-[10%] w-[60%]'>
          <div className='flex justify-center items-center w-[50px]'>
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
              <div className='absolute p-[10%] bg-slate-400'>
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
        <div className='w-[25%] flex items-center justify-between transition duration-300 ease-in-out'>
          {buttonItems.map((item, index) => (
            <Link key={index} to={item.href} className='hover:bg-primary w-[10vw] p-[3%] text-white text-center bg-primary rounded-md'>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
