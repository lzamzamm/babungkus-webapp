import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LogoLogin from "/assets/images/logoLogin.jpeg";
import config from "../utils/config";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../slices/auth.slice";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const togglePassword = () => setShowPassword(!showPassword);

  const handleLoginUser = async (event) => {
    event.preventDefault();
    const username = event.target.username.value.trim();
    const password = event.target.password.value.trim();

    if (!username || !password) {
      setErrorMessage("Nama pengguna dan kata sandi diperlukan.");
      return;
    }

    setButtonLoading(true);
    setErrorMessage("");

    const userData = { username, password };

    try {
      const response = await axios.post(
        `${config.BASE_URL}/api/user/`,        
        userData,
        { withCredentials: true },
      );
      console.log("Login berhasil", response.data);
      dispatch(setCredentials({ ...response.data.data }));
      localStorage.setItem("userInfo", JSON.stringify(response.data.data));
      navigate("/");
      } catch (error) {
      console.error("Error login", error);
      const errorMessage =
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : "network error!";
      setErrorMessage(errorMessage);
    } finally {
      setButtonLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <Navbar/>
      <div className="flex min-h-screen flex-col items-center bg-white pt-16 text-gray-700 sm:justify-center">
        <a href="#" className="mt-16 text-center">
          <img src={LogoLogin} alt="Babungkus Logo" className="h-60" />
        </a>
        <div className="m:mt-10 mt-12 w-full max-w-lg">
          <div className="mx-5 rounded-lg border border-gray-200 shadow-lg">
            <div className="flex flex-col p-6">
              <h3 className="text-center text-xl font-semibold leading-6 tracking-tighter">
                MASUK
              </h3>
            </div>
            <div className="p-6 pt-0">
              <form onSubmit={handleLoginUser}>
                <div className="group relative flex items-center rounded-lg border px-3 pb-1.5 pt-2.5 duration-200 focus-within:border-green-300 focus-within:ring focus-within:ring-blue-300/30">
                  <FaUserAlt className="absolute ml-2 text-gray-400" />
                  <input
                    type="text"
                    name="username"
                    placeholder="Nama Pengguna"
                    autoComplete="off"
                    className="block w-full border-0 bg-transparent p-0 pl-10 text-sm placeholder:text-gray-400/90 focus:outline-none focus:ring-0 sm:leading-7"
                  />
                </div>
                <div className="group relative mt-4 flex items-center rounded-lg border px-3 pb-1.5 pt-2.5 duration-200 focus-within:border-green-300 focus-within:ring focus-within:ring-blue-300/30">
                  <FaLock className="absolute ml-2 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Kata Sandi"
                    className="block w-full border-0 bg-transparent p-0 pl-10 text-sm placeholder:text-gray-400/90 focus:outline-none focus:ring-0 sm:leading-7"
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute right-3"
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-gray-500" />
                    ) : (
                      <FaEye className="text-gray-500" />
                    )}
                  </button>
                </div>
                {errorMessage && (
                  <div className="mt-2 text-center text-red-500">
                    {errorMessage}
                  </div>
                )}
                <div className="mt-4 flex items-center justify-end gap-x-2">
                  <button
                    type="submit"
                    className={`w-full rounded-md px-4 py-2 font-semibold text-white transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      buttonLoading ? "bg-gray-400" : "bg-primary"
                    } ${buttonLoading ? "cursor-not-allowed" : ""}`}
                    disabled={buttonLoading}
                  >
                    {buttonLoading ? "Memverifikasi..." : "Masuk"}
                  </button>
                </div>
              </form>
              <div className="text-l mt-2 text-center leading-6 tracking-tighter">
                Belum punya akun?{" "}
                <Link className="ml-1 text-primary" to="/daftar">
                  Daftar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
