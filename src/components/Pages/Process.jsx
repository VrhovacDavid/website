import React, { useState, useRef, useEffect } from 'react';

import Header from '../Header';
import Footer from '../Footer';
import { motion, useScroll, useSpring } from "framer-motion";

const features = [
  // deine features
];

const features1 = [
  // deine features1
];

const LazyVideo = ({ src, alt, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={isVisible ? src : undefined}
      alt={alt}
      {...props}
    />
  );
};

const Process = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <div className='pattern-bg'>
      <motion.div className="fixed z-10 top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-fuchsia-400 to-sky-400 origin-left" style={{ scaleX }} />
      <Header />

      <div className="overflow-hidden bg-transparent py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="text-small font-semibold text-indigo-600">Schritt 1</p>
                <h3 className="mt-2 text-h3 font-bold tracking-tight text-gray-900 leading-10 ">Ein einfacher Start, der alles verändert</h3>
                <p className="mt-6 text-base sm:text-sup  text-gray-600">
                  Im ersten schritt, wählst du einen Plan, der zu dir passt, und schon bist du bereit, die Grenzen deiner Kreativität neu zu definieren. Dies ist der Moment, in dem alles beginnt – mit nur einem Klick.
                </p>
                <div className='my-8'>
                <a
                  href='/#pricing'
                  className="rounded-md bg-indigo-50  px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100" 
                >
                  Plan auswählen
                </a>
                </div>
               
                <dl className="mt-10 max-w-4xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-12">
                      <dt className="inline font-semibold text-gray-900">
                        <img className='absolute left-1 h-10 w-10' src={feature.icon} alt={feature.name} />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <LazyVideo
              src="/Step1.mp4"
              alt="Schritt 1"
              className="w-full md:w-[48rem] md:max-w-4xl rounded-xl shadow-xl ring-1 ring-gray-400/10 mx-auto"
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      </div>

      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div className="lg:ml-auto lg:pl-4 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="text-small font-semibold  text-indigo-600">Schritt 2</p>
                <h3 className="mt-2 text-h3 font-bold tracking-tight text-gray-900 leading-10 ">Sichere und flexible Zahlungsabwicklung</h3>
                <p className="mt-6 text-base sm:text-sup text-gray-600">
                  Deine finanzielle Sicherheit ist uns ebenso wichtig wie deine kreative Zufriedenheit. Mit Stripe garantieren wir eine sichere und reibungslose Zahlungsabwicklung, die dir volle Kontrolle und Freiheit bietet. Hier kannst du ohne Sorgen investieren, denn deine Sicherheit und Flexibilität stehen an erster Stelle. Im Kundenportal, kannst du dein Abo ändern, pausieren oder kündigen und das jederzeit.
                </p>
                <div className='my-8'>
                <a
                  href='https://billing.stripe.com/p/login/28oaHy9m414Bfgk288'
                  className="rounded-md bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
                >
                  Kundenportal
                </a>
                </div>
               
              </div>
            </div>
            <div className="flex items-start justify-center lg:order-first">
              <img
                loading="lazy"
                src="/CreditCard.svg"
                alt="Product screenshot"
                className="w-[24rem] md:max-w-none rounded-xl ring-gray-400/10"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="text-small font-semibold  text-indigo-600">Schritt 3</p>
                <h3 className="mt-2 text-h3 font-bold tracking-tight text-gray-900 leading-10 ">Dein Design-Briefing – ein Dialog, der inspiriert</h3>
                <p className="mt-6 text-base sm:text-sup  text-gray-600">
                 
