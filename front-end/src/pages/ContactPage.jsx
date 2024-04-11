import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../utils/config";
import Navbar from "../components/Navbar";

function ContactPage() {
  const [storeImagePreview, setStoreImagePreview] = useState("");
  const [inputData, setInputData] = useState({});
  const [image, setImage] = useState();
  const [nama, setNama] = useState();
  const [tokoId, setTokoId] = useState("");

  var formData = new FormData();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const maxFileSize = 5 * 1024 * 1024;
    if (file) {
      if (file.type.substr(0, 5) === "image" && file.size <= maxFileSize) {
        setImage(file);
        setStoreImagePreview(URL.createObjectURL(file));
      } else if (file.size > maxFileSize) {
        alert("Ukuran gambar melebihi batas maksimal 5MB.");
        e.target.value = "";
      } else {
        alert("File yang diunggah bukan gambar.");
      }
    }
  };

  const handleRemoveImagePreview = () => {
    setStoreImagePreview("");
  };

  const getTokoId = async (nama) => {
    var response = await axios.get(
      `${config.BASE_URL}/api/toko/byname/${nama}`,
      {
        withCredentials: true,
      },
    );

    setTokoId(response.data.data.toko_id);
  };

  const createHandler = async (e) => {
    e.preventDefault();
    var userInfo = JSON.parse(localStorage.getItem("userInfo"));
    // await getTokoId(nama);
    inputData.toko_id = 1;
    inputData.user_id = userInfo.user_id;
    console.log(inputData);
    formData.append("data", JSON.stringify(inputData));
    formData.append("file", image);
    var res = await axios.post(`${config.BASE_URL}/api/laporan`, formData, {
      withCredentials: true,
      credentials: "include",
    });
    console.log(res);
  };

  return (
    <div class="font-poppins">
      <Navbar />
      <div class="flex items-center justify-center p-[5vmax] hp:pt-[25%] lg:pt-[10%] ">
        <div class="w-full rounded border-[0.1px] border-solid border-black p-[2vmax] lg:w-[40vw] ">
          <div class="border-b-[0.1vmax] border-[#787878] pb-[1vmax] font-semibold hp:text-[2vmax]">
            Laporan
          </div>
          <form>
            <div className="mb-2 text-sm sm:mb-3 sm:text-lg">
              <label
                className="text-l mb-2 block text-gray-700"
                htmlFor="storeImage"
              >
                Foto Laporan
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border px-4 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id="storeImage"
                name="storeImage"
                type="file"
                onChange={handleImageChange}
              />
              {storeImagePreview && (
                <div className="relative mt-4 h-32 w-32">
                  <img
                    src={storeImagePreview}
                    alt="Preview"
                    className="h-full w-full object-cover"
                  />
                  <button
                    type="button"
                    className="absolute right-0 top-0 rounded-full bg-red-500 p-1 font-bold text-white hover:bg-red-700"
                    onClick={handleRemoveImagePreview}
                    style={{ top: "5px", right: "5px" }}
                  >
                    &times;
                  </button>
                </div>
              )}
            </div>
            <div class="pt-[1vmax] hp:text-[1.5vmax]">
              <div class="">Nama Toko</div>
              <input
                type="text"
                class="h-[3vmax] w-full rounded-[0.3vmax] bg-[#f0f0f0] pl-[0.5vmax] focus:bg-white"
                onChange={(e) => setNama(e.target.value)}
              ></input>
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

