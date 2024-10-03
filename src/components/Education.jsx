import React from "react";
import { FaSchool, FaGraduationCap } from 'react-icons/fa';

const Education = () =>{
    return (
        <div className='mt-24 animate-rightToLeft'>
        <h1 className='text-blue-200 text-6xl text-center'>MY EDUCATION</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 pb-24 px-16'>
          <div className='border-2 border-blue-950 bg-blue-950 rounded-3xl p-8 transition ease-in-out delay-150 hover:border-blue-900 hover:-translate-y-1 hover:scale-110 duration-500'>
            <h1 className='text-blue-400 text-2xl text-center'><FaSchool className='text-5xl text-blue-200 animate-bounceX' /> MATRICULATION</h1>
            <h1 className='text-blue-200 text-3xl text-center py-4'>DHA SENIOR SCHOOL FOR BOYS</h1>
          </div>
          <div className='border-2 border-blue-950 bg-blue-950 rounded-3xl p-8 transition ease-in-out delay-150 hover:border-blue-900 hover:-translate-y-1 hover:scale-110 duration-500'>
            <h1 className='text-blue-400 text-2xl text-center'><FaSchool className='text-5xl text-blue-200 animate-bounceX' /> INTERMEDIATE</h1>
            <h1 className='text-blue-200 text-3xl text-center py-4'>KIPS COLLEGE</h1>
          </div>
          <div className='border-2 border-blue-950 bg-blue-950 rounded-3xl p-8 transition ease-in-out delay-150 hover:border-blue-900 hover:-translate-y-1 hover:scale-105 duration-500'>
            <h1 className='text-blue-400 text-2xl text-center'><FaGraduationCap className='text-5xl text-blue-200 animate-bounceX' /> BACHELORS</h1>
            <h1 className='text-blue-200 text-3xl text-center py-4'>UNIVERSITY OF MANAGEMENT AND TECHNOLOGY</h1>
          </div>
        </div>
      </div>
    )
}

export default Education