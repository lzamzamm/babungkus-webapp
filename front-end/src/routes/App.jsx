import React from 'react'
import { Route, Routes } from 'react-router-dom'

import BerandaPage from '../pages/BerandaPage'
import ContactPage from '../pages/ContactPage'
import LoginPage from '../pages/LoginPage'
import RegisPage from '../pages/RegisPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' component={BerandaPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisPage} />
      </Routes>
    </div>
  )
}

export default App