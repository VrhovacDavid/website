import { useState, useEffect, useRef, useMemo } from "react";
import { motion } from 'framer-motion';
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
const tabs = [

  {
  
  "id": "Website",
  
  "label": "Grafik Design",
  
  "points": [
  
  "Logo Design",
  
  "Plakatdesign",
  
  "Wallpaper",
  
  "Visitenkarten",
  
  "Infografiken",
  
  "Illustrationen",
  
  "Poster",
  
  "Icon Design",
  
  "Werbeartikel",
  
  "Verpackungsdesign",
  
  ],
  
  "points2": [
  
  "3D-Modellierung",
  
  "Album Cover",
  
  "Buch Cover",
  
  "Game Design",
  
  "Digitale Produkte",
  
  "Typografie",
  
  "Merchandise"
  
  ],
  
  "image": "/GrafikDesign.mp4"
  
  },
  
  {
  
  "id": "Mobile Apps",
  
  "label": "Developement",
  
  "points": [
  
  "Webdesign",
  
  "App Entwicklung",
  
  "Software Entwicklung",
  
  "UI/UX-Design",
  
  "GUI-Design",
  
  "Datenvisualisierung",
  
  "Interaktive Medien",
  
  "Mobile Werbung",
  
  "SAAS",
  
  "Webbasierte Anwendungen",
  
  ],
  
  "points2": [
  
  "Webshop Entwicklung",
  
  "API",
  
  "Wartung und Support",
  
  "Sicherheitslösungen",
  
  "Datenbank Design",
  
  ],
  
  "image": "/Development.mp4"
  
  }, {
  
  "id": "Brand Aktuell 🔥",
  
  "label": "Content Creation",
  
  "points": [
  
  "Short Form Edits",
  
  "Long Form Edits",
  
  "Video Editing",
  
  "Animationen",
  
  "Foto Edit",
  
  "Fotoshooting",
  
  "Produktfotografie",
  
  "Thumbnails",
  
  "Twitch Banners",
  
  "Twitch Intro",
  
  ],
  
  "points2": [
  
  "Emote’s",
  
  "Sound Design",
  
  "Avatar",
  
  ],
  
  "image": "/ContentCreation.mp4"
  
  }, {
  
  "id": "Döner",
  
  "label": "Marketing",
  
  "points": [
  
  "Social Media Werbungen",
  
  "Corporate Identity",
  
  "Messestand Design",
  
  "Roll Up Banner",
  
  "Reklametafeln",
  
  "SEO",
  
  "Stationery",
  
  "Brand Guidelines",
  
  "Billboards",
  
  "Banner",
  
  ],
  
  "points2": [
  
  "Brand Strategy",
  
  "Broschüren",
  
  "Social Media Posts",
  
  "E-Mail’s",
  
  "Affiliate Marketing",
  
  "Marktforschung",
  
  "Präsentationen",
  
  ],
  
  "image": "https://img.freepik.com/free-psd/3d-holographic-fluid-shape-illustration_47987-7689.jpg?t=st=1712651251~exp=1712654851~hmac=2b89e2e82ca936f49b42e12b423dfdde172c56de28bb9d437ca3037918bb75be&w=1060"
  
  }, {
  
  "id": "Druck- & Werbematerialien",
  
  "label": "Dokumentation und Präsentation",
  
  "points": [
  
  "Medizinische Doks.",
  
  "Präsentationen",
  
  "Dokument Design",
  
  "Bildungsmaterial",
  
  "Dokumentationen",
  
  "User Manual",
  
  "Newsletter",
  
  "Angebote",
  
  "Event Programme",
  
  "Portfolio Design",
  
  ],
  
  "points2": [
  "Investor Pitches",
  "Compliance Doks.",
  "Schulungsunterlagen",
  "Konferenzmaterialien",
  "Gebrauchsanweisungen",
  "Richtlinien und Verfahren",
  ],
  
  "image": "/Dokumentation.mp4"
  
  },
  
  
  
  ];

  const LazyVideo = ({ src, ...props }) => {
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
      <motion.video
        ref={videoRef}
        src={isVisible ? src : undefined}
        {...props}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    );
  };
  
  export default function WorkList() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const tabRefs = useRef(new Array(tabs.length));
    const hasScrolled = useRef(false);
    const sectionRef = useRef(null);
    const isInViewRef = useRef(true);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (!hasScrolled.current && isInViewRef.current) {
          const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
          const nextIndex = (currentIndex + 1) % tabs.length;
          setActiveTab(tabs[nextIndex].id);
        }
        hasScrolled.current = false;
      }, 8000);
  
      return () => clearInterval(interval);
    }, [activeTab]);
  
    useEffect(() => {
      const currentTab = tabRefs.current[tabs.findIndex(tab => tab.id === activeTab)];
      if (currentTab) {
        const { left, right } = currentTab.getBoundingClientRect();
        const isVisible = left >= 0 && right <= window.innerWidth;
        if (!isVisible) {
          currentTab.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
          });
        }
      }
    }, [activeTab]);
  
    useEffect(() => {
      const handleScroll = () => {
        hasScrolled.current = true;
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        isInViewRef.current = entry.isIntersecting;
      }, { threshold: 0.1 });
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);
  
    const handleTabClick = (tabId) => {
      setActiveTab(tabId);
      hasScrolled.current = true;
      setTimeout(() => {
        hasScrolled.current = false;
      }, 500);
    };
  
    const activeTabData = useMemo(() => tabs.find(tab => tab.id === activeTab), [activeTab]);
  
    return (
      <div ref={sectionRef} className="overflow-hidden bg-transparent py-24 sm:py-32" id="dienstleistungen">
        <div className="mx-auto lg:max-w-7xl max-w-4xl px-6 lg:px-8">
          <div className="max-w-7xl text-start pb-8">
            <p className="text-small font-semibold  text-indigo-600">Unsere Dienstleistungen – Deine kreative Spielwiese</p>
            <h3 className="mt-2 text-h3 font-bold tracking-tight text-gray-900 leading-10">Entdecke die Vielfalt unserer Designleistungen</h3>
            <p className="mt-6 text-start text-sup text-gray-600">
              Bei TillTech bieten wir dir ein breites Spektrum an Designservices, die darauf abgestimmt sind, jede deiner kreativen Anforderungen zu erfüllen. Von der ersten Skizze bis zum finalen Produkt, unsere maßgeschneiderten Lösungen decken alles ab. Egal, ob du frische Ideen für dein Branding brauchst, eine neue Website gestalten möchtest oder innovative App-Designs suchst – wir sind dein zuverlässiger Partner.
            </p>
          </div>
  
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <div>
                  <div className="flex overflow-x-auto pb-4">
                    {tabs.map((tab, index) => (
                      <button
                        key={tab.id}
                        ref={el => tabRefs.current[index] = el}
                        onClick={() => handleTabClick(tab.id)}
                        className={`${activeTab === tab.id ? " text-indigo-700" : "hover:text-gray-700"} relative rounded-md px-4 py-2 text-base text-gray-500 whitespace-nowrap`}
                      >
                        {activeTab === tab.id && (
                          <motion.div layoutId='active-pill' className="absolute inset-0 bg-indigo-100" style={{ borderRadius: 8 }} />
                        )}
                        <span className="relative z-10">{tab.label}</span>
                      </button>
                    ))}
                  </div>
  
                  <div className="mt-4 flex flex-row">
                    <div className="p-2">
                      {activeTabData.points.map((point, index) => (
                        <div key={index} className="flex flex-row justify-start align-middle content-center">
                          <CheckBadgeIcon className="h-5 w-5 text-sky-500 stroke-white" />
                          <p className="text-gray-500 text-base">{point}</p>
                        </div>
                      ))}
                    </div>
                    <div className="p-2">
                      {activeTabData.points2.map((point, index) => (
                        <div key={index} className="flex flex-row justify-start align-middle content-center">
                          <CheckBadgeIcon className="h-5 w-5 text-sky-500 stroke-white" />
                          <p className="text-gray-500 text-base">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <div>
              <LazyVideo
              playsInline
                key={activeTab}
                src={activeTabData.image}
                alt={activeTabData.label}
                className="h-[500px] w-[500px] rounded-xl"
                autoPlay
                loop
                muted
              />
            </div>
          </div>
        </div>
      </div>
    );
  }