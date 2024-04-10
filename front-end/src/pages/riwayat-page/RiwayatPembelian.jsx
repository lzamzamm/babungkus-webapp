import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

import Food_1 from "../../../public/assets/images/beranda/food-1.jpg";
import { RiRecycleLine } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";

import axios from "axios";

function RiwayatPembelian() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});
  const [produk, setProd] = useState({});

  const getData = async () => {
    const response = await axios.get('http://localhost:5555/api/pesanan/current/user', {
      withCredentials: true,
    }); 
    setData(response.data.data);
    console.log(response.data.data);
  };

  // const getData = async () => {
  //   const response = await axios.get('http://localhost:5555/api/pesanan/current/user');
  //   setData(response.data.data);
  //   console.log(response.data.data)
  // };

  const getUser = async () => {
    const response = await axios.get('http://localhost:5555/api/user', {
      withCredentials: true,
    });
    setUser(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    getData();
    getUser();
  }, []);

  return (
    <div className="font-poppins">
      <Navbar />
      <div className="flex h-auto gap-[2vh] bg-slate-400 p-[5%] hp:flex-col hp:pt-[25%] lg:flex-row lg:pt-[10%]">
        <div className="hidden rounded-[0.5vmax] bg-white lg:block lg:h-[35vmax] lg:w-[20%]">
          <div className="flex h-full w-full flex-col items-center gap-[5%] overflow-hidden">
            <FaRegCircleUser className="pt-[10%] text-[7.5vmax]" />
            <div className="w-full p-[0.5%] text-center text-[2vmax] font-semibold">
              {user.nama_lengkap}
            </div>
            <div className="w-full p-[0.5%] text-center text-[1.75vmax] font-light">
              {user.email}
            </div>
            <div className="w-full p-[0.5%] text-center text-[1.75vmax] font-light">
              {user.no_telp}
            </div>
          </div>
        </div>
        <div className="hp:h-auto lg:w-[40%]">
          <p className="h-[4%] text-[1.75vmax] font-semibold lg:text-center">
            Pembelian
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
                <Link to='/'>
                  <div className='h-[80%] p-[3%] hover:bg-slate-200'>
                    <div className='flex flex-row h-[80%]'>
                      <img className='h-[70%] w-[20%] rounded-[1vmax]' src={Food_1} />
                      <div className='flex flex-col pl-[5%] w-[75%]'>
                        <p className='font-light text-[1.75vmax]'>
                          {item.info_produk.nama}
                          </p>
                        <p className='text-[#777777] text-[1.4vmax]'>{item.info_produk.kategori}</p>
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
        {/* <div className='hp:h-[20vmax] lg:w-[40%]'>
          <p className='font-semibold lg:text-center h-[15%] text-[1.75vmax]'>Penjualan</p>
          <ul className='bg-gray-100 h-[85%] rounded-[0.5vmax]'>
            <li className='h-full'>
              <div className='flex flex-row justify-between h-[20%] bg-slate-300 p-[1.5%] rounded-t-[0.5vmax]'>
                <div className='flex flex-row items-center w-[60%]'>
                  <RiRecycleLine className='text-[2.5vmax]' />
                  <div className='text-[1.5vmax] pl-[5%]'>12 Feb 2024</div>
                </div>
                <div className='text-[1.25vmax] pt-[0.5%] pb-[0.5%] pl-[1%] pr-[1%] bg-orange-300 rounded-[0.5vmax]'>Pending</div>
              </div>
              <Link to='/'>
                <div className='h-[80%] p-[3%] hover:bg-slate-200'>
                  <div className='flex flex-row h-[80%]'>
                    <img className='h-[70%] w-[20%] rounded-[1vmax]' src={Food_1} />
                    <div className='flex flex-col pl-[5%] w-[75%]'>
                      <p className='font-light text-[1.75vmax]'>Nasi Goreng</p>
                      <p className='text-[#777777] text-[1.4vmax]'>Makanan</p>
                    </div>
                  </div>
                  <p className='h-[20%] text-[1.5vmax] text-end'><span className='text-[1.25vmax] pr-[2%]'>Total Pesanan </span> Rp 40.000 </p>
                </div>
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}

export default RiwayatPembelian;
