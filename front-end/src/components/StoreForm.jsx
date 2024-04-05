import React, { useState } from 'react';

const StoreUpdateForm = () => {
    const [storeImagePreview, setStoreImagePreview] = useState('');

    // Fungsi untuk menangani perubahan pada input file
    const handleImageChange = (e) => {
        const file = e.target.files[0]; // Mengambil file pertama
        if (file && file.type.startsWith("image/")) {
            setStoreImagePreview(URL.createObjectURL(file)); // Membuat URL untuk preview
        }
    };

    // Fungsi untuk menghapus preview gambar
    const handleRemoveImagePreview = () => {
        setStoreImagePreview(''); // Menghapus URL preview
    };

    return (
        <div className="p-5 w-full text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <h2 className="text-2xl mb-2">Data Tokomu!</h2>
            <hr className="mb-10" style={{ height: '2px', backgroundColor: '#000', border: 'none' }} />
            <form className="max-w-2xl">
                <div className="mb-4">
                    <label htmlFor="storeImage" className="block text-gray-700 text-l mb-2">Foto Toko</label>
                    <input
                        type="file"
                        id="storeImage"
                        name="storeImage"
                        className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={handleImageChange}
                    />
                    {storeImagePreview && (
                        <div className="mt-4 relative w-32 h-32">
                            <img src={storeImagePreview} alt="Preview" className="w-full h-full object-cover" />
                            <button
                                type="button"
                                onClick={handleRemoveImagePreview}
                                className="absolute top-0 right-0 bg-red-500 hover:bg-red-700 text-white font-bold p-1 rounded-full"
                                style={{ top: '5px', right: '5px' }}
                            >
                                &times;
                            </button>
                        </div>
                    )}
                </div>
                {/* Input fields untuk detail toko */}
                {/* Ulangi pola input ini untuk setiap detail toko yang diperlukan */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-l mb-2" htmlFor="storeName">Nama Toko</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="NamaToko"
                        name="NamaToko"
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
                        Waktu Buka
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
                        Waktu Tutup
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
                {/* Lanjutkan untuk field lainnya */}
                
                <button className="bg-primary hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Perbarui
                </button>
            </form>
        </div>
    );
};

export default StoreUpdateForm;
