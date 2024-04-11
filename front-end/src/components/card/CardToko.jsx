import React, { useState } from "react";
import config from "../../utils/config";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

function CardToko({ data }) {
  const { nama, image, toko_id, lokasi, deskripsi } = data;
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="max-w-full overflow-hidden rounded-2xl border shadow-md transition duration-300 ease-in-out hover:-translate-y-2 md:max-w-[400px]">
      <div className="relative flex">
        <img
          className="h-[180px] w-full bg-gray-300 object-cover md:w-[400px]"
          src={`${config.BASE_URL}/toko/${image}`}
          alt={`Gambar ${image}`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
            <p className="text-sm text-gray-600">Gambar Tidak Tersedia</p>
          </div>
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
