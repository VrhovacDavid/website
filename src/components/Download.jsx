import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Download() {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hhs1k3s', 'template_28oclks', form.current, 'g9YwDHgxktt14tVn_')
      .then(
        () => {
          setMessage('E-Mail versendet! Überprüfe gegebenenfalls deinen Spam Ordner.');
          setIsError(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMessage('Fehler beim Senden der E-Mail.');
          setIsError(true);
        },
      );
  };

  return (
    <div className="bg-transparent" id='downloads'>
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
            <h3 className="text-h3 font-bold tracking-tight text-white leading-10">
              Gratis TillTech Icon Pack
              <br />
              +200 Icons
            </h3>
            <p className="mt-6 text-base text-gray-300">
              Eine Kollektion von +200 Icons in Vector und SVG Formaten
            </p>
            <form ref={form} onSubmit={sendEmail}>
              <div className="mt-6 flex max-w-md gap-x-4">
                <input
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  type="email"
                  name="user_email"
                  placeholder="Gib deine E-Mail Adresse ein"
                  required
                />
                <input
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-small font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  type="submit"
                  value="Download"
                />
              </div>
            </form>
            {message && (
              <p className={`mt-4 text-small ${isError ? 'text-red-500' : 'text-green-500'}`}>
                {message}
              </p>
            )}
            <p className="mt-6 text-small text-gray-300">
              Von über 80'000 Designern und Top-Marken benutzt.
            </p>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              loading="lazy"
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="/Icons.svg"
              alt="IconPack"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
