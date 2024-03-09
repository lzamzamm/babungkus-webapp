import React from 'react'
import Navbar from '../components/Navbar'

function BerandaPage() {
  return (
    <div class='font-poppins'>
      <Navbar />
      <div class='pl-[9%] pt-[10%] pb-[10%] bg-[#D9D9D9]'>
        <div class='hp:text-[4vmax] font-semibold'>Babungkus</div>
        <div class='font-inter text-[2vmax]'>Selamatkan Makanan dan Jadilah Bagian dari Gerakan!</div>
      </div>
      <div class='hp:text-[1.6vmax] lg:text-[2.25vmax] font-inter flex pt-[7.5%] pl-[10%] pr-[10%] pb-[7.5%]'>
        <div class='  hp:w-[20vmax] lg:w-[30vmax]'>
          <div class='w-full lg:h-[17.5vmax] hp:h-[12.5vmax] bg-slate-300 rounded-[1.5vmax]' />
          <div class='w-full hp:h-[2vmax] bg-white' />
          <div class='w-full lg:h-[17.5vmax] hp:h-[12.5vmax] bg-slate-600 rounded-[1.5vmax]' />
        </div>
        <div class=' pl-[5%] hp:w-[34vmax] lg:w-[49vmax]'>
          Puluhan bahkan ribuan makanan terbuang begitu saja setiap harinya... <br/> <br/>
          Kita tidak boleh biarkan itu terjadi, mari olah makanan sisa dengan baik dan benar <br/> <br/>
          "Masa depan yang berkelanjutan bergantung pada bagaimana kita mengelola sumber daya alam, termasuk makanan." - Ban Ki-moon
        </div>
      </div>
    </div>
  )
}

export default BerandaPage