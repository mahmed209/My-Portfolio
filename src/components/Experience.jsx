import React from 'react';
import Project from '../assets/img/project.png';
import Product from '../assets/img/product.png';
import Client from '../assets/img/client.png';

const Experience = () =>{
    return(
        <div className='mt-12 bg-blue-200 py-12 animate-topToBottom'>
          <h1 className='text-blue-950 text-5xl text-center font-semibold'>PROFESSIONAL EXPERIENCE</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-16'>
            <div className='animate-bounceX'>
              <img src={Project} className='w-68 h-72 mx-auto'></img>
              <h1 className='text-blue-950 text-2xl font-bold text-center'>PROJECTS COMPLETE</h1>
              <h2 className='text-blue-500 text-3xl text-center p-2 font-bold'>100+</h2>
            </div>
            <div className='animate-bounceX'>
              <img src={Product} className='w-68 h-72 mx-auto'></img>
              <h1 className='text-blue-950 text-2xl text-center font-bold'>PRODUCTS</h1>
              <h2 className='text-blue-500 text-3xl text-center p-2 font-bold'>10+</h2>
            </div>
            <div className='animate-bounceX'>
              <img src={Client} className='w-68 h-72 mx-auto'></img>
              <h1 className='text-blue-950 text-2xl font-bold text-center'>HAPPY CLIENTS</h1>
              <h2 className='text-blue-500 text-3xl text-center p-2 font-bold'>100+</h2>
            </div>
          </div>
        </div>
    )
}
export default Experience