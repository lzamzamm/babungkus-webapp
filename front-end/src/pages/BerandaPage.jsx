import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import config from "../utils/config";
import Hero from "../assets/images/hero-element.jpg";
import Food_1 from "../assets/images/beranda/food-1.jpg";
import Food_2 from "../assets/images/beranda/food-2.jpg";
import axios from "axios";

function BerandaPage() {
  const [data, setData] = useState({});

  const getData = async () => {
    const id = 1;
    const response = await axios.get(`${config.BASE_URL}/api/produk/${id}`);
    setData(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-20">
        <div className="relative flex h-[50vh] overflow-hidden text-white lg:h-[80vh]">
          <img
            src={Hero}
            className="h-full w-full object-cover brightness-50"
          ></img>
          <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-8 lg:px-16">
            <p className="text-3xl font-semibold md:text-5xl">Babungkus</p>
            <p className="">Selamatkan Makanan dan Jadilah Bagian dari Gerakan!</p>
          </div>
        </div>
        <div className="flex justify-center px-8 pt-12 hp:flex-col hp:text-[1.6vmax] lg:flex-row">
          <div className=" hp:w-full lg:w-[30vmax]">
            <img
              src={Food_1}
              className="w-full bg-slate-300 object-cover hp:h-[17.5vmax] lg:h-[15.5vmax] lg:rounded-[1.5vmax]"
            />
            <div className="w-full bg-white hp:h-[1vmax] lg:h-[2vmax]" />
            <img
              src={Food_2}
              className="w-full bg-slate-600 object-cover hp:h-[17.5vmax] lg:h-[15.5vmax] lg:rounded-[1.5vmax]"
            />
          </div>
          <div class="hp:w-[full] hp:pt-[5%] lg:w-[49vmax] lg:pl-[5%] lg:pt-[0] ">
          Food waste, atau limbah makanan, adalah masalah global yang serius. Menurut FAO, hanya di Amerika Serikat, limbah makanan mencapai 30% dari total produksi makanan. Hal ini juga mengakibatkan kehilangan sumber daya yang berharga.  <br /> <br />
            Puluhan bahkan ribuan makanan terbuang begitu saja setiap harinya...
            Kita tidak boleh biarkan itu terjadi, mari olah makanan sisa dengan
            baik dan benar <br /> <br />
            "Masa depan yang berkelanjutan bergantung pada bagaimana kita
            mengelola sumber daya alam, termasuk makanan." - Ban Ki-moon
          </div>
        </div>
        <div className="flex pb-[7.5%] pl-[15%] pr-[15%] pt-[7.5%] font-semibold hp:h-[35vmax] hp:flex-col lg:h-[54vmax] lg:flex-col">
          <div className="w-full text-center font-semibold lg:text-[3vmax]">
            Kami Menerima
          </div>
          <div className="flex h-full justify-center gap-x-[2%] pt-[2%] text-white lg:flex-row">
            <div className="  flex w-[10%] items-center justify-center overflow-hidden rounded-[1vmax] duration-700 ease-in-out hover:w-[70%] hover:transition-all ">
              <div className="flex h-full w-full items-center justify-center ">
                <div className="relative flex h-full  w-full items-center justify-center text-center text-[2vmax] grayscale duration-700 ease-in-out hover:grayscale-0 hover:transition-all">
                  <p className="absolute z-10 flex h-full w-full -rotate-90 items-center justify-center duration-700 ease-in-out hover:rotate-0 hover:transition-all ">
                    Pakan
                  </p>
                  <img className="h-full w-full object-cover " src={Food_1} />
                </div>
              </div>
            </div>
            <div className="  flex w-[10%] items-center justify-center overflow-hidden rounded-[1vmax] duration-700 ease-in-out hover:w-[70%] hover:transition-all ">
              <div className="flex h-full w-full items-center justify-center ">
                <div className="relative flex h-full  w-full items-center justify-center text-center text-[2vmax] grayscale duration-700 ease-in-out hover:grayscale-0 hover:transition-all">
                  <p className="absolute z-10 flex h-full w-full -rotate-90 items-center justify-center duration-700 ease-in-out hover:rotate-0 hover:transition-all">
                    Minuman
                  </p>
                  <img className="h-full w-full object-cover" src={Food_1} />
                </div>
              </div>
            </div>
            <div className="  flex w-[10%] items-center justify-center overflow-hidden rounded-[1vmax] duration-700 ease-in-out hover:w-[70%] hover:transition-all ">
              <div className="flex h-full w-full items-center justify-center ">
                <div className="relative flex h-full  w-full items-center justify-center text-center text-[2vmax] grayscale duration-700 ease-in-out hover:grayscale-0 hover:transition-all">
                  <p className="absolute z-10 flex h-full w-full -rotate-90 items-center justify-center duration-700 ease-in-out hover:rotate-0 hover:transition-all">
                    Makanan
                  </p>
                  <img className="h-full w-full object-cover" src={Food_1} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex font-semibold hp:h-[60vmax] hp:flex-col hp:items-center hp:justify-center hp:gap-[3%] hp:p-[10%] lg:h-[45vmax] lg:gap-[5%] lg:p-[5%] lg:px-[10%] lg:py-[5%]">
          <p className="text-center lg:text-[3vmax]">Berbagai Outlet</p>
          <div className="flex h-[50%] gap-[5%] text-[2vmax] text-white hp:w-[60%] hp:flex-col lg:flex-row lg:justify-center">
            <div className=" hover:(apa gitu disini) flex h-[50%] items-center justify-center bg-slate-200 duration-500 ease-in-out hover:transition-all lg:h-full lg:w-[50%]">
              <div className="relative flex items-center justify-center w-full h-full">
                <p className="z-10">Kedai</p>
                <img
                  className="absolute h-full w-full blur-[2px] duration-500 hover:blur-none hover:transition-all"
                  src={Food_1}
                />
              </div>
              {/* <p className='duration-500 hover:transition-all hover:rotate-[360deg]  text-center'>Kedai</p> */}
            </div>
            <div className="flex h-[50%] items-center justify-center bg-amber-200 lg:h-full lg:w-[50%]">
              <div className="relative flex items-center justify-center w-full h-full ">
                <p className="z-10">Restoran</p>
                <img
                  className="absolute h-full w-full blur-[2px] duration-500 hover:blur-none hover:transition-all"
                  src={Food_1}
                />
              </div>
            </div>
          </div>
          <div className="flex h-[50%] gap-[5%] text-[2vmax] text-white hp:w-[60%] hp:flex-col lg:flex-row lg:justify-center">
            <div className="hover:(apa gitu disini) flex h-[50%] items-center justify-center bg-stone-600 duration-500 ease-in-out hover:transition-all lg:h-full lg:w-[50%]">
              <div className="relative flex items-center justify-center w-full h-full">
                <p className="z-10">Toko</p>
                <img
                  className="absolute h-full w-full blur-[2px] duration-500 hover:blur-none hover:transition-all"
                  src={Food_1}
                />
              </div>
            </div>
            <div className="flex h-[50%] items-center justify-center bg-amber-200 lg:h-full lg:w-[50%]">
              <div className="relative flex items-center justify-center w-full h-full ">
                <p className="z-10">Warung</p>
                <img
                  className="absolute h-full w-full blur-[2px] duration-500 hover:blur-none hover:transition-all"
                  src={Food_1}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default BerandaPage;