In diesem Schritt teilst du uns deine kreativen Visionen und spezifischen Anforderungen mit. Über unser benutzerfreundliches Trello-Board kannst du deine Ideen, Wünsche und Inspirationen klar und detailliert mitteilen. Dieser Dialog ist entscheidend, um sicherzustellen, dass unsere Designer dein Konzept vollständig verstehen und umsetzen können. Mit jedem Detail, das du hinzufügst, helfen wir dir, deine Vorstellungen in die Realität umzusetzen.
                </p>

                <dl className="mt-10 max-w-4xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features1.map((feature) => (
                    <div key={feature.name} className="relative pl-12">
                      <dt className="inline font-semibold text-gray-900">
                        <img className='absolute left-1 h-10 w-10' src={feature.icon} alt={feature.name} />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
                <a
                  href='/#pricing'
                  className="rounded-md bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
                >
                 Jetzt Starten
                </a>
              </div>
            </div>
            <LazyVideo
            playsInline
              src="/Step3.mp4"
              alt="Schritt 3"
              className="w-full md:w-[48rem] md:max-w-4xl rounded-xl shadow-xl ring-1 ring-gray-400/10 mx-auto"
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      </div>

      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div className="lg:ml-auto lg:pl-4 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="text-small font-semibold  text-indigo-600">Schritt 4</p>
                <h3 className="mt-2 text-h3 font-bold tracking-tight leading-10 text-gray-900">Kreative Entfaltung in Echtzeit</h3>
                <p className="mt-6 text-base sm:text-sup text-gray-600">
                  Unsere talentierten Designer nehmen deine Inspiration und formen daraus etwas Magisches. Innerhalb von 24-48 Stunden beginnt deine Idee, Gestalt anzunehmen – eine schnelle Transformation, die dennoch tief auf deine persönlichen Anforderungen eingeht.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center lg:items-start lg:justify-end lg:order-first">
              <LazyVideo
              playsInline
                src="/Step4.mp4"
                alt="Schritt 4"
                className="w-full md:w-[48rem] md:max-w-4xl rounded-xl shadow-xl ring-1 ring-gray-400/10 mx-auto"
                autoPlay
                loop
                muted
              />
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="text-small font-semibold  text-indigo-600">Schritt 5</p>
                <h3 className="mt-2 text-h3 font-bold tracking-tight text-gray-900 leading-10 ">Deine Design-Vorschau – Du hast das letzte Wort</h3>
                <p className="mt-6 text-base sm:text-sup text-gray-600">
                  Die erste Vorschau deines Designs erreicht dich schnell und ermöglicht es dir, Änderungen vorzuschlagen, die wir gerne umsetzen. Deine vollständige Zufriedenheit ist unser Endziel, und wir sind nicht fertig, bis dein Design genau so ist, wie du es dir vorgestellt hast.
                </p>
              </div>
            </div>
            <LazyVideo
            playsInline
              src="/Step5.mp4"
              alt="Schritt 5"
              className="w-full md:w-[48rem] md:max-w-4xl rounded-xl shadow-xl ring-1 ring-gray-400/10 mx-auto"
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      </div>

      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div className="lg:ml-auto lg:pl-4 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="text-small font-semibold  text-indigo-600">Schritt 6</p>
                <h3 className="mt-2 text-h3 font-bold tracking-tight text-gray-900 leading-10">Vollendung und neue Möglichkeiten</h3>
                <p className="mt-6 text-base sm:text-sup text-gray-600">
                  Mit jedem abgeschlossenen Design öffnet sich ein neues Kapitel für deine Projekte. Die Dateien gehören dir – eine Sammlung von Werken wird grösser. Und wenn du bereit für mehr bist, steht die nächste Seite deiner kreativen Reise schon bereit. Du hast die möglichkeit in einem Monat so viele Design's wie du möchtest erstellen zu lassen. Du kannst auch mehrer Design's in die Warteschlange stecken und wir erledigen sie nach und nach. Bereit deine Reise zu Starten?
                </p>
                <div className='my-4'>
                <a
                  href='/#pricing'
                  className="rounded-md bg-indigo-50  px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100" 
                >
                 Jetzt Starten
                </a>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center lg:items-start lg:justify-end lg:order-first">
              <LazyVideo
              playsInline
                src="/Step6.mp4"
                alt="Schritt 6"
                className="w-full md:w-[48rem] md:max-w-4xl rounded-xl shadow-xl ring-1 ring-gray-400/10 mx-auto"
                autoPlay
                loop
                muted
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Process;
