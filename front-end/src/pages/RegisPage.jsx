import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUserAlt,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import config from "../utils/config";
import LogoDaftar from "/assets/images/daftar.png";

export default function RegisPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isDataValid, setIsDataValid] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);
  const handleRegisterUser = async (event) => {
    event.preventDefault();
    setButtonLoading(true);
    setErrorMessage("");

    const userData = {
      nama_lengkap: event.target.nama_lengkap.value.trim(),
      username: event.target.username.value.trim(),
      email: event.target.email.value.trim(),
      no_telp: event.target.no_telp.value.trim(),
      password: event.target.password.value,
    };

    try {
      const response = await axios.post(
        `${config.BASE_URL}/api/user/register`,
        userData,
      );
      console.log("Register berhasil", response.data);
      setIsDataValid(true);
      navigate("/masuk");
    } catch (error) {
      console.error(
        "Error register",
        error.response ? error.response.data : "Network error",
      );
      setErrorMessage(
        error.response ? error.response.data.message : "Network error",
      );
      setIsDataValid(false);
    } finally {
      setButtonLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="mt-12 flex flex-col items-center gap-10 sm:flex-row">
          <div className="flex flex-col items-center">
            <img src={LogoDaftar} alt="Logo" className="md:w-90 w-48 sm:w-72" />
            <div className="mt-4 text-center">
              <p className="text-base sm:text-lg md:text-xl">
                Manfaatkan Makanan Sisa
              </p>
              <p className="md:text-l text-sm sm:text-base">
                Bersama-sama Selamatkan Bumi
              </p>
            </div>
          </div>

          <div className="w-full rounded-lg border border-gray-300 p-6 shadow-lg sm:w-96">
            <h3 className="mb-8 text-center text-xl font-semibold leading-6 tracking-tighter">
              Daftar
            </h3>
            <form onSubmit={handleRegisterUser}>
              {/* Nama Lengkap */}
              <InputField
                icon={<FaUserAlt />}
                type="text"
                name="nama_lengkap"
                placeholder="Nama Lengkap"
              />
              {/* Nama Pengguna */}
              <InputField
                icon={<FaUserAlt />}
                type="text"
                name="username"
                placeholder="Nama Pengguna"
              />
              {/* Email */}
              <InputField
                icon={<FaEnvelope />}
                type="email"
                name="email"
                placeholder="Email"
              />
              {/* Nomor Telepon */}
              <InputField
                icon={<FaPhone />}
                type="tel"
                name="no_telp"
                placeholder="Nomor Telepon"
              />
              {/* Kata Sandi */}
              <InputField
                icon={<FaLock />}
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Kata Sandi"
                toggleVisibility={togglePasswordVisibility}
                showPassword={showPassword}
              />
              {errorMessage && (
                <div className="mt-2 text-center text-red-500">
                  {errorMessage}
                </div>
              )}
              <div className="mt-4 flex items-center justify-end gap-x-2">
                <button
                  type="submit"
                  className={`px -4 w-full rounded-md py-2
                  font-semibold text-white transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    isDataValid
                      ? "bg-primary hover:bg-orange-800 focus:ring-neutral-400"
                      : "bg-primary"
                  } ${buttonLoading ? "opacity-50" : ""}`}
                >
                  {buttonLoading ? "Memverifikasi..." : "Daftar"}
                </button>
              </div>
            </form>
            <div className="mt-2 text-center text-xs leading-6 tracking-tighter">
              <div className="text-gray-400">
                Dengan Mendaftar Saya Menyetujui
              </div>
              <Link className="text-primary" to="/syarat-dan-ketentuan">
                Syarat dan Ketentuan
              </Link>{" "}
              serta{" "}
              <Link className="text-primary" to="/kebijakan-privasi">
                Kebijakan Privasi
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function InputField({
  icon,
  type,
  name,
  placeholder,
  toggleVisibility,
  showPassword,
}) {
  return (
    <div className="group relative mt-4 flex items-center rounded-lg border px-3 pb-1.5 pt-2.5 duration-200 focus-within:border-green-300 focus-within:ring focus-within:ring-blue-300/30">
      {icon}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
        className="block w-full border-0 bg-transparent p-0 pl-10 text-sm placeholder:text-gray-400/90 focus:outline-none focus:ring-0 sm:leading-7"
      />
      {toggleVisibility && (
        <button
          type="button"
          onClick={toggleVisibility}
          className="absolute right-3"
        >
          {showPassword ? (
            <FaEyeSlash className="text-gray-500" />
          ) : (
            <FaEye className="text-gray-500" />
          )}
        </button>
      )}
    </div>
  );
}
