import React from 'react'
import { Route, Routes } from 'react-router-dom'

import BerandaPage from '../pages/BerandaPage'
import ContactPage from '../pages/ContactPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={BerandaPage} />
        <Route path='/contact' Component={ContactPage} />
      </Routes>
    </div>
  )
}

export default App