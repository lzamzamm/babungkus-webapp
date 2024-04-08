import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserAlt, FaLock, FaEye, FaEyeSlash, FaEnvelope, FaPhone } from 'react-icons/fa';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LogoDaftar from '/assets/images/daftar.png';

export default function RegisPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isDataValid, setIsDataValid] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const handleRegisterUser = async (event) => {
    event.preventDefault();
    setButtonLoading(true);
    setErrorMessage('');
  
    const userData = {
      nama_lengkap: event.target.nama_lengkap.value.trim(),
      username: event.target.username.value.trim(),
      email: event.target.email.value.trim(),
      no_telp: event.target.no_telp.value.trim(),
      password: event.target.password.value,
    };
  
    try {
      const response = await axios.post('http://localhost:5555/api/user/register', userData);
      console.log("Register berhasil", response.data);
      setIsDataValid(true);
      navigate('/login');
    } catch (error) {
      console.error("Error register", error.response ? error.response.data : "Network error");
      setErrorMessage(error.response ? error.response.data.message : "Network error");
      setIsDataValid(false);
    } finally {
      setButtonLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Navbar />
      <div className="bg-white flex min-h-screen items-center justify-center">
        <div className="flex flex-col sm:flex-row gap-10 items-center mt-12">
          <div className="flex flex-col items-center">
            <img src={LogoDaftar} alt="Logo" className="w-48 sm:w-72 md:w-90" />
            <div className="text-center mt-4">
              <p className="text-base sm:text-lg md:text-xl">Manfaatkan Makanan Sisa</p>
              <p className="text-sm sm:text-base md:text-l">Bersama-sama Selamatkan Bumi</p>
            </div>
          </div>

          <div className="border border-gray-300 shadow-lg rounded-lg p-6 w-full sm:w-96">
            <h3 className="text-xl font-semibold leading-6 tracking-tighter text-center mb-8">Daftar</h3>
            <form onSubmit={handleRegisterUser}>
              {/* Nama Lengkap */}
              <InputField icon={<FaUserAlt />} type="text" name="nama_lengkap" placeholder="Nama Lengkap" />
              {/* Nama Pengguna */}
              <InputField icon={<FaUserAlt />} type="text" name="username" placeholder="Nama Pengguna" />
              {/* Email */}
              <InputField icon={<FaEnvelope />} type="email" name="email" placeholder="Email" />
              {/* Nomor Telepon */}
              <InputField icon={<FaPhone />} type="tel" name="no_telp" placeholder="Nomor Telepon" />
              {/* Kata Sandi */}
              <InputField icon={<FaLock />} type={showPassword ? "text" : "password"} name="password" placeholder="Kata Sandi" toggleVisibility={togglePasswordVisibility} showPassword={showPassword} />
              {errorMessage && <div className="text-red-500 text-center mt-2">{errorMessage}</div>}
              <div className="mt-4 flex items-center justify-end gap-x-2">
                <button
                  type="submit"
                  className={`w-full text-white font-semibold py-2 px
                  -4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150 ease-in-out ${isDataValid ? "bg-primary hover:bg-orange-800 focus:ring-neutral-400" : "bg-primary"
                    } ${buttonLoading ? "opacity-50" : ""}`}
                >
                  {buttonLoading ? "Memverifikasi..." : "Daftar"}
                </button>
              </div>
            </form>
            <div className="text-xs leading-6 tracking-tighter text-center mt-2">
              <div className="text-gray-400">Dengan Mendaftar Saya Menyetujui</div>
              <Link className="text-primary" to="/syarat-dan-ketentuan">Syarat dan Ketentuan</Link> serta <Link className="text-primary" to="/kebijakan-privasi">Kebijakan Privasi</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function InputField({ icon, type, name, placeholder, toggleVisibility, showPassword }) {
  return (
    <div className="mt-4 group relative rounded-lg border focus-within:border-green-300 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-blue-300/30 flex items-center">
      {icon}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
        className="block w-full border-0 bg-transparent p-0 text-sm placeholder:text-gray-400/90 focus:outline-none focus:ring-0 sm:leading-7 pl-10"
      />
      {toggleVisibility && (
        <button type="button" onClick={toggleVisibility} className="absolute right-3">
          {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
        </button>
      )}
    </div>
  );
}
