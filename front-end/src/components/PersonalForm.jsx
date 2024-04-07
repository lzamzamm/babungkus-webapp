import React from 'react';

const PersonalForm = () => {
  return (
    <div className="p-3 w-full text-gray-800 mt-10 md:mt-2 lg:mt-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <h2 className="lg:text-2xl md:text-xl sm:text-base mb-2">Data Diri</h2>
      <hr className="mb-5 sm:mb-10" style={{ height: '2px', backgroundColor: '#000', border: 'none' }} />
      <form className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl">
        <div className="mb-2 sm:mb-3 text-sm sm:text-lg">
          <label className="block text-gray-700 mb-2" htmlFor="NamaLengkap">
            Nama Lengkap
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="NamaLengkap"
            name="NamaLengkap"
            type="text"
          />
        </div>
        <div className="mb-2 sm:mb-3 text-sm sm:text-lg">
          <label className="block text-gray-700 text-l mb-2" htmlFor="NamaPengguna">
            Nama Pengguna
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="NamaPengguna"
            name="NamaPengguna"
            type="text"
          />
        </div>
        <div className="mb-2 sm:mb-3 text-sm sm:text-lg">
          <label className="block text-gray-700 text-l mb-2 mr-2" htmlFor="Email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Email"
            name="Email"
            type="email"
          />
        </div>
        <div className="mb-2 sm:mb-3 text-sm sm:text-lg">
          <label className="block text-gray-700 text-l mb-2 mr-2" htmlFor="Telpon">
            Telpon
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Telpon"
            name="Telpon"
            type="tel"
          />
          <p className="text-gray-600 text-xs italic">Masukkan nomor telpon yang juga merupakan nomor WhatsApp</p>
        </div>
        <button className="bg-primary hover:bg-amber-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};


export default PersonalForm;
