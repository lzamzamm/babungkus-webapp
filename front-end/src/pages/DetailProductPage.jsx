import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { GoShareAndroid } from 'react-icons/go';
import { FaRegCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Food_2 from "../assets/images/beranda/food-2.jpg";

function DetailProductPage() {
  const [data, setData] = useState({});

  const getProduk = async () => {
    const id = 1;
    const response = await axios.get(`http://localhost:5555/api/produk/${id}`);
    setData(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    getProduk();
  }, []);

  return (
    <div className="font-poppins">
      <Navbar />
      <div className="flex hp:flex-col lg:flex-row gap-[2%] p-[5%] hp:h-[60vmax] lg:h-[40vmax] w-full bg-slate-600 hp:pt-[27.5%] lg:pt-[10%]">
        <img className="h-[50%] object-fill lg:h-full lg:w-[60%] bg-white rounded-[1vmax]" src={data.image}></img>
        <div className="lg:flex lg:flex-col h-[50%] lg:gap-[10%]">
          <div className="flex hp:flex-row lg:flex-col">
            <div className="flex hp:flex-row gap-[2%] lg:gap-[7.5%] hp:w-full lg:w-[25vmax] lg:flex-col">
              <div className=" flex flex-col gap-[1%] w-full h-full p-[1.5%] lg:p-[5%] rounded-[0.5vmax] bg-white">
                <div className="flex flex-row justify-between">
                  <div className="pl-[2%] text-[1.5vmax] lg:text-[1.75vmax] font-semibold"> Rp {data.harga}</div>
                  <GoShareAndroid className="lg:text-[1.5vmax]" />
                </div>
                <div className="pl-[2%] font-light text-[1vmax]">Makanan - {data.nama}</div>
                <div className="pl-[2%] font-light text-[0.75vmax]">{data.createdAt}</div>
              </div>
              <div className="flex flex-col gap-[1%] w-full h-full rounded-[0.5vmax] p-[1.5%] lg:p-[5%] bg-white">
                <div className="flex flex-row pl-[2%] gap-[2%]">
                  <FaRegCircleUser className="lg:text-[2vmax]"> /</FaRegCircleUser>
                  <div className="lg:leading-none pl-[2%]">
                    <div className="text-[1.2vmax] font-semibold ">Warteg Ibu Fatimah ical</div>
                    <div className="text-[1vmax] lg:pt-[3%]">Depok, Sleman Kab, Yogyakarta D.I</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex hp:flex-row gap-[2%] hp:pt-[2.5%] hp:pb-[2%] lg:pb-0">
            <div className="flex flex-row lg:flex-col hp:items-center hp:justify-center lg:items-start lg:p-[5%] gap-[5%] w-full h-full rounded-[0.5vmax] p-[2%] bg-white text-[1vmax]">
              <div className="">
                <span className="text-[#6E6E6E]">Jenis: </span>Makanan
              </div>
              <div className="">
                <span className="text-[#6E6E6E]">Kadaluarsa: </span>{data.expired_at}
              </div>
            </div>
          </div>
          <div className='flex flex-row w-full hp:gap-[2.5%] lg:justify-between'>
            <Link className='lg:w-[45%]' to="/">
              <button className="bg-white  text-[1.5vmax] hp:rounded-[0.5vmax] lg:w-full p-[1vmax] hover:bg-[#d9d9d9] hover:transition-all duration-300">Pesan</button>
            </Link>
            <Link className='lg:w-[45%]' to="/contact">
              <button className="bg-white  text-[1.5vmax] hp:rounded-[0.5vmax] lg:w-full p-[1vmax] hover:bg-[#d9d9d9] hover:transition-all duration-300">Lapor</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProductPage;
