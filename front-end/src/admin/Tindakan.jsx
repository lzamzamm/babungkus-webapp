import React, { useState } from "react";

const ActionPage = () => {
  return (
    <div
      className="w-full p-5 text-gray-800"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <h2 className="mb-4 text-2xl">Detail Laporan</h2>
      <div className="mb-8">
        <p>
          <strong>Nama Toko:</strong> 
        </p>
        <p>
          <strong>Alasan Laporan:</strong>
        </p>
        <p>
          <strong>Deskripsi:</strong> 
        </p>
        <p>
          <strong>Tanggal Laporan:</strong> 
        </p>
      </div>
      <hr className="mb-6" />
      <h3 className="mb-4 text-xl">Ambil Tindakan</h3>
          <button
            type="submit"
            className="focus:shadow-outline rounded bg-primary px-4 py-2 font-bold text-white hover:bg-amber-700 focus:outline-none"
          >
            Bekukan
          </button>
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white rounded bg-red-500 hover:bg-amber-700 focus:outline-none focus:shadow-outline"
          >
            Takedown
          </button>
        </div>
  );
};

export default ActionPage;
