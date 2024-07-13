import React from 'react'

const Introduction = () => {
  return (
    <div className=' pt-40 px-10  md:px-40 bg-gray-900 text-white pb-32 tracking-tight'>
      <p className='text-3xl'> Let Me <span className="text-orange-700"> Introduce </span> Myself </p><br/>

      <p className='text-2xl'>I love problem-solving and regularly tackle challenges on
          <span className='italic text-blue-500 pr-2'> LeetCode</span>
          <a 
            href="https://leetcode.com/u/ankittankal/"
            target="_blank"
            rel="noreferrer">
            <i class="fa-solid fa-arrow-up-right-from-square text-orange-700 px-3"></i>,
          </a>
          <span className='italic text-blue-500'> GeeksforGeeks</span> 
          <a 
            href="https://www.geeksforgeeks.org/user/ankittankal/"
            target="_blank"
            rel="noreferrer">
            <i class="fa-solid fa-arrow-up-right-from-square text-orange-700 px-3"></i>
          </a>
      </p><br/> 


      <p className='text-2xl'>I am also fluent in classics like  
             <span className='italic text-blue-500'> Java</span>, 
             <span className='italic text-blue-500'> Javascript</span> and basic
             <span className='italic text-blue-500'> Python</span> .
      </p><br/>

      <p className='text-2xl'>Whenever possible, 
        I also apply my passion for developing products <br/> with 
        <span className='italic text-blue-500'> SpringBoot Hibernate </span> and 
        Modern Javascript Library and Frameworks <br/>
        <span className='italic text-blue-500'> React.js</span> and
        <span className='italic text-blue-500'> Next.js</span>
      </p><br/>

    </div>
  )
}

export default Introduction
