import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaUserAlt, FaStore, FaPlusCircle, FaListAlt, FaBuilding, FaTimes } from 'react-icons/fa'; 

const AccountNavbar = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    //const [hasStore, setHasStore] = useState(false); 

    return (
        <div className="relative">
            <button
                className={`absolute top-0 left-0 z-30  p-2 sm:hidden rounded-md p-2 bg-neutral-300 ${isNavVisible ? 'hidden' : 'block'}`}
                onClick={() => setIsNavVisible(true)}>
                <FaArrowRight className=" mt-10 text-2xl" />
            </button>
            <div className={`fixed inset-y-0 left-0 bg-gray-100 w-64 z-20 transition-all duration-300 ease-in-out sm:relative ${isNavVisible ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}>
                <button className={`absolute top-0 right-0 mt-4 mr-4  sm:hidden ${isNavVisible ? 'block' : 'hidden'}`}
                        onClick={() => setIsNavVisible(false)}>
                    <FaTimes className="mt-20 text-2xl" /> 
                </button>
                <div className="p-10 mt-12">
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
                            <li className="mb-3 hover:bg-neutral-300">
                                <Link to="create-store" className="text-black-500 flex items-center">
                                    <FaBuilding className="text-gray-400 mr-2" />
                                    Buka Toko
                                </Link>
                            </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default AccountNavbar;
