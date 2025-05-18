import React from 'react'
// import Navbar from './components/Navbar'
// import LandingSec from './components/home/LandingSec'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'

const App = () => {
  return (
    <div className='w-full '
    style={{
      scrollbarWidth: '10px',
      scrollbarColor: '#6b7280 #1f2937'
    }}
    >
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
