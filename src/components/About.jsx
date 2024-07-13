import React from 'react'

export default function About() {
  return (
    <section id="About" className='grid grid-cols-12 pt-6 bg-gray-900 pb-20'>
      <h5 className="col-span-12 justify-self-center  text-3xl text-white">FIND ME ON</h5>
      <p className="col-span-12 justify-self-center text-white p-3">Feel free to <span className='text-red-500	'>connect</span> with me </p>
      <ul className="flex col-span-12 justify-self-center pt-5">
        <li className='px-2'>
            <div className='relative'>
                <div className='absolute -inset-0.5 bg-orange-700 rounded-lg blur opacity-75'>
                </div>
                <div className='relative flex bg-gray-900 h-[50px] w-[60px] justify-center items-center rounded-lg'>
                    <a
                    href="https://github.com/ankittankal"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                    >
                    <i className="fa-brands fa-github text-3xl text-white"></i>
                    </a>
                </div>
            </div>       
        </li>

        <li className='px-2'>
            <div className='relative'>
                <div className='absolute -inset-0.5 bg-orange-700 rounded-lg blur opacity-75'>
                </div>
                <div className='relative flex bg-gray-900 h-[50px] w-[60px] justify-center items-center rounded-lg'>
                    <a
                    href="https://www.linkedin.com/in/ankit-tankal-1139161a8/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                    >
                    <i class="fa-brands fa-linkedin-in text-3xl  text-white"></i>
                    </a>
                </div>
            </div>       
        </li>

        <li  className='px-2'>
            <div className='relative'>
                <div className='absolute -inset-0.5 bg-orange-700 rounded-lg blur opacity-75'>
                </div>
                <div className='relative flex bg-gray-900 h-[50px] w-[60px] justify-center items-center rounded-lg'>
                    <a
                    href="https://x.com/TankalAnkit"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                    >
                    <i class="fab fa-twitter text-3xl text-white"></i>
                    </a>
                </div>
            </div>       
        </li>
      </ul>
    </section>
  )
}

