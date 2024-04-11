import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import config from "../utils/config";
import { IoIosArrowForward } from "react-icons/io";
import CardProduk from "../components/card/CardProduk";

function DetailTokoPage() {
  const { id } = useParams();
  const [toko, setToko] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageExists, setImageExists] = useState(true); // State untuk menandai apakah file gambar ada atau tidak

  useEffect(() => {
    setLoading(true);
    fetch(`${config.BASE_URL}/api/toko/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gagal mengambil data dari server");
        }
        return response.json();
      })
      .then((data) => {
        setToko(data.data[0]); // Ambil objek pertama dari array data
        setLoading(false);

        const img = new Image();
        img.onload = () => {
          setImageExists(true);
        };
        img.onerror = () => {
          setImageExists(false);
        };
        img.src = `../assets/images/toko/${data.data[0].image}`;
      })
      .catch((error) => {
        console.error("Error fetching toko data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen align-middle">
        <div className="flex h-96 items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-8 border-gray-300 border-t-green-600" />
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="min-h-screen">Error: {error}</div>;
  }

  if (!toko) {
    return (
      <div className="min-h-screen">Tidak ada data toko yang ditemukan.</div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen px-[5%] pt-24">
        <span className="flex cursor-pointer items-center gap-2 py-4 text-lg">
          <a href="/toko" className="hover:text-primary">
            Toko
          </a>
          <IoIosArrowForward />
          <span>{toko.nama} </span>
        </span>
        {imageExists ? (
          <img
            className="h-[350px] w-full rounded-lg border border-gray-300 object-cover"
            src={`../assets/images/toko/${toko.image}`}
            alt={`Gambar ${toko.nama}`}
          />
        ) : (
          <img
            className="h-[350px] w-full rounded-lg border border-gray-300 object-cover"
            src="../../public/assets/images/image-not-available.jpg"
            alt="Gambar tidak tersedia"
          />
        )}
        <h2 className="pt-5 text-xl font-semibold md:text-3xl">{toko.nama}</h2>
        <p className="flex items-center truncate pb-3">
          <MdLocationOn className="text-red-600" /> {toko.lokasi}
        </p>
        <span className="flex">
          <h2>Jam Operasional:&nbsp;</h2>
          {toko.jam_operasional}
        </span>
        <h2>Deskripsi :</h2>
        <p>{toko.deskripsi}</p>
        <div className="inline-flex w-full items-center justify-center">
          <hr className="my-8 h-px w-full border-0 bg-gray-400"></hr>
          <h2 className="absolute left-1/2 -translate-x-1/2 bg-white px-3 text-lg font-medium text-gray-900 md:text-xl">
            Daftar Produk
          </h2>
        </div>
        <div className="mb-7 grid grid-cols-1 gap-x-5 gap-y-7 sm:grid-cols-2 md:grid-cols-3">
          {toko.info_produk.map((produk) => (
            <CardProduk key={produk._id} data={produk} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DetailTokoPage;
