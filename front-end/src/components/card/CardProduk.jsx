import React, { useState, useEffect } from "react";
import config from "../../utils/config";
import { Link } from "react-router-dom"; // Impor Link dari react-router-dom

function CardProduk({ data }) {
  const { image, nama, toko_id, harga } = data;
  const [tokoNama, setTokoNama] = useState("");
  const [imageExists, setImageExists] = useState(true); // State untuk menandai apakah file gambar ada atau tidak

  useEffect(() => {
    fetch(`${config.BASE_URL}/api/toko/${toko_id}`)
      .then((response) => response.json())
      .then((data) => {
        setTokoNama(data.data[0].nama);
        const img = new Image();
        img.onload = () => {
          setImageExists(true);
        };
        img.onerror = () => {
          setImageExists(false);
        };
        img.src = `${config.IMAGE_BASE_URL}/produk/${data.data[0].info_produk[0].image}`;
    })
      .catch((error) => console.error("Error fetching toko data:", error));
  }, [toko_id]);

  return (
    <div className="max-w-full overflow-hidden rounded-2xl border shadow-md transition duration-300 ease-in-out hover:-translate-y-2 md:max-w-[400px]">
      <div className="relative flex">
        {imageExists ? (
          <img
            className="h-[180px] w-full bg-gray-300 object-cover brightness-75 filter md:w-[400px]"
            src={`../assets/images/produk/${image}`}
            alt={`Gambar ${nama}`}
          />
        ) : (
          <img
            className="h-[180px] w-full bg-gray-300 object-cover brightness-75 filter md:w-[400px]"
            src="../assets/images/image-not-available.jpg"
            alt="Gambar tidak tersedia"
          />
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
