import React, { useState } from 'react';


const StoreVerification = () => {
  const [storeRequests, setStoreRequests] = useState(initialStoreRequests);

  const handleApprove = (requestId) => {
    const updatedRequests = storeRequests.filter(request => request.id !== requestId);
    setStoreRequests(updatedRequests);
  };


  const handleReject = (requestId) => {
    const updatedRequests = storeRequests.filter(request => request.id !== requestId);
    setStoreRequests(updatedRequests);
  };

  return (
    <div className="p-3 w-full text-gray-800 mt-10 md:mt-2 lg:mt-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <h2 className="lg:text-2xl md:text-xl sm:text-xl mb-2">Verifikasi Pembukaan Toko</h2>
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Nama Pengguna
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Nama Toko
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Tanggal Pengajuan
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {storeRequests.map((request) => (
            <tr key={request.id}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {request.userName}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {request.storeName}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {request.dateRequested}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex space-x-2">
                <button
                  className="text-white bg-green-500 hover:bg-green-700 font-semibold py-2 px-4 rounded"
                  onClick={() => handleApprove(request.id)}
                >
                  Setuju
                </button>
                <button
                  className="text-white bg-red-500 hover:bg-red-700 font-semibold py-2 px-4 rounded"
                  onClick={() => handleReject(request.id)}
                >
                  Tolak
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StoreVerification;
