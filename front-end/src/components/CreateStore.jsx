import React, { useState } from 'react';

const CreateStoreForm = () => {
    const [storeImagePreview, setStoreImagePreview] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0]; // Hanya mengambil satu file
        if (file && file.type.substr(0, 5) === "image") {
            setStoreImagePreview(URL.createObjectURL(file)); // Membuat URL untuk preview
        }
    };

    const handleRemoveImagePreview = () => {
        setStoreImagePreview(''); 
    };

    return (
        <div className="p-3 w-full text-gray-800 mt-10 md:mt-2 lg:mt-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <h2 className="lg:text-2xl md:text-xl sm:text-base mb-2">Buka Tokomu Sekarang!</h2>
            <p className="lg:text-xl md:text-xl sm:text-xs mb-2">Bersama-Sama Selamatkan Bumi dan Atasi Kelaparan</p>
            <hr className="mb-5 sm:mb-10" style={{ height: '2px', backgroundColor: '#000', border: 'none' }} />
            <form className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl">
                <div className="mb-2 sm:mb-3 text-sm sm:text-lg">
                    <label className="block text-gray-700 text-l mb-2" htmlFor="storeImage">
                        Foto Toko
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="storeImage"
                        name="storeImage"
                        type="file"
                        onChange={handleImageChange}
                    />
                    {storeImagePreview && (
                        <div className="mt-4 relative w-32 h-32">
                            <img src={storeImagePreview} alt="Preview" className="w-full h-full object-cover" />
                            <button
                                type="button"
                                className="absolute top-0 right-0 bg-red-500 hover:bg-red-700 text-white font-bold p-1 rounded-full"
                                onClick={handleRemoveImagePreview}
                                style={{ top: '5px', right: '5px' }}
                            >
                                &times;
                            </button>
                        </div>
                    )}
                </div>
                <div className="mb-2 sm:mb-3 text-sm sm:text-lg">
                    <label className="block text-gray-700 text-l mb-2" htmlFor="storeName">Nama Toko</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="NamaToko"
                        name="NamaToko"
                        type="text"
                    />
                </div>
                <div className="mb-2 sm:mb-3 text-sm sm:text-lg">
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
                <div className="mb-2 sm:mb-3 text-sm sm:text-lg">
                    <label className="block text-gray-700 text-l mb-2" htmlFor="waktuMulai">
                        Waktu Buka
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="waktuMulai"
                        name="waktuMulai"
                        type="time"
                    />
                </div>
                <div className="mb-2 sm:mb-3 text-sm sm:text-lg">
                    <label className="block text-gray-700 text-l mb-2" htmlFor="waktuSelesai">
                        Waktu Tutup
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="waktuSelesai"
                        name="waktuSelesai"
                        type="time"
                    />
                </div>
                <div className="mb-2 sm:mb-3 text-sm sm:text-lg">
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
                <button className="bg-primary hover:bg-amber-500 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Buka Toko
                </button>
            </form>
        </div>
    );
};

export default CreateStoreForm;
