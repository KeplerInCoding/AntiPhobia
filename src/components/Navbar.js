import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../assets/main_logo.png";

const Navbar = () => {
  return (
    <div className='flex place-content-evenly items-center py-2 bg-gradient-to-b from-black to-orange-900'>
    <div>
      <Link to="/"><img className='h-16 w-64 mt-1' src={logo}  alt="logo" loading="lazy"></img></Link>
      
    </div>
    <nav>
      <ul className='flex flex-wrap place-content-evenly gap-10 text-white text-2xl font-mono font-semibold pl-10'>
        <li>
          <NavLink className="hover:text-red-900 hover:underline" to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink className="hover:text-red-900 hover:underline" to='/phobias'>Phobias</NavLink>
        </li>
        <li>
          <NavLink className="hover:text-red-900 hover:underline" to='/explore'>Explore</NavLink>
        </li>
        <li>
          <NavLink className="hover:text-red-900 hover:underline" to='/chatbot'>ChatBot</NavLink>
        </li>
      </ul>
    </nav>

    
  </div>
  )
}

export default Navbar