import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaStore, FaPlusCircle, FaListAlt } from 'react-icons/fa';

const AccountNavbar = () => {
    return (
        <div className="w-64 bg-gray-100 p-10 h-full" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <h1 className="text-2xl mb-6">Pengaturan</h1>
            <ul className="text-xl">
                <li className="mb-5 hover:bg-neutral-300">
                    <Link to="profile" className="text-black-500 ml-8 flex items-center w-full">
                        <FaUserAlt className="text-gray-400 mr-2" />
                        Data Pribadi
                    </Link>
                </li>
                {/* Pastikan menggunakan 'to' pada Link berikutnya */}
                <li className="mb-3 hover:bg-neutral-300">
                    <Link to="store-profile" className="text-black-500 ml-8 flex items-center">
                        <FaStore className="text-gray-400 mr-2" />
                        Data Toko
                    </Link>
                </li>
            </ul>
            <h2 className="text-xl mt-10 mb-6">Atur Toko</h2>
            <ul className="text-l">
                <li className="mb-3 hover:bg-neutral-300 ">
                    <Link to="add-product" className="text-black-500 ml-8 flex items-center w-full">
                        <FaPlusCircle className="text-gray-400 mr-2" />
                        Tambah Produk
                    </Link>
                </li>
                <li className="mb-3 hover:bg-neutral-300">
                    <Link to="produk-saya" className="text-black-500 ml-8 flex items-center">
                        <FaListAlt className="text-gray-400 mr-2" />
                         Produk Saya
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default AccountNavbar;
