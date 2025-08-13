import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header-section shadow p-4'>
      <div className="container flex justify-between items-center ">
        <h1>logo</h1>
        <ul className='flex gap-3'>
            <li>
                <NavLink to={'/'} className={({ isActive })=> isActive ? "text-red-400":"text-gray-400"}> Home</NavLink>
            </li>
            <li>
                <NavLink to='/about' className={({ isActive })=> isActive ? "text-red-400":"text-gray-400"}> About</NavLink>
            </li>
            <li>
                <NavLink to='/contact' className={({ isActive })=> isActive ? "text-red-400":"text-gray-400"}> Contact</NavLink>
            </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
