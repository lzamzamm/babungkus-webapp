import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BerandaPage from '../pages/BerandaPage'
import LoginPage from '../pages/LoginPage'
import RegisPage from '../pages/RegisPage'
import AccountPage from '../pages/AccountPage'
import Detail_ProductPage from '../pages/Detail_ProductPage'
import RiwayatPage from '../pages/RiwayatPage'

import ContactPage from '../pages/ContactPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={BerandaPage} />
        <Route path='/login' Component={LoginPage} />
        <Route path='/register' Component={RegisPage} />
        <Route path='/akun/*' Component={AccountPage} />
        <Route path='/detail-product' Component={Detail_ProductPage} />
        <Route path='/riwayat' Component={RiwayatPage} />
      </Routes>
    </div>
  )
}


export default App