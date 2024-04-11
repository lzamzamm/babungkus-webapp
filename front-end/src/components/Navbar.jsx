import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import LogoBabungkus from "/assets/images/logo.png";
import { FaEyeLowVision } from "react-icons/fa6";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userRole, setUserRole] = useState(""); // State untuk menyimpan role pengguna
  const [loading, setLoading] = useState(true); // State untuk menandai apakah data pengguna sedang dimuat

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      const parsedUserInfo = JSON.parse(userInfo);
      setUserRole(parsedUserInfo.role);
    }
    // Set loading menjadi false setelah data pengguna selesai dimuat
    setLoading(false);
  }, []);

  const navItems = [
    {
      label: "Dashboard",
      href: "/admin/dashboard",
      visibleForAdmin: true,
    },
    {
      label: "Profil",
      href: "/akun",
      visibleForUser: true,
    },
    {
      label: "Produk Saya",
      href: "/akun/produk",
      visibleForUser: true,
    },
    {
      label: "Produk",
      href: "/produk",
      visibleForGuest: true,
      subItems: [
        { label: "Makanan", href: "/produk/makanan" },
        { label: "Minuman", href: "/produk/minuman" },
        { label: "Pakan", href: "/produk/pakan" },
      ],
    },
    {
      label: "Toko",
      href: "/toko",
      visibleForGuest: true,
    },
    {
      label: "Tentang Kami",
      href: "/tentangkami",
      visibleForGuest: true,
    },
  ];

  const buttonItems = [
    { label: "Masuk", href: "/masuk" },
    { label: "Daftar", href: "/daftar" },
  ];

  const handleLogout = () => {
    setUserRole("");
    localStorage.removeItem("userInfo");
    window.location.href = "/";
  };

  if (loading) {
    return <div></div>;
  }

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
          className={`h-screen flex-grow flex-col justify-between pb-4 transition duration-300 ease-in-out md:flex md:h-auto md:flex-row md:justify-end md:pb-0 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <div className="w-full md:flex md:items-center md:justify-between">
            <div className="gap-2 md:flex md:items-center">
              {navItems.map((item, index) => {
                if (
                  (item.visibleForAdmin && userRole === "Admin") ||
                  (item.visibleForUser && userRole === "User") ||
                  (item.visibleForGuest && !userRole)
                ) {
                  return (
                    <div key={index} className="relative">
                      {item.label === "Produk" ? (
                        <button
                          onClick={() => setDropdownOpen((prev) => !prev)}
                          className="focus:shadow-outline mt-2 flex w-full items-center rounded-lg px-4 py-2 hover:text-primary focus:text-primary focus:outline-none md:mt-0"
                        >
                          {item.label}
                          <IoIosArrowDown
                            className={`ml-4 inline h-4 w-4 transform transition-transform duration-200 ${
                              dropdownOpen ? "rotate-180" : "rotate-0"
                            }`}
                          />
                        </button>
                      ) : (
                        <Link
                          to={item.href}
                          className="mt-2 flex rounded-lg px-4 py-2 hover:text-primary focus:text-primary md:mt-0"
                        >
                          {item.label}
                        </Link>
                      )}
                      {dropdownOpen &&
                        item.subItems &&
                        item.subItems.length > 0 && (
                          <div className="dropdown-menu right-0 z-10 mt-0 w-full rounded-lg bg-white px-2 py-2 text-base md:absolute md:mt-2 md:border">
                            {item.subItems.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                className="focus:shadow-outline block rounded-lg px-4 py-2 hover:text-primary focus:text-primary focus:outline-none"
                                to={subItem.href}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
            <div className="mt-4 gap-2 md:mt-0 md:flex md:items-center">
              {userRole && (
                <button
                  onClick={handleLogout}
                  className="mt-2 w-full flex justify-center rounded-lg bg-primary px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-primary-dark md:mt-0"
                >
                  Keluar
                </button>
              )}
              {!userRole &&
                buttonItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="mt-2 flex justify-center rounded-lg bg-primary px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-primary-dark md:mt-0"
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
