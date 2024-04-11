import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import PrivateRoute from "../components/privateRoute";
import BerandaPage from "../pages/BerandaPage";
import LoginPage from "../pages/LoginPage";
import RegisPage from "../pages/RegisPage";
import AccountPage from "../pages/AccountPage";
import UpdateProductPage from "../pages/UpdateProductPage";
import DetailProductPage from "../pages/DetailProductPage";
import RiwayatPembelianPage from "../pages/riwayat-page/RiwayatPembelian";
import RiwayatPenjualanPage from "../pages/riwayat-page/RiwayatPenjualan";
import TokoPage from "../pages/TokoPage";
import ProdukPage from "../pages/ProdukPage";
import LaporPage from "../pages/LaporPage";
import DashboardPage from "../pages/Dashboard";
import DetailTokoPage from "../pages/DetailTokoPage";
import NotFoundPage from "../pages/NotFoundPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BerandaPage />} />
        <Route path="/masuk" element={<LoginPage />} />
        <Route path="/daftar" element={<RegisPage />} />
        <Route path="/toko" element={<TokoPage />} />
        <Route path="/toko/:id" element={<DetailTokoPage />} />
        <Route path="/produk" element={<ProdukPage />} />
        <Route path="/produk/:kategori" element={<ProdukPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route element={<PrivateRoute />}>
          <Route path="/akun/*" element={<AccountPage />} />
          <Route path="/lapor" element={<LaporPage />} />
          <Route path="/detail-product" element={<DetailProductPage />} />
          <Route path="/riwayat-pembelian" element={<RiwayatPembelianPage />} />
          <Route path="/riwayat-penjualan" element={<RiwayatPenjualanPage />} />
          <Route path="/admin/dashboard/*" element={<DashboardPage />} />
          <Route path="/edit-produk" element={<UpdateProductPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
