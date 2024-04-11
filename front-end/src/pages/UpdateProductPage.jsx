import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../utils/config";
import { useParams } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProductUpdateForm = () => {
    // const { id } = useParams();
    const [productImagePreview, setProductImagePreview] = useState("");
    const [nama, setNama] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [harga, setHarga] = useState('');
    const [kategori, setKategori] = useState('');
    const [stok, setStok] = useState('');
    const [expiredAt, setExpiredAt] = useState('');
    const [image, setImage] = useState(null);
    const [inputImage, setInputImage] = useState();

    const formData = new FormData();
    const id = 5;

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await axios.get(`${config.BASE_URL}/api/produk/${id}`);
                const { data } = response.data;
                setImage(data.image);
                setNama(data.nama);
                setDeskripsi(data.deskripsi);
                setHarga(data.harga);
                setKategori(data.kategori);
                setStok(data.stok);
                setExpiredAt(data.expired_at.split('T')[0]); // Mengubah format tanggal
            } catch (error) {
                console.error(error);
            }
        };
        getProduct();
    }, [id]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setInputImage(file);
            setProductImagePreview(URL.createObjectURL(file));
        }
    };

    const handleRemoveImagePreview = () => {
        setProductImagePreview('');
        setImage(null);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const produkData = {
            nama: nama,
            deskripsi: deskripsi,
            expired_at: expiredAt,
            kategori: kategori,
            harga: harga,
            stok: stok,
          };
        
        formData.append('data', JSON.stringify(produkData))
        
        if (inputImage) {
            formData.append('file', inputImage)
        }

        try {
            await axios.patch(`http://localhost:5555/api/produk/${id}`, formData, { withCredentials: true, credentials: 'include' });
            alert('Produk berhasil diperbarui');
            window.location.reload();
        } catch (error) {
            console.error(error);
            alert('Gagal memperbarui produk');
        }
    };

    
    return (
        <div style={{ fontFamily: 'Poppins, sans-serif' }}>
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="border p-6 mt-16 rounded-md">
                    <h2 className="lg:text-2xl md:text-xl sm:text-base mb-2">Update Product</h2>
                    <hr className="mb-5 sm:mb-10" style={{ height: '2px', backgroundColor: '#000', border: 'none' }} />
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                        <div className="sm:text-l mb-2 text-sm sm:mb-3">
                            <label htmlFor="productImage" className="block text-sm font-medium text-gray-700">Product Image</label>
                            <input
                                id="productImage"
                                name="productImage"
                                type="file"
                                onChange={handleImageChange}
                                className="mt-1 block w-full border-gray-300 shadow-sm text-sm rounded-md"
                            />
                            {productImagePreview && (
                                <div className="mt-4">
                                    <img src={productImagePreview} alt="Preview" className="h-40 w-40 object-cover" />
                                    <button type="button" onClick={handleRemoveImagePreview} className="mt-2 text-sm text-blue-600 hover:text-blue-900">Remove image</button>
                                </div>
                            )}
                            <div className="relative mt-4 h-32 w-32">
                                <img
                                    src={`http://localhost:5555/produk/${image}`}
                                    alt="Preview"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                </div>
                <div className="sm:text-l mb-2 text-sm sm:mb-3" >
                    <label htmlFor="nama" className="block text-sm font-medium text-gray-700">Nama Produk</label>
                    <input id="nama" name="nama" type="text" value={nama} onChange={(e) => setNama(e.target.value)} className="focus:shadow-outline w-full appearance-none rounded border px-4 py-2 leading-tight text-gray-700 shadow focus:outline-none" />
                </div>
                <div className="sm:text-l mb-2 text-sm sm:mb-3">
                    <label htmlFor="harga" className="block text-sm font-medium text-gray-700">Harga</label>
                    <input id="harga" name="harga" type="number" value={harga} onChange={(e) => setHarga(e.target.value)} className="focus:shadow-outline w-full appearance-none rounded border px-4 py-2 leading-tight text-gray-700 shadow focus:outline-none" />
                </div>
                <div className="sm:text-l mb-2 text-sm sm:mb-3">
                    <label htmlFor="stok" className="block text-sm font-medium text-gray-700">Stok</label>
                    <input id="stok" name="stok" type="number" value={stok} onChange={(e) => setStok(e.target.value)} className="focus:shadow-outline w-full appearance-none rounded border px-4 py-2 leading-tight text-gray-700 shadow focus:outline-none" />
                </div>
                <div className="sm:text-l mb-2 text-sm sm:mb-3">
                    <label htmlFor="expire_at" className="block text-sm font-medium text-gray-700">Tanggal Kadaluwarsa</label>
                    <input id="expire_at" name="expire_at" type="date" value={expiredAt} onChange={(e) => setExpiredAt(e.target.value)} className="focus:shadow-outline w-full appearance-none rounded border px-4 py-2 leading-tight text-gray-700 shadow focus:outline-none" />
                </div>
                <div className="sm:text-l mb-2 text-sm sm:mb-3">
                    <label htmlFor="kategori" className="block text-sm font-medium text-gray-700">Kategori</label>
                    <select id="kategori" name="kategori" value={kategori} onChange={(e) => setKategori(e.target.value)} className="focus:shadow-outline w-full appearance-none rounded border px-4 py-2 leading-tight text-gray-700 shadow focus:outline-none">
                        <option value="Makanan">Makanan</option>
                        <option value="Minuman">Minuman</option>
                        <option value="Pakan">Pakan</option>
                    </select>
                </div>
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Update Product
                </button>
            </form>
        </div>
            </div >
    <Footer />
        </div >
    );
};

export default ProductUpdateForm;
