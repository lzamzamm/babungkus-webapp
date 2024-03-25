import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaLock, FaEye, FaEyeSlash, FaPhone } from 'react-icons/fa';
import LogoDaftar from '/assets/images/daftar.png';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function RegisPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isDataValid, setIsDataValid] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const handleLoginUser = async (event) => {
    event.preventDefault();
    setButtonLoading(true);
    setTimeout(() => {
      console.log("Register berhasil");
      setButtonLoading(false);
      setIsDataValid(true);
    }, 2000);
  };
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Navbar />
      <div className="bg-white flex min-h-screen items-center justify-center" >
        <div className="flex gap-10">
        <div className="flex flex-col items-center">
            <img src={LogoDaftar} alt="Babungkus Logo" className="w-90" />
            <div className="text-center mt-4">
              <p className="text-xl">Manfaatkan Makanan Sisa</p>
              <p className="text-l">Bersama-sama Selamatkan Bumi</p>
            </div>
            </div>
          <div className="border border-gray-300 shadow-lg rounded-lg p-6 w-96">
            <h3 className="text-xl font-semibold leading-6 tracking-tighter text-center mb-8">Daftar</h3>
            <div className="p-6 pt-0">
              <form onSubmit={handleLoginUser}>
                <div className="group relative rounded-lg border focus-within:border-green-300 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-blue-300/30 flex items-center">
                  <FaUserAlt className="absolute ml-2 text-gray-400" />
                  <input type="text" name="namaLengkap" placeholder="Nama Lengkap" autoComplete="off"
                    className="block w-full border-0 bg-transparent p-0 text-sm placeholder:text-gray-400/90 focus:outline-none focus:ring-0 sm:leading-7 pl-10" />
                </div>
                <div className="group relative rounded-lg border focus-within:border-green-300 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-blue-300/30 flex items-center">
                  <FaUserAlt className="absolute ml-2 text-gray-400" />
                  <input type="text" name="namaPengguna" placeholder="Nama Pengguna" autoComplete="off"
                    className="block w-full border-0 bg-transparent p-0 text-sm placeholder:text-gray-400/90 focus:outline-none focus:ring-0 sm:leading-7 pl-10" />
                </div>
                <div className="group relative rounded-lg border focus-within:border-green-300 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-blue-300/30 flex items-center">
                  <FaPhone className="absolute ml-2 text-gray-400" />
                  <input type="tel" name="noTelp" placeholder="Nomor Telepon" autoComplete="off"
                    className="block w-full border-0 bg-transparent p-0 text-sm placeholder:text-gray-400/90 focus:outline-none focus:ring-0 sm:leading-7 pl-10" />
                </div>
                <div className="mt-4 group relative rounded-lg border focus-within:border-green-300 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-blue-300/30 flex items-center">
                  <FaLock className="absolute ml-2 text-gray-400" />
                  <input type={showPassword ? "text" : "password"} name="password" placeholder="Kata Sandi" className="block w-full border-0 bg-transparent p-0 text-sm placeholder:text-gray-400/90 focus:outline-none focus:ring-0 sm:leading-7 pl-10" />
                  <button type="button" onClick={togglePassword} className="absolute right-3">
                    {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
                  </button>
                </div>
                <div className="mt-4 group relative rounded-lg border focus-within:border-green-300 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-blue-300/30 flex items-center">
                  <FaLock className="absolute ml-2 text-gray-400" />
                  <input type={showPassword ? "text" : "password"} name="password" placeholder="Konfirmasi Kata Sandi" className="block w-full border-0 bg-transparent p-0 text-sm placeholder:text-gray-400/90 focus:outline-none focus:ring-0 sm:leading-7 pl-10" />
                  <button type="button" onClick={toggleConfirmPasswordVisibility} className="absolute right-3">
                    {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
                  </button>
                </div>
                <div className="mt-4 flex items-center justify-end gap-x-2">
                  <button
                    type="submit"
                    className={`w-full text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150 ease-in-out ${isDataValid ? "bg-orange-800 hover:bg-yellow-600 focus:ring-neutral-400" : "bg-primary"
                      } ${buttonLoading ? "opacity-50" : ""}`}
                  >
                    {buttonLoading ? "Memverifikasi..." : "Masuk"}
                  </button>
                </div>
              </form>
              <div className="text-xs leading-6 tracking-tighter text-center">
                <div className="text-gray-400 mt-2">Dengan Mendaftar Saya Menyetujui</div>
                <Link className="text-primary" to="/syarat-dan-ketentuan">Syarat dan Ketentuan</Link> serta <Link className="text-primary" to="/kebijakan-privasi">Kebijakan Privasi</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
