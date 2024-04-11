import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AccountNavbar from "../akun/AkunNav";
import PersonalForm from "../akun/PersonalForm";
import StoreUpdateForm from "../akun/StoreForm";
import AddProduct from "../akun/AddProductForm";
import CreateStoreForm from "../akun/CreateStore";

function AccountPage() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  return (
    <>
    <Navbar />
      <div className="flex min-h-screen flex-col bg-gray-100">
        <div className="mt-10 flex flex-1 md:ml-10 lg:ml-12">
          <AccountNavbar
            isNavVisible={isNavVisible}
            setIsNavVisible={setIsNavVisible}
          />
          <div
            className={`mt-10 flex-1 md:p-16 lg:p-16 ${isNavVisible ? "opacity-50" : "opacity-100"}`}
          >
            <div className="rounded-lg bg-white p-2 shadow-md md:mt-6 lg:p-10">
              <Routes>
                <Route path="/" element={<PersonalForm />} />
                <Route path="profile" element={<PersonalForm />} />
                <Route path="store-profile" element={<StoreUpdateForm />} />
                <Route path="tambah-produk" element={<AddProduct />} />
                <Route path="buat-toko" element={<CreateStoreForm />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
      
  );
}


export default AccountPage;
