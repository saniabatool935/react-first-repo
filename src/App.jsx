import { useState } from 'react'

import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'


function App() {

  return (
    <div className='flex'>
     <div className="sidebar w-30 h-[100dvh] bg-amber-800 text-white">
      <h1>sidebar</h1>
     </div>
   <div className='flex-1'>
     <Header/>
     <Outlet/>  
   </div>
    </div>
  )
}

export default App
