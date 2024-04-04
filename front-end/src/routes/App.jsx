import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BerandaPage from '../pages/BerandaPage';
import LoginPage from '../pages/LoginPage';
import RegisPage from '../pages/RegisPage';
import AccountPage from '../pages/AccountPage';
import DetailProductPage from '../pages/DetailProductPage';
import RiwayatPage from '../pages/RiwayatPage';
import ContactPage from '../pages/ContactPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={BerandaPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={RegisPage} />
        <Route path="/contact" Component={ContactPage} />
        <Route path="/akun/*" Component={AccountPage} />
        <Route path="/detail-product" Component={DetailProductPage} />
        <Route path="/riwayat" Component={RiwayatPage} />
      </Routes>
    </div>
  );
}

export default App;
