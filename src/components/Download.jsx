import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Download() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hhs1k3s', 'template_28oclks', form.current, {
        publicKey: 'g9YwDHgxktt14tVn_',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

         
  };
  return (
    <div className="bg-transparent  " id='downloads'>
      <div className="mx-auto max-w-4xl lg:max-w-7xl py-24 md:px-0 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-darkBlue px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-4xl lg:max-w-md text-start lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
             Gratis TillTech Icon Pack
              <br />
              +1500 Icons
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            A collection of funky vectorized scribbbles to spice up your design projects.
            </p>
            <form ref={form} onSubmit={sendEmail}>
   <div className="mt-6 flex max-w-md gap-x-4">
   <input className='min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6' type="email" name="user_email" placeholder='Gib deine E-Mail Adresse ein' />
   
   
   <input className='className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"' type="submit" value="Download" />
   </div>
     
    </form>
           
            <p className="mt-6 text-sm leading-8 text-gray-300">
           
            Von über 80'000 Designern und Top-Marken benutzt.
            </p>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  )
}


