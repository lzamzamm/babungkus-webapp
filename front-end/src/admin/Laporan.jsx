import React, { useState, useEffect } from 'react';

// Contoh data laporan, di aplikasi nyata ini bisa berasal dari API
const initialReports = [
  { id: 1, storeName: 'Toko ABC', reason: 'Produk kadaluwarsa', dateReported: '2024-03-29' },
  { id: 2, storeName: 'Toko XYZ', reason: 'Deskripsi tidak sesuai', dateReported: '2024-03-30' },
  // Tambahkan lebih banyak data sesuai kebutuhan
];

const ReportPage = () => {
  const [reports, setReports] = useState(initialReports);

  // Fungsi untuk mengambil tindakan terhadap laporan (misal: menghapus toko)
  const handleAction = (reportId) => {
    // Proses laporan, misalnya menghapus toko atau memperingatkan pemilik toko
    // Untuk demo, kita hanya akan menghapus laporan dari daftar
    const updatedReports = reports.filter(report => report.id !== reportId);
    setReports(updatedReports);
  };
  return (
    <div className="p-5 w-full text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <h2 className="text-2xl mb-4">Laporan Toko Bermasalah</h2>
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Nama Toko
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Alasan
            </th>
            
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {report.storeName}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {report.reason}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {report.dateReported}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <button
                  className="text-white bg-red-500 hover:bg-red-700 font-semibold py-2 px-4 rounded"
                  onClick={() => handleAction(report.id)}
                  to="tindakan"
                >
                  Ambil Tindakan
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportPage;
