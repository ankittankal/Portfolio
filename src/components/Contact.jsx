import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0glwx0m', 'template_ihy6dwi', form.current, {
        publicKey: 'XB1fscPPHCiFD1eJU',
      })
      .then(
        () => {
          alert('Message sent successfully!');
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact" className='pb-20 sm:pb-28  bg-gray-900 text-center'>
        <h5 className='text-4xl  text-blue-500 pb-4'>Contact <span className='text-orange-700'>Me</span></h5>
        
        <p className='tracking-tight dark:text-zinc-400 text-zinc-600'>Please contact me directly at <a 
        className='underline'
        href="mailto:ankittankal@gmail.com">ankittankal@gmail.com</a> or through this form. </p>

        <form ref={form} onSubmit={sendEmail} className='mt-10 flex flex-col px-4 text-center items-center '>          
            <input 
              className='px-4 h-14 w-[100%] md:w-[38rem] rounded-lg border border-gray-600 bg-black  text-white  p-4'
              type="email" 
              name='reply_to'
              required
              maxLength={500}
              placeholder = "Your email"
            />
            <textarea 
              className='h-52 my-3 w-[100%] md:w-[38rem] rounded-lg border border-gray-600 bg-black  text-white p-4' 
              name='message'
              required
              maxLength={500}
              placeholder= "Your message"/>
            <button type='submit' className='group h-[3rem] w-[8rem] 
                bg-blue-500 text-white rounded-full outline-none
                transition-all
                focus:scale-110 hover:scale-110 active:scale-105
                hover:bg-blue-600 mt-4
                '>
                Submit
                <i className ="fa-solid fa-paper-plane pl-2 text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 "></i>    
            </button>
        </form>
    </section>
  )
}
