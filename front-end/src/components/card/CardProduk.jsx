import React, { useState, useEffect } from "react";
import config from "../../utils/config";
import { Link } from "react-router-dom";
import axios from "axios";

function CardProduk({ data }) {
  const { image, nama, toko_id, harga } = data;
  const [tokoNama, setTokoNama] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false); // State untuk menandai apakah file gambar telah terload dengan benar

  useEffect(() => {
    axios.get(`${config.BASE_URL}/api/toko/${toko_id}`)
      .then((response) => {
        const tokoData = response.data.data[0];
        setTokoNama(tokoData.nama);
        const img = new Image();
        img.onload = () => {
          setImageLoaded(true);
        };
        img.onerror = () => {
          setImageLoaded(false);
        };
        img.src = `${config.BASE_URL}/produk/${tokoData.info_produk[0].image}`;
      })
      .catch((error) => console.error("Error fetching toko data:", error));
  }, [toko_id]);

  return (
    <div className="max-w-full overflow-hidden rounded-2xl border shadow-md transition duration-300 ease-in-out hover:-translate-y-2 md:max-w-[400px]">
      <div className="relative flex">
        <img
          className="h-[180px] w-full bg-gray-300 object-cover md:w-[400px]"
          src={`${config.BASE_URL}/produk/${image}`}
          alt={`Gambar ${image}`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
            <p className="text-sm text-gray-600">Gambar Tidak Tersedia</p>
          </div>
        )}
        <Link
          to={`/toko/${toko_id}`}
          className="text-shadow-md absolute inset-0 m-auto mb-3 ml-5 flex h-fit w-fit text-lg font-medium text-white hover:text-primary"
        >
          {tokoNama}
        </Link>
      </div>
      <div className="flex cursor-pointer flex-col items-start bg-tertiary px-5">
        <p className="flex truncate pt-5 text-xl font-medium hover:text-primary">
          {nama}
        </p>
        <p className="flex items-center truncate pb-3 pt-1">Rp. {harga}</p>
      </div>
    </div>
  );
}

export default CardProduk;
