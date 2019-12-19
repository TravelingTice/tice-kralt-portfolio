import React from 'react';
import Home from './Home/Home.js';
import Projects from './Projects/Projects';
import About from './About/About';
import Testimonials from './Testimonials/Testimonials';
import Contact from './Contact/Contact';

const Main = props => (
  <main>
    <Home/>
    <Projects/>
    <About/>
    <Testimonials/>
    <Contact/>
  </main>
);

export default Main;