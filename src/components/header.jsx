import React from 'react'
import { NavLink, Link } from 'react-router-dom'


const Header = () => {
  return (
   <header className='bg-white shadow-sm px-8 py2 justify-center items-center'>
    <Link to="/">Redux Blog</Link>

    <ul className='flex'>
    <li>
        <Link to='/'>Home</Link>
    </li>
    <li>
        <Link to='/blog'>Blog</Link>
    </li>
    <li>
        <Link to='/add-post'>Add New</Link>
    </li>
    </ul>

   </header>
  )
}

export default Header