import React, { useState } from "react";

const initialStoreRequests = [
  {
    id: 1,
    userName: "User A",
    storeName: "Toko A",
    dateRequested: "2024-03-29",
  },
  {
    id: 2,
    userName: "User B",
    storeName: "Toko B",
    dateRequested: "2024-03-30",
  },
];

const StoreVerification = () => {
  const [storeRequests, setStoreRequests] = useState(initialStoreRequests);

  const handleApprove = (requestId) => {
    const updatedRequests = storeRequests.filter(
      (request) => request.id !== requestId,
    );
    setStoreRequests(updatedRequests);
  };

  const handleReject = (requestId) => {
    const updatedRequests = storeRequests.filter(
      (request) => request.id !== requestId,
    );
    setStoreRequests(updatedRequests);
  };

  return (
    <div
      className="mt-10 w-full p-3 text-gray-800 md:mt-2 lg:mt-1"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <h2 className="mb-2 sm:text-xl md:text-xl lg:text-2xl">
        Verifikasi Pembukaan Toko
      </h2>
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
              Nama Pengguna
            </th>
            <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
              Nama Toko
            </th>
            <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
              Tanggal Pengajuan
            </th>
            <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {storeRequests.map((request) => (
            <tr key={request.id}>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                {request.userName}
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                {request.storeName}
              </td>
              <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                {request.dateRequested}
              </td>
              <td className="flex space-x-2 border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <button
                  className="rounded bg-green-500 px-4 py-2 font-semibold text-white hover:bg-green-700"
                  onClick={() => handleApprove(request.id)}
                >
                  Setuju
                </button>
                <button
                  className="rounded bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-700"
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
