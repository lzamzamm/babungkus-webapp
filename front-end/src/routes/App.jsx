import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BerandaPage from '../pages/BerandaPage';
import LoginPage from '../pages/LoginPage';
import RegisPage from '../pages/RegisPage';
import AccountPage from '../pages/AccountPage';
import DetailProductPage from '../pages/DetailProductPage';
import RiwayatPembelianPage from '../pages/riwayat-page/RiwayatPembelian';
import RiwayatPenjualanPage from '../pages/riwayat-page/RiwayatPenjualan';
import TokoPage from '../pages/TokoPage';
import ProdukPage from '../pages/ProdukPage';
import ContactPage from '../pages/ContactPage';
import DashboardPage from '../pages/Dashboard';

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
        <Route path='/riwayat-pembelian' Component={RiwayatPembelianPage} />
        <Route path='/riwayat-penjualan' Component={RiwayatPenjualanPage} />
        <Route path='/toko' Component={TokoPage} />
        <Route path='/produk' Component={ProdukPage} />
        <Route path='/dashboard/*' Component={DashboardPage} />
      </Routes>
    </div>
  );
}

export default App;