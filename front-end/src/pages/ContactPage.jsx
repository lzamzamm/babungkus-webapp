import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar'

function ContactPage() {
  const [inputReport, setInputReport] = useState({})
  
  var formData = new FormData();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputReport,
      [name]: value,
    });
  };

  const createHandler = async (e) => {
    e.preventDefault();

    var reportInfo = JSON.parse(localStorage.getItem('reportInfo'));
    inputReport.laporan_id = reportInfo.laporan_id;
    console.log(input)
    formData.append('data', JSON.stringify(inputReport));
    var res = await axios.post('http://localhost:5555/api/laporan', formData);
    console.log(res)
  }

  return (
    <div class="font-poppins">
      <Navbar />
      <div class='lg:pt-[10%] hp:pt-[25%] p-[5vmax] flex justify-center items-center '>
        <div class="border-solid border-[0.1px] border-black rounded w-full lg:w-[40vw] p-[2vmax] ">
          <div class='font-semibold hp:text-[2vmax] border-b-[0.1vmax] border-[#787878] pb-[1vmax]'>Laporan</div>
          <div class='hp:text-[1.5vmax] pt-[1vmax]'>
            <div class=''>Judul</div>
            <input type='text' class='h-[3vmax] w-full bg-[#f0f0f0] pl-[0.5vmax] rounded-[0.3vmax] focus:bg-white' name='judul' onChange={handleInputChange}></input>
          </div>
          <div class='hp:text-[1.5vmax] pt-[1vmax]'>
            <div class=''>Alasan</div>
            <textarea type='text' class='h-[20vmax] w-full bg-[#f0f0f0] pl-[0.5vmax] rounded-[0.3vmax] focus:bg-white' name='alasan' onChange={handleInputChange}></textarea>
          </div>
          <button className='bg-slate-300 py-[0.5%] px-[1.5%] rounded-[0.5vmax]' onClick={createHandler}>
            Laporkan
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
