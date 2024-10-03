import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png';
import './navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav className="bg-blue-200 flex items-center justify-between w-full h-16 lg:h-auto shadow-outter rounded-ee-full shadow-lg shadow-sky-300/40 animate-topToBottom">
        <div className=''>
          <img src={Logo} className='w-32 mx-24 h-auto'></img>
        </div>
        <div className="flex w-full items-center justify-between p-4 lg:px-16 ">
          <ul className="flex space-x-4 lg:space-x-16 text-base md:text-lg lg:text-xl text-center mx-auto">
            <li className="text-black text-xl lg:text-2xl">
              <Link className="hover:text-blue-500 font-semibold" to="/">Home</Link>
            </li>
            <li className="text-black text-xl lg:text-2xl">
              <Link to="/about" className="hover:text-blue-500 font-semibold">About</Link>
            </li>
            <li className="text-black text-xl lg:text-2xl">
              <Link className="hover:text-blue-500 font-semibold" to="/services">Services</Link>
            </li>
            <li className="text-black text-xl lg:text-2xl">
              <Link className="hover:text-blue-500 font-semibold" to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="ml-auto">
            <button className="px-4 py-2 mr-4 lg:mr-12 text-md lg:text-lg border-blue-900 rounded-lg bg-blue-900 text-white shadow-2xl shadow-blue-900/70 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500">
              Hire Me
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
