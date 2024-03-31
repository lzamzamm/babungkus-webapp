import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AccountNavbar from '../components/AkunNav';
import PersonalForm from '../components/PersonalForm';
import StoreForm from '../components/StoreForm'; 
import AddProduct from '../components/AddProductForm'; 
import ProductSaya from '../components/ProductSaya';



function AccountPage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col min-h-screen bg-gray-100"> {/* Memberikan latar belakang abu-abu untuk keseluruhan halaman */}
        <div className="flex flex-1 ml-10">
          <AccountNavbar />
          <div className="flex-1 p-16"> 
          <div className="bg-white shadow-md rounded-lg p-10 mr-10"> 
            <Routes>
              <Route path='/' element={<PersonalForm />} />
              <Route path='profile' element={<PersonalForm />} />
              <Route path='store-profile' element={<StoreForm />} />
              <Route path='add-product' element={<AddProduct />} />
              <Route path='produk-saya' element={<ProductSaya />} />
            </Routes>
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>


  );
}

export default AccountPage;
