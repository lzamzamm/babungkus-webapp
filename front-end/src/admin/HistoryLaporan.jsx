import React, { useState } from 'react';

// Contoh data histori tindakan, di aplikasi nyata data ini bisa berasal dari API
const initialActionHistory = [
  { id: 1, storeName: 'Toko ABC', actionTaken: 'Toko diberi peringatan', dateActionTaken: '2024-04-01' },
  { id: 2, storeName: 'Toko XYZ', actionTaken: 'Toko ditangguhkan selama 7 hari', dateActionTaken: '2024-03-30' },
  // Tambahkan lebih banyak data sesuai kebutuhan
];

const ActionHistoryPage = () => {
  const [actionHistory, setActionHistory] = useState(initialActionHistory);

  return (
    <div className="p-5 w-full text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <h2 className="text-2xl mb-4">Histori Tindakan Laporan</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Nama Toko
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Tindakan yang Diambil
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Tanggal Tindakan
              </th>
            </tr>
          </thead>
          <tbody>
            {actionHistory.map((history) => (
              <tr key={history.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {history.storeName}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {history.actionTaken}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {history.dateActionTaken}
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
