import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

import Food_1 from "../../../public/assets/images/beranda/food-1.jpg";
import { RiRecycleLine } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";

import axios from "axios";

function RiwayatPenjualan() {
  const [data, setData] = useState([]);
  const [toko, setToko] = useState({});
  const [produk, setProd] = useState({});

  const getData = async () => {
    const response = await axios.get(
      "http://localhost:5555/api/pesanan/current/toko",
      {
        withCredentials: true,
      },
    );
    setData(response.data.data);
    console.log(response.data.data);
  };

  // const getData = async () => {
  //   const response = await axios.get('http://localhost:5555/api/pesanan/current/user');
  //   setData(response.data.data);
  //   console.log(response.data.data)
  // };

  const getToko = async () => {
    const response = await axios.get("http://localhost:5555/api/toko", {
      withCredentials: true,
    });
    setToko(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    getData();
    getToko();
  }, []);

  return (
    <div className="font-poppins">
      <Navbar />
      <div className="flex h-auto gap-[2vh] bg-slate-400 p-[5%] hp:flex-col hp:pt-[25%] lg:flex-row lg:pt-[10%]">
        <div className="hidden rounded-[0.5vmax] bg-white lg:block lg:h-[35vmax] lg:w-[20%]">
          <div className="flex h-full w-full flex-col items-center gap-[5%] overflow-hidden">
            <FaRegCircleUser className="pt-[10%] text-[7.5vmax]" />
            <div className="w-full p-[0.5%] text-center text-[2vmax] font-semibold">
              {toko.nama}
            </div>
            <div className="w-full p-[0.5%] text-center text-[1.75vmax] font-light">
              {toko.lokasi}
            </div>
            <div className="w-full p-[0.5%] text-center text-[1.75vmax] font-light">
              {toko.no_telp}
            </div>
          </div>
        </div>
        <div className="hp:h-auto lg:w-[40%]">
          <p className="h-[4%] text-[1.75vmax] font-semibold lg:text-center">
            Penjualan
          </p>
          <ul className="flex h-auto flex-col gap-[2vh] rounded-[0.5vmax]">
            {data.map((item) => (
              <li className="h-[17vmax] rounded-[0.5vmax] bg-gray-100">
                <div className="flex h-[20%] flex-row justify-between rounded-t-[0.5vmax] bg-slate-300 p-[1.5%]">
                  <div className="flex w-[60%] flex-row items-center">
                    <RiRecycleLine className="lg:text-[2.5vmax]" />
                    <div className="pl-[5%] text-[1.5vmax]">
                      {item.createdAt}
                    </div>
                  </div>
                  <div className="rounded-[0.5vmax] bg-orange-300 pb-[0.5%] pl-[1%] pr-[1%] pt-[0.5%] text-[1.25vmax]">
                    {item.status_pembeli}
                  </div>
                </div>
                <div className="hp:h-auto lg:w-[40%]">
                  <p className="h-[4%] text-[1.75vmax] font-semibold lg:text-center">
                    Penjualan
                  </p>
                  <ul className="flex h-auto flex-col gap-[2vh] rounded-[0.5vmax]">
                    {data.map((item) => (
                      <li className="h-[17vmax] rounded-[0.5vmax] bg-gray-100">
                        <div className="flex h-[20%] flex-row justify-between rounded-t-[0.5vmax] bg-slate-300 p-[1.5%]">
                          <div className="flex w-[60%] flex-row items-center">
                            <RiRecycleLine className="lg:text-[2.5vmax]" />
                            <div className="pl-[5%] text-[1.5vmax]">
                              {item.createdAt}
                            </div>
                          </div>
                          <div className="rounded-[0.5vmax] bg-orange-300 pb-[0.5%] pl-[1%] pr-[1%] pt-[0.5%] text-[1.25vmax]">
                            {item.status_pembeli}
                          </div>
                        </div>
                        <Link to="/">
                          <div className="h-[80%] p-[3%] hover:bg-slate-200">
                            <div className="flex h-[80%] flex-row">
                              <img
                                className="h-[70%] w-[20%] rounded-[1vmax]"
                                src={Food_1}
                              />
                              <div className="flex w-[75%] flex-col pl-[5%]">
                                <p className="text-[1.75vmax] font-light">
                                  {item.info_produk.nama}
                                </p>
                                <p className="text-[1.4vmax] text-[#777777]">
                                  {item.info_produk.kategori}
                                </p>
                              </div>
                            </div>
                            <p className="h-[20%] text-end text-[1.5vmax]">
                              <span className="pr-[2%] text-[1.25vmax]">
                                Total Pesanan{" "}
                              </span>{" "}
                              Rp {item.harga_total}{" "}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RiwayatPenjualan;
