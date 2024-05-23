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
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");

    async function connect() {
      this.shaderFiles = {
        vertex: "varying vec3 v_color;\n\nvoid main() {...}",  // Der volle Shader-Code bleibt gleich
        noise: "//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n// ...",
        blend: "//\n// https://github.com/jamieowen/glsl-blend\n// ...",
        fragment: "varying vec3 v_color;\n\nvoid main() {...}"
      };

      this.conf = {
        presetName: "",
        wireframe: false,
        density: [0.06, 0.16],
        zoom: 1,
        rotation: 0,
        playing: true
      };

      if (document.querySelectorAll("canvas#gradient-canvas").length < 1) {
        console.log("DID NOT LOAD HERO STRIPE CANVAS");
      } else {
        this.minigl = new MiniGl(this.el, null, null, true);
        requestAnimationFrame(() => {
          if (this.el) {
            this.computedCanvasStyle = getComputedStyle(this.el);
            this.waitForCssVars();
          }
        });
      }
    }

    connect();
  }, []);

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


  return (
    <div className='pattern-bg'>
      <div className="relative isolate overflow-hidden">
        <motion.div className="fixed z-10 top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-fuchsia-400 to-sky-400 origin-left" style={{ scaleX }} />
        <Header />
        <HeroSection />
        <canvas id="gradient-canvas" className="w-full h-40 md:h-80 -skew-y-6"></canvas>
        <FeatureSection1 />
        <LogoClouds />
        <Section1 />
        <Mitgliedschaftsvorteile />
        <WorkList />
        <PortfolioFrontPage />
        <Testimonials />
        <PricingNew />
        <FAQ />
        <Download  />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
