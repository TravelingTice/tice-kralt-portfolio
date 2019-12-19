import React from 'react';
import Home from './Home/Home.js';
import Projects from './Projects/Projects';
import About from './About/About';

const Main = props => (
  <main>
    <Home/>
    <Projects/>
    <About/>
  </main>
);

export default Main;