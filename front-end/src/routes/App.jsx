import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BerandaPage from '../pages/BerandaPage';
import LoginPage from '../pages/LoginPage';
import RegisPage from '../pages/RegisPage';
import AccountPage from '../pages/AccountPage';
import DetailProductPage from '../pages/DetailProductPage';
import RiwayatPage from '../pages/RiwayatPage';
import TokoPage from '../pages/TokoPage';
import ProdukPage from '../pages/ProdukPage';
import ContactPage from '../pages/ContactPage';
import DetailTokoPage from '../pages/DetailTokoPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<BerandaPage />} />
        <Route path='/masuk' element={<LoginPage />} />
        <Route path='/daftar' element={<RegisPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/akun/*' element={<AccountPage />} />
        <Route path='/detail-product' element={<DetailProductPage />} />
        <Route path='/riwayat' element={<RiwayatPage />} />
        <Route path='/toko' element={<TokoPage />} />
        <Route path='/produk' element={<ProdukPage />} />
        <Route path='/produk/:kategori' element={<ProdukPage />} />
        <Route path="/toko/:id" element={<DetailTokoPage />} />
      </Routes>
    </div>
  );
}

export default App;
