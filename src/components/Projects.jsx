import React from 'react'
import Project from './Project';

const Projects = () => {
  return (
    <div className='bg-gray-900 pb-36'>
      <h5  className='text-3xl px-20 text-blue-500'>Projects</h5> 
      <div className='flex flex-wrap justify-center'>
        <Project 
            name = "CourseVista" 
            ImageUrl = "\CourseVista2.jpg"
            discription = "A comprehensive platform encompassing user‑side course viewing and an admin dashboard for course management"
            github="https://github.com/ankittankal/course-selling-website"
            LiveUrl="https://drive.google.com/file/d/1YOfrvC4VEoJisoKbrVcBv10WKGFceSMe/view"
        />

        <Project 
            name = "Portfolio" 
            ImageUrl = "\Portfolio.png"
            discription = "Developed a dynamic personal portfolio featuring seamless UI/UX and multiple sections."
            github=""
            LiveUrl=""
        />

        <Project 
            name = "Url Shortner" 
            ImageUrl = "\UrlShorter.jpg"
            discription = "It takes a long URL and makes it shorter . So , when the User clicks on shortened URL that redirects to the web page that has a long URL ."
            github="https://github.com/ankittankal/url-shortner"
            LiveUrl=""
        />
      </div>
    </div>
  )
}

export default Projects
