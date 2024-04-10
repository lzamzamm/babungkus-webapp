import React, { useState, useEffect } from "react";
import ImageNotAvailable from "../../assets/images/image-not-available.jpg";
import { Link } from "react-router-dom"; // Impor Link dari react-router-dom

function CardProduk({ data }) {
  const { nama, toko_id, harga } = data;
  const [tokoNama, setTokoNama] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5555/api/toko/${toko_id}`)
      .then((response) => response.json())
      .then((data) => {
        setTokoNama(data.data[0].nama);
      })
      .catch((error) => console.error("Error fetching toko data:", error));
  }, [toko_id]);

  return (
    <div className="max-w-full overflow-hidden rounded-2xl border shadow-md transition duration-300 ease-in-out hover:-translate-y-2 md:max-w-[400px]">
      <div className="relative flex">
        <img
          className="h-[180px] w-full bg-gray-300 object-cover brightness-75 filter md:w-[400px]"
          src={ImageNotAvailable}
          alt="Gambar "
        ></img>
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
