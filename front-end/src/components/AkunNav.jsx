import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaUserAlt, FaStore, FaPlusCircle, FaListAlt, FaBuilding, FaTimes } from 'react-icons/fa'; // Tambahkan FaTimes untuk tombol tutup

const AccountNavbar = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [hasStore, setHasStore] = useState(false); // Anda mungkin mengatur state ini berdasarkan logika tertentu

    return (
        <div className="relative">
            {/* Tombol untuk membuka navigasi hanya ditampilkan pada mobile */}
            <button
                className={`absolute top-0 left-0 z-30 mt-4 ml-4 sm:hidden ${isNavVisible ? 'hidden' : 'block'}`}
                onClick={() => setIsNavVisible(true)}>
                <FaArrowRight className="text-2xl" />
            </button>

            {/* Konten navigasi */}
            <div className={`fixed inset-y-0 left-0 bg-gray-100 w-64 z-20 transition-all duration-300 ease-in-out sm:relative ${isNavVisible ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}>
                {/* Tombol untuk menutup navigasi hanya ditampilkan pada mobile dan saat navigasi terbuka */}
                <button className={`absolute top-0 right-0 mt-4 mr-4 sm:hidden ${isNavVisible ? 'block' : 'hidden'}`}
                        onClick={() => setIsNavVisible(false)}>
                    <FaTimes className="text-2xl" /> {/* Mengganti ikon dengan FaTimes untuk tutup */}
                </button>
                <div className="p-10">
                    <h1 className="text-2xl mb-6">Pengaturan</h1>
                    <ul className="text-xl">
                        <li className="mb-5 hover:bg-neutral-300">
                            <Link to="profile" className="text-black-500 flex items-center">
                                <FaUserAlt className="text-gray-400 mr-2" />
                                Data Pribadi
                            </Link>
                        </li>
                        <li className="mb-3 hover:bg-neutral-300">
                            <Link to="store-profile" className="text-black-500 flex items-center">
                                <FaStore className="text-gray-400 mr-2" />
                                Data Toko
                            </Link>
                        </li>
                    </ul>
                    <h2 className="text-xl mt-10 mb-6">Atur Toko</h2>
                    <ul className="text-l">
                        {hasStore ? (
                            <>
                                <li className="mb-3 hover:bg-neutral-300">
                                    <Link to="add-product" className="text-black-500 flex items-center">
                                        <FaPlusCircle className="text-gray-400 mr-2" />
                                        Tambah Produk
                                    </Link>
                                </li>
                                <li className="mb-3 hover:bg-neutral-300">
                                    <Link to="produk-saya" className="text-black-500 flex items-center">
                                        <FaListAlt className="text-gray-400 mr-2" />
                                        Produk Saya
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <li className="mb-3 hover:bg-neutral-300">
                                <Link to="create-store" className="text-black-500 flex items-center">
                                    <FaBuilding className="text-gray-400 mr-2" />
                                    Buka Toko
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AccountNavbar;
