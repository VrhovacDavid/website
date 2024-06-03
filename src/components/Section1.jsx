import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const content = [
  {
    points: [
      {
        text: "Sag 'Auf Wiedersehen' zu unnötigen Meetings",
        description: "Hast du genug von endlosen Meetings? Wir auch. Deshalb haben wir den Meeting-Marathon komplett aus unserem Prozess gestrichen. Kommuniziere, wie es für dich passt, und behalte den Fokus auf das Wesentliche.",
        icon: '/icons/neu_meeting.svg',
      },
      {
        text: "Automatisierte Prozesse mit Trello",
        description: "Organisiere und überwache deine Designprojekte mühelos über Trello. Ob aktive, wartende oder abgeschlossene Aufgaben – alles ist übersichtlich und leicht zugänglich.",
        icon: '/icons/neu_trello.svg',
      },
      {
        text: "Zusammen nach vorne",
        description: "Du musst nicht mehr ständig neue Agenturen Suchen die dir deine Arbeit erledigt und überteuert ist, hier hast du über 100 Service's die du direkt brauchen kannst!",
        icon: '/icons/neu_teamwork.svg',
      }
    ],
    images: [
      '/trello.mp4',
      '/organize.mp4',
      '/teamwork.mp4',
    ],
    durations: [8, 6, 16] // Wartezeiten in Sekunden für die jeweiligen Videos
  }
];

const Section1 = () => {
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [highlightedPointIndex, setHighlightedPointIndex] = useState(0);
  const [currentDuration, setCurrentDuration] = useState(content[0].durations[0]);
  const videoRefs = useRef([]);

  // Handles the automatic cycling of points
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedPointIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % content[0].points.length;
        setCurrentDuration(content[0].durations[nextIndex]);
        return nextIndex;
      });
    }, currentDuration * 1000);

    return () => clearInterval(interval);
  }, [currentDuration]);

  // Manages video play/pause based on the highlighted point
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (index === highlightedPointIndex) {
        video.currentTime = 0;
        video.play();
      } else {
        video.pause();
      }
    });
  }, [highlightedPointIndex]);

  const handlePointClick = (index) => {
    setHighlightedPointIndex(index);
    setCurrentDuration(content[0].durations[index]);
  };

  return (
    <div className="overflow-hidden bg-transparent py-24 sm:py-32" id='prozess'>
      <div className="mx-auto max-w-4xl lg:max-w-7xl px-6 lg:px-8">
        <div className='max-w-7xl'>
          <p className="text-small font-semibold  text-indigo-600">"Einmal TillTech, immer TillTech" – besser geht's nicht.</p>
          <h3 className="mt-2 text-h3 font-bold tracking-tight text-gray-900 ">Für dich Optimiert</h3>
          <p className="mt-6 text-base sm:text-sup  text-gray-600">
            Wir revolutionieren das Design-Erlebnis, indem wir unzuverlässige Freelancer und kostspielige Agenturen durch eine transparente, monatliche Pauschalgebühr ersetzen. Unsere Designs kommen so schnell und sind so überzeugend, dass sie nicht nur deine Erwartungen erfüllen, sondern diese weit übertreffen.
          </p>

          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#pricing"
              className="rounded-md bg-indigo-500 border-2 border-indigo-500 px-3.5 py-2.5 text-small font-semibold text-white shadow-sm"
            >
              Jetzt Starten
            </a>
            <a href="/Process" className="rounded-md  px-3.5 py-2.5 text-small font-semibold text-indigo-500 border-2 border-indigo-500">
            Unser Prozess <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Left column with text */}
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <ul className="mt-10 max-w-xl space-y-8  text-black lg:max-w-none">
                {content[0].points.map((point, index) => (
                  <li key={index} className='cursor-pointer' onClick={() => handlePointClick(index)}>
                    <div className="flex items-center relative pl-12">
                      <img className='absolute left-1 h-10 w-10' src={point.icon} alt="Icon" />
                      <span className={`cursor-pointer ${index === highlightedPointIndex ? ' font-bold' : 'text-sup'} text-sup transition-all duration-300`}>{point.text}</span>
                    </div>
                    <p className="text-base text-gray-600 mt-4">{point.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column with videos */}
          <div>
            {content[0].images.map((image, index) => (
              <motion.video
                key={index}
                ref={(el) => (videoRefs.current[index] = el)}
playsInline

                src={image}
                className={`${index === highlightedPointIndex ? 'block' : 'hidden'} lg:object-cover rounded-md shadow-2xl ring-1 ring-gray-900/10`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                loop muted
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
