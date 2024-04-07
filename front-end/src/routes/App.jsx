import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BerandaPage from '../pages/BerandaPage'
import LoginPage from '../pages/LoginPage'
import RegisPage from '../pages/RegisPage'
import AccountPage from '../pages/AccountPage'
import Detail_ProductPage from '../pages/Detail_ProductPage'
import RiwayatPage from '../pages/RiwayatPage'
import TokoPage from '../pages/TokoPage'

import ContactPage from '../pages/ContactPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={BerandaPage} />
        <Route path='/masuk' Component={LoginPage} />
        <Route path='/daftar' Component={RegisPage} />
        <Route path='/akun/*' Component={AccountPage} />
        <Route path='/detail-product' Component={Detail_ProductPage} />
        <Route path='/riwayat' Component={RiwayatPage} />
        <Route path='/toko' Component={TokoPage} />
      </Routes>
    </div>
  )
}


export default App