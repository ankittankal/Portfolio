import React from 'react'
import 'font-awesome/css/font-awesome.min.css';

const Project = ({name , discription, ImageUrl, github, LiveUrl}) => {
  return (
    <div className='m-10'>
        <div className="max-w-lg rounded-lg shadow bg-gray-800 border-gray-700">
            <a href="#">
                <img className="rounded-t-lg w-[100%] h-auto " src={ImageUrl} alt="" />
            </a>
    
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-400 pb-5">{discription}</p>
    
                <hr class="border-gray-700" />
                <div className='flex justify-around pt-6'>
                    <a 
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className='flex'>
                            <div className='hidden sm:block'>
                            <i className="fa-brands fa-github text-3xl text-white hover:text-blue-500"></i></div>
                            <p className=' dark:text-gray-400 pl-3 hover:text-orange-700 '> github</p>
                        </div>
                    </a>
    
                    <a 
                        href={LiveUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className='flex text-3xl'>
                            <div className='hidden sm:block'>
                            <i className="hidden md:block fa fa-eye text-white hover:text-blue-500"></i></div>
                            <p className=' dark:text-gray-400 pl-3 text-lg hover:text-orange-700 '> Live Preview</p>
                        </div>
                    </a>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default Project
