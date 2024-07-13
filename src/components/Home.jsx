import React from 'react'
import TypeWrite from './TypeWrite'
import '../index.css';

const Home = () => {
  return (
    <section id="Home" className='bg-gray-900 pt-20 pl-36 text-white'>
      <div>

      <div className='flex justify-between pt-20'>
        <div>
          <p className='text-2xl'>Hi there!</p>
          <p className='text-6xl p-2'>I'm <span className='text-orange-700 p-2'>Ankit</span></p>

          <TypeWrite/>

          <p className='text-2xl text-gray-400 py-2'>I have a passion for Engineering!</p>

                  <div className='flex py-8'>

          <div className='relative mx-5'>
              <div className='absolute -inset-0.5 bg-gradient-to-r from-orange-700 to-purple-600 rounded-lg blur opacity-75'>
              </div> 
                <button className='relative bg-orange-700 rounded-lg items-center px-6 py-4 text-xl'>
                  
                  Email Me</button>
          </div>

          <div className='relative mx-5'>
              <div className='absolute -inset-0.5 bg-gradient-to-r from-orange-700 to-purple-600 rounded-lg blur opacity-75'>
              </div> 
                <button className='relative bg-gray-900 rounded-lg items-center px-6 py-4 text-xl'>

                  <i class="fa fa-download text-white px-2" aria-hidden="true"></i>
                  Resume</button>
          </div>

        </div>
          
        </div>
        
        <div className='h-auto max-w-sm  mt-[-60px] mr-[300px]'>
          <img src="src\assets\Avatar3.png" alt="" />
        </div>
      </div>

        {/* <div className='flex py-8'>

          <div className='relative mx-5'>
              <div className='absolute -inset-0.5 bg-gradient-to-r from-orange-700 to-purple-600 rounded-lg blur opacity-75'>
              </div> 
                <button className='relative bg-orange-700 rounded-lg items-center px-6 py-4 text-xl'>
                  
                  Email Me</button>
          </div>

          <div className='relative mx-5'>
              <div className='absolute -inset-0.5 bg-gradient-to-r from-orange-700 to-purple-600 rounded-lg blur opacity-75'>
              </div> 
                <button className='relative bg-gray-900 rounded-lg items-center px-6 py-4 text-xl'>

                  <i class="fa fa-download text-white px-2" aria-hidden="true"></i>
                  Resume</button>
          </div>

        </div> */}
      </div>

    </section>
  )
}

export default Home
