import React, { useState } from 'react';
import { FaLock, FaUnlock } from 'react-icons/fa';

export default function AkunLock() {
  const [isLocked, setIsLocked] = useState(false);

  const toggleLock = () => {
    setIsLocked(!isLocked);
  };
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg my-5">
      <div className="bg-cover bg-center h-56 p-4 flex justify-between items-start" style={{ backgroundImage: "url('https://via.placeholder.com/500')" }}>
        <button onClick={toggleLock} className="text-3xl" aria-pressed={isLocked}>
          {isLocked ? <FaLock className="text-red-500" /> : <FaUnlock className="text-green-500" />}
        </button>
      </div>
      <div className="p-4 text-center">
        <p className="text-xl font-semibold mb-2">Nama Pengguna</p>
        <p className="text-gray-700 mb-4">Deskripsi singkat tentang pengguna. Masalah yang mereka miliki, bisa juga deskripsi lain.</p>
        {isLocked ? (
          <p className="text-red-500">Akun ini terkunci dan tidak dapat digunakan.</p>
        ) : (
          <p className="text-green-500">Akun ini terbuka dan dapat digunakan.</p>
        )}
        <div className="flex justify-center items-center mt-4">
          <svg className="h-5 w-5 text-gray-600 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9 12l-1-1-3 3 1 1 2-2v6h2v-6l1 1 3-3-1-1-2 2V2H9v10zm3-12v2h5v16H3V2h5V0H0v20h20V0h-8z"/>
          </svg>
          <span className="text-gray-600 text-sm">Bergabung sejak Juni 2021</span>
        </div>
      </div>
    </div>
  );
}