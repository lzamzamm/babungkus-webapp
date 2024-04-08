import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import LogoBabungkus from '/assets/images/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const navItems = [
    { label: 'Produk', href: '/produk', subItems: [{ label: 'Makanan', href: '/produk/makanan' }, { label: 'Minuman', href: '/produk/minuman' }, { label: 'Pakan', href: '/produk/pakan' }] },
    { label: 'Toko', href: '/toko' },
    { label: 'Tentang Kami', href: '/tentangkami' }
  ];

  const buttonItems = [
    { label: 'Masuk', href: '/masuk' },
    { label: 'Daftar', href: '/daftar' }
  ];

  return (
    <div className="w-full fixed shadow-mini-xlx sm:shadow-xlx z-50 md:text-lg font-poppins bg-white">
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        <div className="p-4 flex flex-row items-center justify-between">
          <div className='flex justify-center items-center w-[50px]'>
            <img src={LogoBabungkus} className='w-full h-full' alt="Logo Babungkus" />
          </div>          
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
            {isOpen ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenuAlt3 className="w-6 h-6" />}
          </button>
        </div>
        <nav className={`flex-col h-screen md:h-auto flex-grow pb-4 md:pb-0 md:flex justify-between md:justify-end md:flex-row transition duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden'}`}>
          <div className="md:flex md:items-center md:justify-between w-full">
            <div className="md:flex md:items-center gap-2">
              {navItems.map((item, index) => (
                <div key={index} className="relative">
                {item.label === 'Produk' ? (
                  <button onClick={() => setDropdownOpen((prev) => !prev)} className="flex w-full items-center px-4 py-2 mt-2 rounded-lg md:mt-0 hover:text-primary focus:text-primary focus:outline-none focus:shadow-outline">
                  {item.label}
                  <IoIosArrowDown className={`inline w-4 h-4 ml-4 transition-transform duration-200 transform ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>
                  ) : (
                    <Link to={item.href} className="flex px-4 py-2 mt-2 rounded-lg md:mt-0 hover:text-primary focus:text-primary">
                      {item.label}
                    </Link>
                  )}
                  {dropdownOpen && item.subItems && item.subItems.length > 0 && (
                    <div className="dropdown-menu text-base px-2 py-2 md:absolute right-0 w-full mt-0 md:mt-2 rounded-lg z-10 md:border bg-white">
                      {item.subItems.map((subItem, subIndex) => (
                        <a key={subIndex} className="block px-4 py-2 rounded-lg hover:text-primary focus:text-primary focus:outline-none focus:shadow-outline" href={subItem.href}>{subItem.label}</a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="md:flex md:items-center gap-2 mt-4 md:mt-0">
              {buttonItems.map((item, index) => (
                <Link key={index} to={item.href} className="flex  justify-center text-white px-4 py-2 mt-2 rounded-lg md:mt-0 hover:bg-primary-dark bg-primary transition duration-300 ease-in-out">{item.label}</Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;