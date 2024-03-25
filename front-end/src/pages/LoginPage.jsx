import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LogoLogin from '/assets/images/logoLogin.jpeg';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isDataValid, setIsDataValid] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const handleLoginUser = async (event) => {
    event.preventDefault();
    setButtonLoading(true);
    setTimeout(() => {
      console.log("Login berhasil");
      setButtonLoading(false);
      setIsDataValid(true);
    }, 2000);
  };

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Navbar />
      <div className="bg-white text-gray-700 flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0" >
        <a href="#" className="text-center">
          <img src={LogoLogin} alt="Babungkus Logo" className="h-60" />
        </a>
        <div className="mt-12 w-full max-w-lg sm:mt-10">
          <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
          <div className="mx-5 border border-gray-200 shadow-lg rounded-lg">
            <div className="flex flex-col p-6">
              <h3 className="text-xl font-semibold leading-6 tracking-tighter text-center">MASUK</h3>
            </div>
            <div className="p-6 pt-0">
              <form onSubmit={handleLoginUser}>
                <div className="group relative rounded-lg border focus-within:border-green-300 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-blue-300/30 flex items-center">
                  <FaUserAlt className="absolute ml-2 text-gray-400" />
                  <input type="text" name="username" placeholder="Nama Pengguna" autoComplete="off"
                    className="block w-full border-0 bg-transparent p-0 text-sm placeholder:text-gray-400/90 focus:outline-none focus:ring-0 sm:leading-7 pl-10" />
                </div>
                <div className="mt-4 group relative rounded-lg border focus-within:border-green-300 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-blue-300/30 flex items-center">
                  <FaLock className="absolute ml-2 text-gray-400" />
                  <input type={showPassword ? "text" : "password"} name="password" placeholder="Kata Sandi" className="block w-full border-0 bg-transparent p-0 text-sm placeholder:text-gray-400/90 focus:outline-none focus:ring-0 sm:leading-7 pl-10" />
                  <button type="button" onClick={togglePassword} className="absolute right-3">
                    {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
                  </button>
                </div>
                <div className="mt-4 flex items-center justify-end gap-x-2">
                  <button
                    type="submit"
                    className={`w-full text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150 ease-in-out ${isDataValid ? "bg-primary  focus:ring-neutral-400" : "bg-amber-200"
                      } ${buttonLoading ? "opacity-50" : ""}`}
                  >
                    {buttonLoading ? "Memverifikasi..." : "Masuk"}
                  </button>
                </div>
              </form>
              <div className="text-l leading-6 tracking-tighter text-center mt-2">Belum punya akun? <Link className="text-primary ml-1" to="/Register">Daftar</Link></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
