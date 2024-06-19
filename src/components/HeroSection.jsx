import React from 'react';

export default function Example() {




  return (
    <div className="z-10 relative isolate overflow-hidden bg-transparent">
      <div className="mx-auto max-w-7xl px-6 lg:pt-10 py-4 lg:flex lg:px-8 lg:py-10">
        <div className="mx-auto max-w-4xl lg:max-w-xl lg:mx-0 lg:flex-shrink-0 lg:pt-8">
          <div className=" sm:mt-16 lg:mt-16">
            <div className="inline-flex space-x-2 bg-indigo-600/10 p-2.5 rounded-lg max-w-lg">
              <div className="flex flex-col content-center justify-center align-middle">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-600"></span>
                </span>
              </div>
              <span className="text-small font-semibold text-indigo-600 ">
                3 Plätze verfügbar
              </span>
            </div>
          </div>
          <h1 className="mt-2 text-h1 leading-10 sm:text-6xl font-bold tracking-tight text-gray-900 pt-2">
            Die neue Generation des Grafik Design
          </h1>
          <p className="mt-6 text-base sm:text-sup text-gray-600">Wir bieten dir über 80 Dienstleistungen im Bereich Grafikdesign, Webdesign, Programmierungen und mehr, für eine monatliche Gebühr, die du jederzeit pausieren oder kündigen kannst. So musst du nie wieder zu einer anderen Agentur wechseln – alles ist an einem Platz!

          </p>
          <div className="mt-8 flex items-center gap-x-6">
            <a
              href="#pricing"
              className="rounded-md bg-indigo-500 border-2 border-indigo-500 px-3.5 py-2.5 text-small font-semibold text-white shadow-sm "
            >
              Jetzt Starten
            </a>
            <a href="#prozess" className=" rounded-md  px-3.5 py-2.5 text-small font-semibold text-indigo-500 border-2 border-indigo-500 ">
              Mehr erfahren <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex lg:max-w-4xl lg:flex-none xl:ml-32">
          <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4" >

            <video

              src="/HeroVideoLong.webm"




              width={2432}
              height={1442}
              controls
              autoPlay
              
              loop



              className="w-[86rem] lg:h-[32rem] lg:object-cover rounded-md shadow-2xl ring-1 ring-gray-900/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
/*   <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"  dangerouslySetInnerHTML={{ __html: `
        <video
          loop
          muted
          autoPlay
          playsinline
          src="/HeroVideoLong.webm" 
          className = "w-[86rem] lg:h-[32rem] lg:object-cover rounded-md shadow-2xl ring-1 ring-gray-900/10"
       
        />,
      ` }}></div>*/