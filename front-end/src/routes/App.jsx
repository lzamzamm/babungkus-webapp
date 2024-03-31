import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BerandaPage from '../pages/BerandaPage'
import LoginPage from '../pages/LoginPage'
import RegisPage from '../pages/RegisPage'
import AccountPage from '../pages/AccountPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={BerandaPage} />
        <Route path='/login' Component={LoginPage} />
        <Route path='/register' Component={RegisPage} />
        <Route path='/akun/*' Component={AccountPage} />
      </Routes>
    </div>
  )
}


export default App