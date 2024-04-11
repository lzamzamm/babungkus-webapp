import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import config from "../utils/config";
import CardToko from "../components/card/CardToko";
import { IoIosSearch } from "react-icons/io";

function TokoPage() {
  const [tokoData, setTokoData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showMoreCount, setShowMoreCount] = useState(6);

  useEffect(() => {
    fetch(`${config.BASE_URL}/api/toko/`)
      .then((response) => response.json())
      .then((data) => {
        // Filter toko yang memiliki status "Active"
        // const activeToko = data.data.filter((toko) => toko.status === "Active");
        const activeToko = data.data;
        setTokoData(activeToko);
        setSearchResults(activeToko);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const results = tokoData.filter((toko) =>
      toko.nama.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setSearchResults(results);
  }, [searchTerm, tokoData]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleShowMore = () => {
    setShowMoreCount((prevCount) => prevCount + 6);
  };

  return (
    <div>
      <Navbar />
      <div className="mx-auto mb-8 min-h-screen flex-col bg-white px-[5%] text-center">
        <h1 className="mb-1 pt-28 text-2xl font-bold md:text-3xl">
          Mau Babungkus?
        </h1>
        <p>Sederhana, tapi Signifikan: Dari Sisa ke Solusi. Ayo jelajahi!</p>
        <div className="m-auto mb-8 mt-3 flex max-w-[765px] justify-between gap-2 rounded-lg border border-gray-500 px-3 py-2 align-middle">
          <input
            className="w-full outline-none"
            type="text"
            placeholder="Cari Toko..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <IoIosSearch className="h-7 w-7"></IoIosSearch>
        </div>
        {isLoading ? (
          <div className="flex h-40 items-center justify-center">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-green-600" />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-5 gap-y-7 sm:grid-cols-2 md:grid-cols-3">
            {searchResults.slice(0, showMoreCount).map((toko) => (
              <CardToko key={toko._id} data={toko} />
            ))}
          </div>
        )}
        {tokoData.length > showMoreCount && (
          <button
            className="mt-5 w-full rounded-md bg-primary px-3 py-2 text-white"
            onClick={handleShowMore}
          >
            Tampilkan lebih banyak
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default TokoPage;
