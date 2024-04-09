import { useState, useEffect } from "react";
import axios from "axios";

const PersonalForm = () => {
  // Deklarasi state
  const [nama_lengkap, setNamaLengkap] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [no_telp, setNoTelp] = useState("");
  const userId = JSON.parse(localStorage.getItem("userInfo")).user_id;

  const getUserById = async () => {
    try {
      const response = await axios.get(`http://localhost:5555/api/user`, {
        withCredentials: true,
        credentials: "include",
      });
      setNamaLengkap(response.data.nama_lengkap);
      setUsername(response.data.username);
      setEmail(response.data.email);
      setNoTelp(response.data.no_telp);
    } catch (err) {
      console.log(err);
    }
  };
  // Mengambil data pengguna berdasarkan ID
  useEffect(() => {
    getUserById();
  }, []);
  //  [userId]);

  // Menghandle submit form
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        nama_lengkap: nama_lengkap,
        username: username,
        email: email,
        no_telp: no_telp,
      };
      await axios.patch(`http://localhost:5555/api/user/${userId}`, userData);
      alert("Data berhasil diperbarui");
    } catch (err) {
      console.log(err);
      alert("Gagal memperbarui data");
    }
  };

  return (
    <div
      className="p-3 w-full text-gray-800 mt-10 md:mt-2 lg:mt-1"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <h2 className="lg:text-2xl md:text-xl sm:text-base mb-2">Data Diri</h2>
      <hr
        className="mb-5 sm:mb-10"
        style={{ height: "2px", backgroundColor: "#000", border: "none" }}
      />
      <form
        onSubmit={handleFormSubmit}
        className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl"
      >
        <div className="mb-2 sm:mb-3 text-sm sm:text-lg">
          <label className="block text-gray-700 mb-2" htmlFor="NamaLengkap">
            Nama Lengkap
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="NamaLengkap"
            name="nama_lengkap"
            onChange={(e) => setNamaLengkap(e.target.value)}
            value={nama_lengkap}
            type="text"
            required
          />
        </div>
        <div className="mb-2 sm:mb-3 text-sm sm:text-lg">
          <label
            className="block text-gray-700 text-l mb-2"
            htmlFor="NamaPengguna"
          >
            Nama Pengguna
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="NamaPengguna"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            required
          />
        </div>
        <div className="mb-2 sm:mb-3 text-sm sm:text-lg">
          <label
            className="block text-gray-700 text-l mb-2 mr-2"
            htmlFor="Email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            required
          />
        </div>
        <div className="mb-2 sm:mb-3 text-sm sm:text-lg">
          <label
            className="block text-gray-700 text-l mb-2 mr-2"
            htmlFor="Telpon"
          >
            Telpon
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Telpon"
            name="no_telp"
            onChange={(e) => setNoTelp(e.target.value)}
            value={no_telp}
            type="tel"
            required
          />
          <p className="text-gray-600 text-xs italic">
            Masukkan nomor telpon yang juga merupakan nomor WhatsApp
          </p>
        </div>
        <button
          className="bg-primary hover:bg-amber-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Simpan
        </button>
      </form>
    </div>
  );
};

export default PersonalForm;