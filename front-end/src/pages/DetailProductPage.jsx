import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { GoShareAndroid } from "react-icons/go";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../utils/config";

import Food_2 from "../assets/images/beranda/food-2.jpg";

function DetailProductPage() {
  const [data, setData] = useState({});

  const getProduk = async () => {
    const id = 1;
    const response = await axios.get(`${config.BASE_URL}/api/produk/${id}`);
    setData(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    getProduk();
  }, []);

  return (
    <div className="font-poppins">
      <Navbar />
      <div className="flex w-full gap-[2%] bg-slate-600 p-[5%] hp:h-[60vmax] hp:flex-col hp:pt-[27.5%] lg:h-[40vmax] lg:flex-row lg:pt-[10%]">
        <img
          className="h-[50%] rounded-[1vmax] bg-white object-fill lg:h-full lg:w-[60%]"
          src={data.image}
        ></img>
        <div className="h-[50%] lg:flex lg:flex-col lg:gap-[10%]">
          <div className="flex hp:flex-row lg:flex-col">
            <div className="flex gap-[2%] hp:w-full hp:flex-row lg:w-[25vmax] lg:flex-col lg:gap-[7.5%]">
              <div className=" flex h-full w-full flex-col gap-[1%] rounded-[0.5vmax] bg-white p-[1.5%] lg:p-[5%]">
                <div className="flex flex-row justify-between">
                  <div className="pl-[2%] text-[1.5vmax] font-semibold lg:text-[1.75vmax]">
                    {" "}
                    Rp {data.harga}
                  </div>
                  <GoShareAndroid className="lg:text-[1.5vmax]" />
                </div>
                <div className="pl-[2%] text-[1vmax] font-light">
                  Makanan - {data.nama}
                </div>
                <div className="pl-[2%] text-[0.75vmax] font-light">
                  {data.createdAt}
                </div>
              </div>
              <div className="flex h-full w-full flex-col gap-[1%] rounded-[0.5vmax] bg-white p-[1.5%] lg:p-[5%]">
                <div className="flex flex-row gap-[2%] pl-[2%]">
                  <FaRegCircleUser className="lg:text-[2vmax]">
                    {" "}
                    /
                  </FaRegCircleUser>
                  <div className="pl-[2%] lg:leading-none">
                    <div className="text-[1.2vmax] font-semibold ">
                      Warteg Ibu Fatimah ical
                    </div>
                    <div className="text-[1vmax] lg:pt-[3%]">
                      Depok, Sleman Kab, Yogyakarta D.I
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-[2%] hp:flex-row hp:pb-[2%] hp:pt-[2.5%] lg:pb-0">
            <div className="flex h-full w-full flex-row gap-[5%] rounded-[0.5vmax] bg-white p-[2%] text-[1vmax] hp:items-center hp:justify-center lg:flex-col lg:items-start lg:p-[5%]">
              <div className="">
                <span className="text-[#6E6E6E]">Jenis: </span>Makanan
              </div>
              <div className="">
                <span className="text-[#6E6E6E]">Kadaluarsa: </span>
                {data.expired_at}
              </div>
            </div>
          </div>
          <div className="flex w-full flex-row hp:gap-[2.5%] lg:justify-between">
            <Link className="lg:w-[45%]" to="/">
              <button className="bg-white  p-[1vmax] text-[1.5vmax] duration-300 hover:bg-[#d9d9d9] hover:transition-all hp:rounded-[0.5vmax] lg:w-full">
                Pesan
              </button>
            </Link>
            <Link className="lg:w-[45%]" to="/contact">
              <button className="bg-white  p-[1vmax] text-[1.5vmax] duration-300 hover:bg-[#d9d9d9] hover:transition-all hp:rounded-[0.5vmax] lg:w-full">
                Lapor
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProductPage;
