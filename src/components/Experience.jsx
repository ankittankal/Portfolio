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
      description: 'Designed and developed Kafka-based messaging systems and microservices architecture using Spring Boot, improving scalability and reliability. Implemented REST APIs with Java and Spring Boot.',
    },
    {
      _id: '2',
      url: 'https://saltside.se/',
      logo: '/saltside.webp',
      name: 'Saltside Technologies ',
      jobTitle: 'Software Engineer Intern',
      description: 'familiar with Agile methodologies and Git workflows. Gained familiarity with GRPC while actively working with the company’s codebase. Improved test case coverage ensuring higher code quality and reliability.',
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


