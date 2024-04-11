import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaTasks,
  FaDatabase,
  FaHistory,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa"; // Import icons for dashboard sections

const DashboardNavbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

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
          <h1 className="mb-6 text-xl sm:text-2xl">Dashboard</h1>
          <ul className="text-lg sm:text-xl">
            <li className="mb-5 hover:bg-neutral-300">
              <Link
                to="laporan"
                className="text-black-500 flex items-center"
              >
                <FaDatabase className="mr-2 text-gray-400" />
                Laporan
              </Link>
            </li>
            <li className="mb-5 hover:bg-neutral-300">
              <Link
                to="tindakan"
                className="text-black-500 flex items-center"
              >
                <FaTasks className="mr-2 text-gray-400" />
                Tindakan
              </Link>
            </li>
            <li className="mb-5 hover:bg-neutral-300">
              <Link
                to="verifikasi"
                className="text-black-500 flex items-center"
              >
                <FaHistory className="mr-2 text-gray-400" />
                Verifikasi Toko
              </Link>
            </li>
            <li className="mb-5 hover:bg-neutral-300">
              <Link
                to="detailVerif"
                className="text-black-500 flex items-center"
              >
                <FaHistory className="mr-2 text-gray-400" />
                Detail verifikasi
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
