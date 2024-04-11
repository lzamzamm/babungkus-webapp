import React, { useState, useEffect } from "react";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

function CardToko({ data }) {
  const { nama, image, toko_id, lokasi, deskripsi } = data;
  const [imageExists, setImageExists] = useState(true);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageExists(true);
    };
    img.onerror = () => {
      setImageExists(false);
    };
    img.src = `./src/assets/images/toko/${image}`;
  }, [image]);

  return (
    <div className="max-w-full overflow-hidden rounded-2xl border shadow-md transition duration-300 ease-in-out hover:-translate-y-2 md:max-w-[400px]">
      <div className="relative flex">
      {imageExists ? (
          <img
            className="h-[180px] w-full bg-gray-300 object-cover md:w-[400px]"
            src={`./src/assets/images/toko/${image}`}
            alt={`Gambar ${image}`}
          />
        ) : (
          <img
            className="h-[180px] w-full bg-gray-300 object-cover md:w-[400px]"
            src="../assets/images/image-not-available.jpg"
            alt="Gambar tidak tersedia"
          />
        )}
      </div>
      <div className="flex flex-col items-start bg-tertiary px-5">
        <Link
          to={`/toko/${toko_id}`}
          className="flex truncate pt-5 text-xl font-semibold hover:text-primary"
        >
          {nama}
        </Link>
        <p className="flex items-center truncate pb-3 pt-1">
          <MdLocationOn className="text-red-600" /> {lokasi}
        </p>
        <p className="mb-5 line-clamp-2 text-left text-sm">{deskripsi}</p>
      </div>
    </div>
  );
}

export default CardToko;
