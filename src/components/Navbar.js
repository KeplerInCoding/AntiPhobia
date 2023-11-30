import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../assets/AntiPhobia.png";

const Navbar = () => {
  return (
    <div className='absolute top-0 z-40 w-screen'>
<div className='flex h-24 place-content-evenly gap-52 items-center py-2  bg-gradient-to-t from-slate-100/5 to-blue-400 backdrop-blur-sm'>
<div>
      <Link to="/"><img className=' z-50 absolute top-[-30px] h-32' src={logo}  alt="logo" loading="lazy"></img></Link>
      
    </div>
    <nav>
      <ul className='flex flex-wrap place-content-evenly gap-10 text-blue-900 text-2xl font-mono font-extrabold pl-10 '>
        <li>
          <NavLink className="hover:text-blue-800" exact activeClassName="active" to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink className="hover:text-blue-800" activeClassName="active" to='/phobias'>Phobias</NavLink>
        </li>
        <li>
          <NavLink className="hover:text-blue-800" activeClassName="active" to='/explore'>Explore</NavLink>
        </li>
        <li>
          <NavLink className="hover:text-blue-800" activeClassName="active" to='/chatbot'>ChatBot</NavLink>
        </li>
      </ul>
    </nav>

    

    
  </div>

    </div>
    
  )
}

export default Navbar