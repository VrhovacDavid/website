import React, { useEffect, useRef } from 'react';

export default function Example() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((error) => {
        console.error('Error attempting to play', error);
      });
    }
  }, []);

  return (
    <div className="z-10 relative isolate overflow-hidden bg-transparent">
      <div className="mx-auto max-w-7xl px-6 lg:pt-10 py-4 lg:flex lg:px-8 lg:py10">
        <div className="mx-auto max-w-4xl lg:max-w-xl lg:mx-0 lg:flex-shrink-0 lg:pt-8">
          <div className="mt-8 sm:mt-16 lg:mt-16">
            <div className="inline-flex space-x-2 bg-indigo-600/10 p-2.5 rounded-lg max-w-lg">
              <div className='flex flex-col content-center justify-center align-middle'>
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-600/80 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-600"></span>
                </span>
              </div>
              <span className="text-xs font-semibold text-indigo-600">
                Wenig Plätze verfügbar
              </span>
            </div>
          </div>
          <h1 className="mt-2 text-5xl sm:text-6xl font-bold tracking-tight text-gray-900">
            Die neue Generation des Design's
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Wir bieten dir eine riesige Auswahl an Grafik Design, Programmierungen, Webdesign Service und mehr an, für eine monatliche Gebühr die du jederzeit pausieren oder kündigen kannst.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Jetzt Starten
            </a>
            <a href="#" className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100">
              Mehr erfahren <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex lg:max-w-4xl max-w-4xl lg:flex-none xl:ml-32">
          <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <video
              ref={videoRef}
              src="/HeroVideoLong.mp4"
              width={2432}
              height={1442}
              controls
              autoPlay
              loop
              muted
              className="w-[86rem] lg:h-[32rem] lg:object-cover rounded-md shadow-2xl ring-1 ring-gray-900/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
