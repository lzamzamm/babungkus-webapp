import React, { useState } from 'react';

// Contoh data detail laporan, di aplikasi nyata data ini bisa berasal dari API
const reportDetails = {
  id: 1,
  storeName: 'Toko ABC',
  reason: 'Produk kadaluwarsa',
  description: 'Beberapa produk di toko ini telah ditemukan kadaluwarsa pada tanggal inspeksi.',
  dateReported: '2024-03-29',
  actionsTaken: '', // Deskripsi tindakan yang telah diambil, jika ada
};

const ActionPage = () => {
  const [report, setReport] = useState(reportDetails);
  const [action, setAction] = useState('');

  // Fungsi untuk menangani pengiriman tindakan
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulasikan pengiriman tindakan ke server
    const updatedReport = { ...report, actionsTaken: action };
    setReport(updatedReport);
    // Setelah pengiriman, reset input tindakan
    setAction('');
    alert('Tindakan berhasil disimpan.');
    // Dalam aplikasi nyata, anda akan mengirim data ke server
  };

  return (
    <div className="p-3 w-full text-gray-800 mt-10 md:mt-2 lg:mt-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <h2 className="lg:text-2xl md:text-xl sm:text-base mb-2">Detail Laporan</h2>
      <div className="mb-8">
        <p><strong>Nama Toko:</strong> {report.storeName}</p>
        <p><strong>Alasan Laporan:</strong> {report.reason}</p>
        <p><strong>Deskripsi:</strong> {report.description}</p>
        <p><strong>Tanggal Laporan:</strong> {report.dateReported}</p>
      </div>
      <hr className="mb-6" />
      <h3 className="text-l md:text-xl lg:text-lg mb-4">Ambil Tindakan</h3>
      {/* <form onSubmit={handleSubmit}>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
          id="action"
          name="action"
          placeholder="Deskripsikan tindakan yang akan diambil..."
          value={action}
          onChange={(e) => setAction(e.target.value)}
          rows="4"
        />
        <button
          type="submit"
          className="bg-primary hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Simpan Tindakan
        </button>
      </form> */}
      <button
        className="text-white bg-blue-500  font-semibold py-2 px-4 rounded mr-2"
        onClick={() => handleApprove(request.id)}
      >
        Freeze
      </button>
      <button
        className="text-white bg-red-500 hover:bg-red-600 font-semibold py-2 px-4 rounded"
        onClick={() => handleReject(request.id)}
      >
        Tutup
      </button>
    </div>
  );
};


export default ActionPage;
