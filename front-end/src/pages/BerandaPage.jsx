import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Hero from '../../public/assets/images/hero-element.jpg'
import Food_1 from '../../public/assets/images/beranda/food-1.jpg'
import Food_2 from '../../public/assets/images/beranda/food-2.jpg'

function BerandaPage() {
  return (
    <div class='font-poppins'>
      <Navbar />
      <div class='flex text-white relative overflow-hidden h-[30vh] lg:h-[80vh]'>
        <img src={Hero} class='brightness-50 h-full w-full object-cover'></img>
        <div class='flex flex-col absolute inset-0 justify-center px-[5%]'>
          <p class='hp:text-[3vmax] font-semibold'>Babungkus</p>
          <p class='text-[1.5vmax]'>Selamatkan Makanan dan Jadilah Bagian dari Gerakan!</p>
        </div>
      </div>
      <div class='hp:text-[1.6vmax] flex lg:flex-row hp:flex-col pt-[7.5%] pl-[10%] pr-[10%]'>
        <div class=' hp:w-full lg:w-[30vmax]'>
          <img src={Food_1} class='w-full lg:h-[15.5vmax] hp:h-[17.5vmax] bg-slate-300 lg:rounded-[1.5vmax]' />
          <div class='w-full lg:h-[2vmax] hp:h-[1vmax] bg-white' />
          <img src={Food_2} class='w-full lg:h-[15.5vmax] hp:h-[17.5vmax] bg-slate-600 lg:rounded-[1.5vmax]' />
        </div>
        <div class='hp:pt-[5%] lg:pt-[0] lg:pl-[5%] hp:w-[full] lg:w-[49vmax] '>
          Puluhan bahkan ribuan makanan terbuang begitu saja setiap harinya...
          Kita tidak boleh biarkan itu terjadi, mari olah makanan sisa dengan baik dan benar <br /> <br />
          "Masa depan yang berkelanjutan bergantung pada bagaimana kita mengelola sumber daya alam, termasuk makanan." - Ban Ki-moon
        </div>
      </div>
      <div class='pt-[7.5%] pl-[15%] pr-[15%] pb-[7.5%] flex lg:flex-col hp:flex-col lg:h-[54vmax] hp:h-[35vmax] font-semibold'>
        <div class='text-center w-full font-semibold lg:text-[3vmax]'>Kami Menerima</div>
        <div class='flex lg:flex-row pt-[2%] gap-x-[2%] h-full justify-center text-white'>
          <div class='  w-[10%] hover:transition-all ease-in-out duration-700 rounded-[1vmax] hover:w-[70%] flex justify-center items-center overflow-hidden '>
            <div class='w-full h-full flex justify-center items-center '>
              <div class='  object- hover:transition-all ease-in-out duration-700  text-[2vmax] text-center h-full w-full flex items-center justify-center relative grayscale hover:grayscale-0'>
                <p class='z-10 flex items-center justify-center -rotate-90 hover:transition-all ease-in-out duration-700 hover:rotate-0 absolute w-full h-full '>Pakan</p>
                <img class='w-full h-full object-cover ' src={Food_1} />
              </div>
            </div>
          </div>
          <div class='  w-[10%] hover:transition-all ease-in-out duration-700 rounded-[1vmax] hover:w-[70%] flex justify-center items-center overflow-hidden '>
            <div class='w-full h-full flex justify-center items-center '>
              <div class='  object- hover:transition-all ease-in-out duration-700  text-[2vmax] text-center h-full w-full flex items-center justify-center relative grayscale hover:grayscale-0'>
                <p class='z-10 flex items-center justify-center -rotate-90 hover:transition-all ease-in-out duration-700 hover:rotate-0 absolute w-full h-full'>Minuman</p>
                <img class='w-full h-full object-cover' src={Food_1} />
              </div>
            </div>
          </div>
          <div class='  w-[10%] hover:transition-all ease-in-out duration-700 rounded-[1vmax] hover:w-[70%] flex justify-center items-center overflow-hidden '>
            <div class='w-full h-full flex justify-center items-center '>
              <div class='  object- hover:transition-all ease-in-out duration-700  text-[2vmax] text-center h-full w-full flex items-center justify-center relative grayscale hover:grayscale-0'>
                <p class='z-10 flex items-center justify-center -rotate-90 hover:transition-all ease-in-out duration-700 hover:rotate-0 absolute w-full h-full'>Makanan</p>
                <img class='w-full h-full object-cover' src={Food_1} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=''>
        
      </div>
      <Footer />
    </div>
  )
}

export default BerandaPage