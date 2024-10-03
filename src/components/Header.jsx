import React from 'react';
import Ahmedimg from '../assets/img/ahmed-img2.png';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './header.css';

const Header = () => {
  return (
    <div className="header-section mt-12 rounded-3xl shadow-lg shadow-sky-300/40 animate-rightToLeft">
      <section className=" bg-opacity-30 py-4 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto  max-w-7xl sm:px-6 lg:px-8">
          <div className='flex justify-center sm:justify-center items-center pb-8 w-full divide-x divide-dashed divide-4 divide-blue-200 text-blue-200 text-3xl sm:text-4xl lg:text-6xl gap-6 sm:gap-8 lg:gap-12 p-2'>
            <FaFacebook className='hover:text-blue-500 pl-4 sm:pl-6 lg:pl-8 transition duration-300 ease-in-out transform hover:scale-110' />
            <FaInstagram className='hover:text-blue-500 pl-4 sm:pl-6 lg:pl-8 transition duration-300 ease-in-out transform hover:scale-110' />
            <FaLinkedin className='hover:text-blue-500 pl-4 sm:pl-6 lg:pl-8 transition duration-300 ease-in-out transform hover:scale-110' />
            <FaTwitter className='hover:text-blue-500 pl-4 sm:pl-6 lg:pl-8 transition duration-300 ease-in-out transform hover:scale-110 mr-0 sm:mr-16 lg:mr-24' />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            <div className='mt-12 sm:mt-24 col-span-2'>
              <h1 className='p-2 sm:p-4 text-3xl sm:text-5xl text-blue-200 font-semibold'>I am</h1>
              <h1 className='p-2 sm:p-4 text-4xl sm:text-7xl text-blue-200 font-bold'>Muhammad Ahmed</h1>
              <h1 className='p-2 sm:p-4 text-3xl sm:text-5xl text-blue-200 font-bold'>A FULL STACK</h1>
              <h1 className='p-2 sm:p-4 text-4xl sm:text-6xl text-blue-200 font-bold'>WEB DEVELOPER</h1>
            </div>
            <div>
              <img className="w-full rounded-3xl ml-28 md-ml-auto sm-ml-auto" src={Ahmedimg} alt="Muhammad Ahmed" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
