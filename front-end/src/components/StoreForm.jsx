import React from 'react';

const StoreForm = () => {
    return (
        <div className="p-5 w-full text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <h2 className="text-2xl mb-2">Data Diri</h2>
            <hr className="mb-10" style={{ height: '2px', backgroundColor: '#000', border: 'none' }} />
            <form className="max-w-2xl">
                <div className="mb-4">
                    <label className="block text-gray-700 text-l  mb-2" htmlFor="NamaLengkap">
                        Nama Toko
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="NamaLengkap"
                        name="NamaLengkap"
                        type="text"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-l mb-2" htmlFor="alamat">
                        Alamat
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="alamat"
                        name="alamat"
                        rows="4" 
                    ></textarea>
                </div>
                <div className="mb-2">
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
                <div className="mb-2">
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
                <div className="mb-4">
                    <label className="block text-gray-700 text-l mb-2" htmlFor="waktuMulai">
                        Waktu Mulai
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="waktuMulai"
                        name="waktuMulai"
                        type="time"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-l mb-2" htmlFor="waktuSelesai">
                        Waktu Selesai
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="waktuSelesai"
                        name="waktuSelesai"
                        type="time"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-l mb-2" htmlFor="deskripsi">
                        Deskripsi Toko
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="deskripsi"
                        name="deskripsi"
                        rows="5"
                    ></textarea>
                </div>
                <button className="bg-primary hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Update
                </button>
            </form>
        </div>
    );
};

export default StoreForm;
