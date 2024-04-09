import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AccountNavbar from '../components/akun/AkunNav';
import PersonalForm from '../components/akun/PersonalForm';
import StoreUpdateForm from '../components/akun/StoreForm'; 
import AddProduct from '../components/akun/AddProductForm'; 
import CreateStoreForm from '../components/akun/CreateStore';

function AccountPage() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  return (
    <div>
      <Navbar />
      {isNavVisible && (
        <div className="fixed inset-0 bg-opacity-50 z-10" onClick={() => setIsNavVisible(false)}></div>
      )}
      <div className="flex flex-col min-h-screen bg-gray-100">
        <div className="flex flex-1 md:ml-10 lg:ml-12 mt-10">
          <AccountNavbar isNavVisible={isNavVisible} setIsNavVisible={setIsNavVisible} />
          <div className={`flex-1 md:p-16 lg:p-16 mt-10 ${isNavVisible ? 'opacity-50' : 'opacity-100'}`}>
            <div className="bg-white shadow-md rounded-lg lg:p-10 p-2 md:mt-6"> 
              <Routes>
                <Route path='/' element={<PersonalForm />} />
                <Route path='profile' element={<PersonalForm />} />
                <Route path='store-profile' element={<StoreUpdateForm />} />
                <Route path='add-product' element={<AddProduct />} />
                <Route path='create-store' element={<CreateStoreForm />} />
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
