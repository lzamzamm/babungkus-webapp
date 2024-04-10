import React, { useState } from "react";
import { FaLock, FaUnlock } from "react-icons/fa";

export default function AkunLock() {
  const [isLocked, setIsLocked] = useState(false);

  const toggleLock = () => {
    setIsLocked(!isLocked);
  };
  return (
    <div className="mx-auto my-5 max-w-md overflow-hidden rounded-lg bg-white shadow-lg">
      <div
        className="flex h-56 items-start justify-between bg-cover bg-center p-4"
        style={{ backgroundImage: "url('https://via.placeholder.com/500')" }}
      >
        <button
          onClick={toggleLock}
          className="text-3xl"
          aria-pressed={isLocked}
        >
          {isLocked ? (
            <FaLock className="text-red-500" />
          ) : (
            <FaUnlock className="text-green-500" />
          )}
        </button>
      </div>
      <div className="p-4 text-center">
        <p className="mb-2 text-xl font-semibold">Nama Pengguna</p>
        <p className="mb-4 text-gray-700">
          Deskripsi singkat tentang pengguna. Masalah yang mereka miliki, bisa
          juga deskripsi lain.
        </p>
        {isLocked ? (
          <p className="text-red-500">
            Akun ini terkunci dan tidak dapat digunakan.
          </p>
        ) : (
          <p className="text-green-500">
            Akun ini terbuka dan dapat digunakan.
          </p>
        )}
        <div className="mt-4 flex items-center justify-center">
          <svg
            className="mr-2 h-5 w-5 fill-current text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9 12l-1-1-3 3 1 1 2-2v6h2v-6l1 1 3-3-1-1-2 2V2H9v10zm3-12v2h5v16H3V2h5V0H0v20h20V0h-8z" />
          </svg>
          <span className="text-sm text-gray-600">
            Bergabung sejak Juni 2021
          </span>
        </div>
      </div>
    </div>
  );
}
