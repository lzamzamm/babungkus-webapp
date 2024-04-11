import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../utils/config";

// Contoh data laporan, di aplikasi nyata ini bisa berasal dari API
const initialReports = [
  {
    id: 1,
    storeName: "Toko ABC",
    reason: "Produk kadaluwarsa",
    dateReported: "2024-03-29",
  },
  {
    id: 2,
    storeName: "Toko XYZ",
    reason: "Deskripsi tidak sesuai",
    dateReported: "2024-03-30",
  },
  // Tambahkan lebih banyak data sesuai kebutuhan
];

const ReportPage = () => {
  const [reports, setReports] = useState(initialReports);
  const [report, setReport] = useState([]);

  const getReport = async () => {
    const id = 1;
    const response = await axios.get(`${config.BASE_URL}/api/laporan/${id}`);
    setReport(response.data.data);
    console.log(response.data.data);
  };

  // Fungsi untuk mengambil tindakan terhadap laporan (misal: menghapus toko)
  const handleAction = (reportId) => {
    // Proses laporan, misalnya menghapus toko atau memperingatkan pemilik toko
    // Untuk demo, kita hanya akan menghapus laporan dari daftar
    const updatedReports = reports.filter((report) => report.id !== reportId);
    setReports(updatedReports);
  };

  useEffect(() => {
    getReport();
  }, []);

  return (
    <div
      className="w-full p-5 text-gray-800"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <h2 className="mb-4 text-2xl">Laporan Toko Bermasalah</h2>
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
              Nama Toko
            </th>
            <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
              Alasan
            </th>
            <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
              Tanggal Laporan
            </th>
            <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {report.map((report) => (
            <tr key={report.id}>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <button
                  className="rounded bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-700"
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
