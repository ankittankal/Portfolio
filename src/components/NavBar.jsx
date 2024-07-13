import React from 'react'
import { useState } from 'react';


export default function NavBar() {


  const [isOpen, setUseOpen] = useState(false);

  const togleNavbar = () => {
    setUseOpen(!isOpen);
  }


  return (
    <>
    <div className='flex flex-row items-center  pt-4 md:pr-10 bg-gray-900 pb-10'>
      <div className='col-span-8 text-white pl-28 '>
        <img src="/logo.png" alt=""  className=' h-24 '/>
      </div>

      <div className='hidden ml-auto md:block col-span-4'>
        <ul className='flex font-bold text-white  text-xl'>
            <li className='px-3 hover:text-orange-700 text-orange-700'>
                <a href='#Home'>
                Home</a>                
            </li>
            <li className='px-3 hover:text-orange-700'>
                <a href='#Experience'>
                Work</a>
            </li>
            <li className='px-3 hover:text-orange-700'>
                <a href='#About'>
                About me</a>
            </li>
            <li className='px-3 hover:text-orange-700'>
                <a href='#contact'>
                Contact</a>
            </li>
        </ul>
      </div>

      
     <div className='col-span-4 ml-auto md:hidden text-right pr-10 text-2xl'>
        <button onClick={togleNavbar}>
          {isOpen ? <i className="fa-solid fa-x text-orange-700"></i> : <i className="fas fa-bars text-blue-500"></i>}
        </button>
     </div>


    </div>

    {isOpen && (
        <div className='text-center bg-gray-900 md:hidden'>
          <ul className='inline-block text-left font-bold text-white text-xl space-y-3'>
            <li className=' hover:text-orange-700 text-orange-700 '>
                <a href='#Home'>
                Home</a>                
            </li>
            <li className=' hover:text-orange-700 '>
                <a href='#Experience'>
                Work</a>
            </li>
            <li className=' hover:text-orange-700'>
                <a href='#About'>
                About me</a>
            </li>
            <li className=' hover:text-orange-700'>
                <a href='#Contact'>
                Contact</a>
            </li>
          </ul>
        </div>

     )}
 

    </>
  )
}
