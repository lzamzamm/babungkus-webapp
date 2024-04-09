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
    <div className="w-full p-5 text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <h2 className="mb-4 text-2xl">Detail Laporan</h2>
      <div className="mb-8">
        <p><strong>Nama Toko:</strong> {report.storeName}</p>
        <p><strong>Alasan Laporan:</strong> {report.reason}</p>
        <p><strong>Deskripsi:</strong> {report.description}</p>
        <p><strong>Tanggal Laporan:</strong> {report.dateReported}</p>
        <p><strong>Tindakan yang Telah Diambil:</strong> {report.actionsTaken || 'Belum ada tindakan'}</p>
      </div>
      <hr className="mb-6" />
      <h3 className="mb-4 text-xl">Ambil Tindakan</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full px-3 py-2 mb-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="action"
          name="action"
          placeholder="Deskripsikan tindakan yang akan diambil..."
          value={action}
          onChange={(e) => setAction(e.target.value)}
          rows="4"
        />
        <div className='flex flex-row gap-3'>
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white rounded bg-primary hover:bg-amber-700 focus:outline-none focus:shadow-outline"
          >
            Bekukan
          </button>
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white rounded bg-primary hover:bg-amber-700 focus:outline-none focus:shadow-outline"
          >
            Takedown
          </button>
        </div>
      </form>
    </div>
  );
};


export default ActionPage;
