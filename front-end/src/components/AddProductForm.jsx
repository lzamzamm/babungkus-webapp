import React, { useState } from 'react';

const AddProductForm = () => {
    const [imagePreviews, setImagePreviews] = useState([]);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files); // Mengonversi FileList menjadi Array
        const newImagePreviews = [...imagePreviews, ...files.map(file => {
            if (file.type.substr(0, 5) === "image") {
                return URL.createObjectURL(file); // Membuat URL untuk preview
            }
            return null; // Mengabaikan file jika bukan gambar
        }).filter(preview => preview !== null)]; // Filter out non-images

        setImagePreviews(newImagePreviews);
    };

    const handleCancelIndividualUpload = (index) => {
        const newImagePreviews = [...imagePreviews];
        newImagePreviews.splice(index, 1); // Menghapus preview pada index tertentu
        setImagePreviews(newImagePreviews);
    };

    return (
        <div className="p-5 w-full text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <h2 className="text-2xl mb-2">Tambah Produk</h2>
            <hr className="mb-10" style={{ height: '2px', backgroundColor: '#000', border: 'none' }} />
            <form className="max-w-2xl">
                <div className="mb-4">
                    <label className="block text-gray-700 text-l mb-2" htmlFor="foto">
                        Foto Produk
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="foto"
                        name="foto"
                        type="file"
                        onChange={handleImageChange}
                        multiple
                    />
                    <div className="mt-4 grid grid-cols-3 gap-4">
                        {imagePreviews.map((preview, index) => (
                            <div key={index} className="relative w-32 h-32">
                                <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                                <button
                                    type="button"
                                    className="absolute top-0 right-0 bg-red-500 hover:bg-red-700 text-white font-bold p-1 rounded-full"
                                    onClick={() => handleCancelIndividualUpload(index)}
                                    style={{ top: '5px', right: '5px' }} // Adjusting the position to be closer to the corner
                                >
                                    &times;
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-l mb-2" htmlFor="namaProduk">
                        Nama Produk
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="namaProduk"
                        name="namaProduk"
                        type="text"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-l mb-2" htmlFor="tanggalDibuat">
                        Tanggal Dibuat
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="tanggalDibuat"
                        name="tanggalDibuat"
                        type="date"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-l mb-2" htmlFor="expired">
                        Tanggal Kadaluwarsa
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="expired"
                        name="expired"
                        type="date"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-l mb-2" htmlFor="jenisMakanan">
                        Jenis Makanan
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="jenisMakanan"
                        name="jenisMakanan"
                    >
                        <option value="makanan">Makanan</option>
                        <option value="minuman">Minuman</option>
                        <option value="pakan">Pakan</option>
                    </select>
                </div>
                <button className="bg-primary hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Tambah
                </button>
            </form>
        </div>
    );
};

export default AddProductForm;
