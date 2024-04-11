import React, { useState, useEffect } from 'react';

const DetailVerification = () => {
  return (
    <div className="w-full p-5 text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <h2 className="mb-4 text-2xl">Detail Laporan</h2>
      <div className="mb-8">
        <p><strong>Nama Toko:</strong></p>
        <p><strong>Alamat:</strong></p>
        <p><strong>Telpon:</strong> </p>
        <p><strong>Jam Operasional:</strong></p>
        <p><strong>Deskripsi Toko:</strong></p>
      </div>
      <hr className="mb-6" />
      <h3 className="mb-4 text-xl">Ambil Tindakan</h3>
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white rounded bg-green hover:bg-amber-700 focus:outline-none focus:shadow-outline"
          >
            Setuju
          </button>
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white rounded bg-red hover:bg-amber-700 focus:outline-none focus:shadow-outline"
          >
            Tolak
          </button>
        </div>
  );
};

export default DetailVerification;

