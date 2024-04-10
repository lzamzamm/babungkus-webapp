import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function ContactPage() {
  const [inputReport, setInputReport] = useState({});

  var formData = new FormData();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputReport({
      ...inputReport,
      [name]: value,
    });
  };

  const createHandler = async (e) => {
    e.preventDefault();

    var reportInfo = JSON.parse(localStorage.getItem("reportInfo"));
    inputReport.laporan_id = reportInfo.laporan_id;
    console.log(input)
    formData.append('data', JSON.stringify(inputReport));
    var res = await axios.post('http://localhost:5555/api/laporan', formData);
    console.log(res)
  };

  return (
    <div class="font-poppins">
      <Navbar />
      <div class="flex items-center justify-center p-[5vmax] hp:pt-[25%] lg:pt-[10%] ">
        <div class="w-full rounded border-[0.1px] border-solid border-black p-[2vmax] lg:w-[40vw] ">
          <div class="border-b-[0.1vmax] border-[#787878] pb-[1vmax] font-semibold hp:text-[2vmax]">
            Laporan
          </div>
          <div class="pt-[1vmax] hp:text-[1.5vmax]">
            <div class="">Judul</div>
            <input
              type="text"
              class="h-[3vmax] w-full rounded-[0.3vmax] bg-[#f0f0f0] pl-[0.5vmax] focus:bg-white"
              name="judul"
              onChange={handleInputChange}
            ></input>
          </div>
          <div class="pt-[1vmax] hp:text-[1.5vmax]">
            <div class="">Alasan</div>
            <textarea
              type="text"
              class="h-[20vmax] w-full rounded-[0.3vmax] bg-[#f0f0f0] pl-[0.5vmax] focus:bg-white"
              name="alasan"
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button
            className="rounded-[0.5vmax] bg-slate-300 px-[1.5%] py-[0.5%]"
            onClick={createHandler}
          >
            Laporkan
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
