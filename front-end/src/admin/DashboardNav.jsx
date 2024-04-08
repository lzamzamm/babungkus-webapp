import React from 'react';
import { Link } from 'react-router-dom';
import { FaTasks, FaDatabase, FaHistory } from 'react-icons/fa'; // Import icons for dashboard sections

const DashboardNavbar = () => {
    return (
        <div className="w-64 bg-gray-100 p-10 h-full" style={{ fontFamily: 'Poppins, sans-serif' }}>
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
                    <Link to="riwayat" className="text-black-500 ml-8 flex items-center">
                        <FaHistory className="text-gray-400 mr-2" />
                        Histori
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
    );
};

export default DashboardNavbar;
