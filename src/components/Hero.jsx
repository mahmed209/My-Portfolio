import React from "react";
import Ahmedimg from '../assets/img/ahmed-img1.png';

const Hero = () => {
  return (
    <div className="header-section-2 w-full pt-12 mb-0 mt-12 rounded-3xl px-4 sm:px-8 lg:px-12">
      <div className='flex flex-col lg:flex-row items-center lg:items-start'>
        <img
          src={Ahmedimg}
          className='w-3/12 lg:w-3/12 md:w-2/12 sm-w-1/12 h-auto rounded-3xl pb-8 lg:pb-24 lg:ml-12'
          alt="Introduction Image"
        />
        <div className='p-2 lg:ml-12 mt-8 lg:mt-24 w-full lg:w-auto'>
          <h1 className='text-center lg:text-left text-4xl sm:text-5xl lg:text-6xl text-blue-200 mt-6 lg:mt-12'>
            INTRODUCTION
          </h1>
          <p className='text-center w-auto lg:text-left text-lg sm:text-xl lg:text-2xl text-blue-200 mt-6 lg:mt-12 lg:pr-2'>
            As a full-stack developer with a BS in Computer Science, I possess a solid foundation in both front-end and back-end development, enabling me to create dynamic and scalable web applications. My expertise spans a wide range of technologies, from crafting intuitive user interfaces to managing complex server-side logic and database interactions. I am passionate about solving problems through code, continuously learning new technologies, and applying best practices to deliver high-quality software solutions that meet modern industry standards.
          </p>
        </div>
        
      </div>
    </div>
  )
}

export default Hero;
