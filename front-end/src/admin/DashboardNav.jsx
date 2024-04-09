import { Link } from 'react-router-dom';
import  { useState } from 'react';
import { FaTasks, FaDatabase, FaHistory, FaArrowRight, FaTimes } from 'react-icons/fa'; // Import icons for dashboard sections

const DashboardNavbar = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);

    return (
        <div className="relative" style={{ fontFamily: 'Poppins, sans-serif' }}>
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
            <h1 className="text-2xl mb-6">Dashboard</h1>
            <ul className="text-xl">
                <li className="mb-5 hover:bg-neutral-300">
                    <Link to="laporan" className="text-black-500 ml-8 flex items-center">
                        <FaDatabase className="text-gray-400 mr-2" />
                        Laporan
                    </Link>
                </li>
                <li className="mb-5 hover:bg-neutral-300">
                    <Link to="tindakan" className="text-black-500 ml-8 flex items-center">
                        <FaTasks className="text-gray-400 mr-2" />
                        Tindakan
                    </Link>
                </li> 
                <li className="mb-5 hover:bg-neutral-300">
                    <Link to="verifikasi" className="text-black-500 ml-8 flex items-center">
                        <FaHistory className="text-gray-400 mr-2" />
                        Verifikasi Toko
                    </Link>
                </li>
            </ul>
            </div>
        </div>
        </div>
    );
};

export default DashboardNavbar;
