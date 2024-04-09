import axios from "axios";
import React, { useState } from "react";

const AddProductForm = () => {
    const [storeImagePreview, setStoreImagePreview] = useState("");
    const [inputData, setInputData] = useState({});
    const [image, setImage] = useState();

    var formData = new FormData();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputData({
            ...inputData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        const maxFileSize = 5 * 1024 * 1024;

        if (file) {
            if (file.type.substr(0, 5) === "image" && file.size <= maxFileSize) {
                setImage(file);
                setStoreImagePreview(URL.createObjectURL(file));
            } else if (file.size > maxFileSize) {
                alert("Ukuran gambar melebihi batas maksimal 5MB.");
                e.target.value = "";
            } else {
                alert("File yang diunggah bukan gambar.");
            }
        }
    };

    const handleRemoveImagePreview = () => {
        setStoreImagePreview(""); // Menghapus preview gambar
    };

    const createHandler = async (e) => {
        e.preventDefault();
        // console.log(inputData);
        // console.log(image);
        var userInfo = JSON.parse(localStorage.getItem("userInfo"));
        inputData.user_id = userInfo.user_id;
        console.log(inputData);
        formData.append("data", JSON.stringify(inputData));
        formData.append("file", image);
        var res = await axios.post("http://localhost:5555/api/produk", formData);
        console.log(res);
    };

    return (
        <div className="p-3 w-full text-gray-800 mt-10 md:mt-2 lg:mt-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <h2 className="lg:text-2xl md:text-xl sm:text-base mb-2">Tambah Produk</h2>
            <hr className="mb-5 sm:mb-10" style={{ height: '2px', backgroundColor: '#000', border: 'none' }} />
            <form className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl">
                <div className="mb-2 sm:mb-3 text-sm sm:text-lg">
                    <label
                        className="block text-gray-700 text-l mb-2"
                        htmlFor="storeImage"
                    >
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
                            <img
                                src={storeImagePreview}
                                alt="Preview"
                                className="w-full h-full object-cover"
                            />
                            <button
                                type="button"
                                className="absolute top-0 right-0 bg-red-500 hover:bg-red-700 text-white font-bold p-1 rounded-full"
                                onClick={handleRemoveImagePreview}
                                style={{ top: "5px", right: "5px" }}
                            >
                                &times;
                            </button>
                        </div>
                    )}
                </div>
                <div className="mb-2 sm:mb-3 text-sm sm:text-lg">
                    <label className="block text-gray-700 text-l mb-2" htmlFor="namaProduk">
                        Nama Produk
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="namaProduk"
                        name="namaProduk"
                        type="text"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-2 sm:mb-3 text-sm sm:text-lg">
                    <label className="block text-gray-700 text-l mb-2" htmlFor="harga">
                        Harga
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="harga"
                        name="harga"
                        type="number"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-2 sm:mb-3 text-sm sm:text-lg">
                    <label className="block text-gray-700 text-l mb-2" htmlFor="stok">
                        Stok
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="stok"
                        name="stok"
                        type="number"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-2 sm:mb-3 text-sm sm:text-lg">
                    <label className="block text-gray-700 text-l mb-2" htmlFor="expire_at">
                        Tanggal Kadaluwarsa
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="expire_at"
                        name="expire_at"
                        type="date"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-2 sm:mb-3 text-sm sm:text-lg">
                    <label className="block text-gray-700 text-l mb-2" htmlFor="jenisMakanan">
                        Jenis Makanan
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="jenisMakanan"
                        name="jenisMakanan"
                        onChange={handleInputChange}
                    >
                        <option value="makanan">Makanan</option>
                        <option value="minuman">Minuman</option>
                        <option value="pakan">Pakan</option>
                    </select>
                </div>
                <button 
                className="bg-primary hover:bg-amber-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline" 
                onClick={createHandler}
                >
                    Tambah
                </button>
            </form>
        </div>
    );
};

export default AddProductForm;
