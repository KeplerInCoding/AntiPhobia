import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../assets/main_logo.png";

const Navbar = () => {
  return (
    <div className='flex place-content-between items-center p-16 py-2 bg-gradient-to-r from-black to-slate-500'>
    <div>
      <Link to="/"><img className='h-16 mt-2' src={logo} alt="logo" loading="lazy"></img></Link>
      
    </div>
    <nav>
      <ul className='flex gap-4 text-white'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/phobias'>Phobias</NavLink>
        </li>
        <li>
          <NavLink to='/explore'>Explore</NavLink>
        </li>
        <li>
          <NavLink to='/chatbot'>ChatBot</NavLink>
        </li>
      </ul>
    </nav>

    
  </div>
  )
}

export default Navbar