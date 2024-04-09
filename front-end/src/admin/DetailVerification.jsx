import React, { useState, useEffect } from 'react';


  return (
    <div className="w-full p-5 text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <h2 className="mb-4 text-2xl">Detail Laporan</h2>
      <div className="mb-8">
        <p><strong>Nama Toko:</strong> {report.storeName}</p>
        <p><strong>Alamat:</strong> {report.reason}</p>
        <p><strong>Telpon:</strong> {report.description}</p>
        <p><strong>Jam Operasional:</strong> {report.dateReported}</p>
        <p><strong>Deskripsi Toko:</strong> {report.dateReported}</p>
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

export default ActionPage;

