import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaUserAlt,
  FaStore,
  FaPlusCircle,
  FaBuilding,
  FaTimes,
} from "react-icons/fa";

const AccountNavbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  //const [hasStore, setHasStore] = useState(false);

  return (
    <div className="relative">
      <button
        className={`absolute left-0 top-0 z-30  rounded-md bg-neutral-300 p-2 sm:hidden ${isNavVisible ? "hidden" : "block"}`}
        onClick={() => setIsNavVisible(true)}
      >
        <FaArrowRight className=" mt-10 text-2xl" />
      </button>
      <div
        className={`fixed inset-y-0 left-0 z-20 w-64 bg-gray-100 transition-all duration-300 ease-in-out sm:relative ${isNavVisible ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}
      >
        <button
          className={`absolute right-0 top-0 mr-4 mt-4  sm:hidden ${isNavVisible ? "block" : "hidden"}`}
          onClick={() => setIsNavVisible(false)}
        >
          <FaTimes className="mt-20 text-2xl" />
        </button>
        <div className="mt-14 sm:mt-12 p-10">
          <h1 className="mb-6 text-xl sm:text-2xl">Pengaturan</h1>
          <ul className="text-lg sm:text-xl">
            <li className="mb-5 hover:bg-neutral-300">
              <Link to="profile" className="text-black-500 flex items-center">
                <FaUserAlt className="mr-2 text-gray-400" />
                Data Pribadi
              </Link>
            </li>
            <li className="mb-3 hover:bg-neutral-300">
              <Link
                to="store-profile"
                className="text-black-500 flex items-center"
              >
                <FaStore className="mr-2 text-gray-400" />
                Data Outlet
              </Link>
            </li>
          </ul>
          <h2 className="mb-6 mt-10 text-xl">Atur Toko</h2>
          <ul className="text-l">
            <>
              <li className="mb-3 hover:bg-neutral-300">
                <Link
                  to="tambah-produk"
                  className="text-black-500 flex items-center"
                >
                  <FaPlusCircle className="mr-2 text-gray-400" />
                  Tambah Produk
                </Link>
              </li>
              {/* <li className="mb-3 hover:bg-neutral-300">
                                    <Link to="produk-saya" className="text-black-500 flex items-center">
                                        <FaListAlt className="text-gray-400 mr-2" />
                                        Produk Saya
                                    </Link>
                                </li> */}
            </>
            <li className="mb-3 hover:bg-neutral-300">
              <Link
                to="buat-toko"
                className="text-black-500 flex items-center"
              >
                <FaBuilding className="mr-2 text-gray-400" />
                Buka Outlet
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccountNavbar;
