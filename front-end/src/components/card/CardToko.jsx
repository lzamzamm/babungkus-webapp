import React from "react";
import { MdLocationOn } from "react-icons/md";
import ImageNotAvailable from "../../assets/images/image-not-available.jpg";
import { Link } from "react-router-dom"; // Impor Link dari react-router-dom

function CardToko({ data }) {
  const { nama, toko_id, lokasi, deskripsi } = data;

  return (
    <div className="max-w-full overflow-hidden rounded-2xl border shadow-md transition duration-300 ease-in-out hover:-translate-y-2 md:max-w-[400px]">
      <div className="relative flex">
        <img
          className="h-[180px] w-full bg-gray-300 object-cover md:w-[400px]"
          src={ImageNotAvailable}
          alt=""
        />
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
