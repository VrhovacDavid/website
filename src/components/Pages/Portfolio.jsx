import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const data = [
  {

    img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/496ac3183303651.653d36f34650c.png',
  },
  {
 
    img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/2c2410184441009.6552402114409.png',

  },
  {
  
    img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/a65865198492353.664257d7b0571.jpg',
  },
  {
 
    img: '/Portfolio/SFM.png',
  },
  {
   href:'/nike',
    img: '/Portfolio/Nike.png',
  },
  {

    img: '/Blend.svg',  },
  {
 
    img: 'https://cdn.dribbble.com/userupload/13682731/file/original-1fc1a9a9fe85e3b3d62ac0c7d5934273.png?resize=1024x1024',
  },
  {
 
    img: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/22fb07197329069.662ed830edcec.jpg',
  },
  {
   
    img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/244550197361593.662f83461160d.png',
  }
]

export default function Portfolio() {


  const boxStyle = ' relative overflow-hidden rounded-xl border-2 bg-neutral-100 p-2 flex flex-col items-center justify-center';




  return (
    <div className='pattern-bg'>
      <div className="overflow-hidden bg-transparent ">
        <Header />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative isolate px-6 pt-14 lg:px-8">

            <div className="mx-auto max-w-7xl pb-16 ">

              <div className="text-start">
                <h1 className=" text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Portfolio
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Das sind unsere neusten Arbeiten.            </p>
                <div className="mt-4 flex items-center justify-start gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>


          </div>

          <div className='grid md:grid-cols-4  auto-rows-[300px] gap-4 '>
            {data.map((item, i) => (
             
              <div key={i} className={`${boxStyle} 
                
                ${i === 0 || i === 4 || i === 7 || i === 8 ? 'md:col-span-2' : ''}
                ${i === 4 || i === 2 ? 'md:row-span-2' : ''}`}>
 <a href={item.href}>
                <img src={item.img} alt="Portfolio" className="absolute inset-0 w-full h-full object-cover" />
                </a>


              </div>
             
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
