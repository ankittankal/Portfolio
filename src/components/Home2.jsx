import React from 'react'
import TypeWrite from './TypeWrite'
import '../index.css';

const Home = () => {
  return (
    <section id="Home" className='grid grid-cols-12 bg-gray-900 pl-10 md:pt-20 md:pl-36 text-white'>
      <div className=' col-span-6 flex justify-between pt-20'>
        <div>
          <p className='text-2xl'>Hi there!</p>
          <p className='text-6xl p-2'>I'm <span className='text-orange-700  text-center md:p-2'>Ankit</span></p>

          <TypeWrite/>

          <p className='text-2xl text-gray-400 py-2'>I have a passion for Engineering!</p>

          <div className='flex py-8'>
            <div className='relative mx-5'>
                <div className='absolute -inset-0.5 bg-gradient-to-r from-orange-700 to-purple-600 rounded-lg blur opacity-75 '>
                </div> 
                  <button className='relative bg-orange-700 rounded-lg items-center px-2 py-4 md:px-6 text-xl'>
                  <a href="mailto:ankittankal@gmail.com?body=My custom mail body">Email Me</a>
                    </button>
            </div>

            <div className='relative mx-5'>
                <div className='absolute -inset-0.5 bg-gradient-to-r from-orange-700 to-purple-600 rounded-lg blur opacity-75'>
                </div> 
                  <button className='relative bg-gray-900 rounded-lg items-center px-2 py-4 md:px-6 text-xl'>

                    <i class="fa fa-download text-white px-2" aria-hidden="true"></i>
                    <a href='/Ankit_Resume__ latest.pdf' download>Resume</a>
                    </button>
            </div>
          </div>
          
        </div>
      </div>

      <div className='hidden xl:block  col-span-6 h-auto max-w-sm'>
          <img src="\Avatar3.png" alt="" />
      </div>
    </section>
  )
}

export default Home
