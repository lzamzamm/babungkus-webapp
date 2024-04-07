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

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={BerandaPage} />
        <Route path='/masuk' Component={LoginPage} />
        <Route path='/daftar' Component={RegisPage} />
        <Route path='/contact' Component={ContactPage} />
        <Route path='/akun/*' Component={AccountPage} />
        <Route path='/detail-product' Component={DetailProductPage} />
        <Route path='/riwayat' Component={RiwayatPage} />
        <Route path='/toko' Component={TokoPage} />
        <Route path='/produk' Component={ProdukPage} />
      </Routes>
    </div>
  );
}

export default App;