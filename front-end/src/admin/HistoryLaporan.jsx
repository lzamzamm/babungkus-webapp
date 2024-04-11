import React, { useState } from "react";

// Contoh data histori tindakan, di aplikasi nyata data ini bisa berasal dari API
const HistoryReport = [
  {
    id: 1,
    storeName: "Toko ABC",
    actionTaken: "Toko diberi peringatan",
    dateActionTaken: "2024-04-01",
  },
  {
    id: 2,
    storeName: "Toko XYZ",
    actionTaken: "Toko ditangguhkan selama 7 hari",
    dateActionTaken: "2024-03-30",
  },
  // Tambahkan lebih banyak data sesuai kebutuhan
];

const ActionHistoryPage = () => {
  const [actionHistory, setActionHistory] = useState(initialActionHistory);

  return (
    <div
      className="w-full p-5 text-gray-800"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <h2 className="mb-6 text-2xl">Histori Tindakan Laporan</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                Nama Toko
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                Tindakan yang Diambil
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                Tanggal Tindakan
              </th>
            </tr>
          </thead>
          <tbody>
            {actionHistory.map((history) => (
              <tr key={history.id}>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActionHistoryPage;
