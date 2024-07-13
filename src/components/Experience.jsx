import React from 'react'
import Jobs from './Jobs'

export default function Experience() {

  const job = [
    {
      _id: '1',
      url: 'https://www.tcs.com/',
      logo: '/tcs.jpg',
      name: 'Tata Consultancy Services',
      jobTitle: 'Associate System Engineer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate nesciunt nostrum corrupti possimus accusantium deleniti quasi, praesentium alias autem natus nisi facere aliquam pariatur',
    },
    {
      _id: '2',
      url: 'https://saltside.se/',
      logo: '/saltside.webp',
      name: 'Saltside Technologies ',
      jobTitle: 'Software Engineer Intern',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate nesciunt nostrum corrupti possimus accusantium deleniti quasi, praesentium alias autem natus nisi facere aliquam pariatur, consectetur odit? Odit natus laborum quam. ',
    },
  ];

  return (
    <section id="Experience" className='bg-gray-900 pb-28 '>

      <div className="mb-16 flex justify-center">
          <h2 className="font-incognito text-4xl mb-4 font-semibold tracking-tight text-white">
            Work <span className='text-orange-700'>Experience</span>
          </h2>
      </div>

      <Jobs job = {job}></Jobs>
    </section>
  )
}


