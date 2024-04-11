import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import LogoBabungkus from "/assets/images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navItems = [
    {
      label: "Produk",
      href: "/produk",
      subItems: [
        { label: "Makanan", href: "/produk/makanan" },
        { label: "Minuman", href: "/produk/minuman" },
        { label: "Pakan", href: "/produk/pakan" },
      ],
    },
    { label: "Toko", href: "/toko" },
    { label: "Lapor", href: "/lapor" },
  ];

  const buttonItems = [
    { label: "Masuk", href: "/masuk" },
    { label: "Daftar", href: "/daftar" },
  ];

  return (
    <div className="fixed z-50 w-full bg-white font-poppins shadow-mini-xlx md:text-lg">
      <div className="mx-auto flex flex-col px-[5%] md:flex-row md:items-center md:justify-between">
        <div className="flex flex-row items-center justify-between py-4">
          <div className="flex w-[50px] items-center justify-center">
            <Link to='/'>
              <img
                src={LogoBabungkus}
                className="w-full h-full"
                alt="Logo Babungkus"
              />
            </Link>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg focus:shadow-outline focus:outline-none md:hidden"
          >
            {isOpen ? (
              <HiOutlineX className="w-6 h-6" />
            ) : (
              <HiOutlineMenuAlt3 className="w-6 h-6" />
            )}
          </button>
        </div>
        <nav
          className={`h-screen flex-grow flex-col justify-between pb-4 transition duration-300 ease-in-out md:flex md:h-auto md:flex-row md:justify-end md:pb-0 ${isOpen ? "flex" : "hidden"}`}
        >
          <div className="w-full md:flex md:items-center md:justify-between">
            <div className="gap-2 md:flex md:items-center">
              {navItems.map((item, index) => (
                <div key={index} className="relative">
                  {item.label === "Produk" ? (
                    <button
                      onClick={() => setDropdownOpen((prev) => !prev)}
                      className="flex items-center w-full px-4 py-2 mt-2 rounded-lg focus:shadow-outline hover:text-primary focus:text-primary focus:outline-none md:mt-0"
                    >
                      {item.label}
                      <IoIosArrowDown
                        className={`ml-4 inline h-4 w-4 transform transition-transform duration-200 ${dropdownOpen ? "rotate-180" : "rotate-0"}`}
                      />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex px-4 py-2 mt-2 rounded-lg hover:text-primary focus:text-primary md:mt-0"
                    >
                      {item.label}
                    </Link>
                  )}
                  {dropdownOpen &&
                    item.subItems &&
                    item.subItems.length > 0 && (
                      <div className="right-0 z-10 w-full px-2 py-2 mt-0 text-base bg-white rounded-lg dropdown-menu md:absolute md:mt-2 md:border">
                        {item.subItems.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            className="block px-4 py-2 rounded-lg focus:shadow-outline hover:text-primary focus:text-primary focus:outline-none"
                            href={subItem.href}
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </div>
            <div className="gap-2 mt-4 md:mt-0 md:flex md:items-center">
              {buttonItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="flex justify-center px-4 py-2 mt-2 text-white transition duration-300 ease-in-out rounded-lg bg-primary hover:bg-primary-dark md:mt-0"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
