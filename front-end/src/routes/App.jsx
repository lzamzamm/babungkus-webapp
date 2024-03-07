import React from 'react'
import { Route, Routes } from 'react-router-dom'

import BerandaPage from '../pages/BerandaPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={BerandaPage} />
      </Routes>
    </div>
  )
}

export default App
