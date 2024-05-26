import React, { useEffect } from 'react';
import HeroSection from '/src/components/HeroSection.jsx';
import LogoClouds from '/src/components/LogoClouds';
import FeatureSection1 from '/src/components/FeatureSection1';
import Mitgliedschaftsvorteile from '/src/components/Mitgliedschaftsvorteile';
import Download from '/src/components/Download';
import Testimonials from '/src/components/Testimonials';
import FAQ from '/src/components/FAQ';
import WorkList from '/src/components/WorkList';
import Footer from '/src/components/Footer';
import Section1 from '/src/components/Section1';
import Header from '/src/components/Header';
import PortfolioFrontPage from '../PortfolioFrontPage';
import { motion, useScroll, useSpring } from "framer-motion";
import { Gradient } from "whatamesh";
import PricingNew from './PricingNew';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <div className='pattern-bg'>
      <div className="relative isolate overflow-hidden">
        <motion.div className="fixed z-10 top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-fuchsia-400 to-sky-400 origin-left" style={{ scaleX }} />
        <Header />
        <HeroSection />
        <div className='-skew-y-6 z-10'>
          <canvas id="gradient-canvas" className='sm:h-[300px] h-[200px] w-full' ></canvas>
        </div>
        <FeatureSection1 />
        <LogoClouds />
        <Section1 />
        <Mitgliedschaftsvorteile />
        <WorkList />
        <PortfolioFrontPage />
        <Testimonials />
        <PricingNew />
        <FAQ />
        <Download />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
