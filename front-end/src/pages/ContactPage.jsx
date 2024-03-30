import React from 'react'

function ContactPage() {
  return (
    <div class="font-poppins">
      <Navbar />
      <div class='p-[5vmax]'>
        <div class="border-solid border-[0.1px] border-black rounded w-fit p-[2vmax] ">
          <div class='font-semibold hp:text-[2vmax] border-b-[0.1vmax] border-[#787878] pb-[1vmax]'>Hubungi Kami</div>
          <div class='hp:text-[1.5vmax] pt-[1vmax]'>
            <div class=''>Nama</div>
            <input type='text' class='h-[3vmax] w-[30vw] bg-[#f0f0f0] pl-[0.5vmax] rounded-[0.3vmax] focus:bg-white'></input>
          </div>
          <div class='hp:text-[1.5vmax] pt-[1vmax]'>
            <div class=''>Email</div>
            <input type='text' class='h-[3vmax] w-[30vw] bg-[#f0f0f0] pl-[0.5vmax] rounded-[0.3vmax] focus:bg-white'></input>
          </div>
          <div class='hp:text-[1.5vmax] pt-[1vmax]'>
            <div class=''>Nama</div>
            <input type='text' class='h-[3vmax] w-[30vw] bg-[#f0f0f0] pl-[0.5vmax] rounded-[0.3vmax] focus:bg-white'></input>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
