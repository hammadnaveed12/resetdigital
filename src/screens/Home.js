import React from 'react';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Foundation from '../components/Foundation'
//import { useContext } from 'react';
//import { DarkModeContext } from '../components/darkmode';
import Process from '../components/Process';
import Branding from '../components/Branding';
import GreatBrands from '../components/GreatBrands';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Skills from '../components/Skills';
import Faqs from '../components/Faqs';
import PostAndArticles from '../components/PostAndArticles';
import GetInTouch from '../components/GetInTouch';
import Footer from '../components/Footer';

function Home() {
 // const { darkMode } = useContext(DarkModeContext);

  return (
    <div style={{background: 'linear-gradient(3.95deg, #82E8F2 -19.7%, #1D2025 96.77%)'   }}>
      <Header />
      <Intro  />
      <Process />
      <Foundation />
      <Branding />
      <GreatBrands />
      <Projects />
      <Testimonials />
      <Skills />
      <Faqs />
      <PostAndArticles />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default Home;
