import React from "react";
import { Route, Routes } from "react-router-dom";
import BerandaPage from "../pages/BerandaPage";
import LoginPage from "../pages/LoginPage";
import RegisPage from "../pages/RegisPage";
import AccountPage from "../pages/AccountPage";
import DetailProductPage from "../pages/DetailProductPage";
import RiwayatPembelianPage from "../pages/riwayat-page/RiwayatPembelian";
import RiwayatPenjualanPage from "../pages/riwayat-page/RiwayatPenjualan";
import TokoPage from "../pages/TokoPage";
import ProdukPage from "../pages/ProdukPage";
import ContactPage from "../pages/ContactPage";
import DashboardPage from "../pages/Dashboard";
import DetailTokoPage from "../pages/DetailTokoPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BerandaPage />} />
        <Route path="/masuk" element={<LoginPage />} />
        <Route path="/daftar" element={<RegisPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/akun/*" element={<AccountPage />} />
        <Route path="/detail-product" element={<DetailProductPage />} />
        <Route path="/riwayat-pembelian" element={<RiwayatPembelianPage />} />
        <Route path="/riwayat-penjualan" Component={RiwayatPenjualanPage} />
        <Route path="/toko" element={<TokoPage />} />
        <Route path="/produk" element={<ProdukPage />} />
        <Route path="/produk/:kategori" element={<ProdukPage />} />
        <Route path="/toko/:id" element={<DetailTokoPage />} />
        <Route path="/dashboard/*" Component={DashboardPage} />
      </Routes>
    </div>
  );
}

export default App;
