import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { 
  faBars,
  faAngleLeft,
  faAngleRight
} from '@fortawesome/free-solid-svg-icons';

import Header from './Header/Header';
import Banner from './Banner/Banner';
import Projects from './Projects/Projects';
import DimensionsContextProvider from '../contexts/DimensionsContext';

// add icons to the library
library.add(fab, faBars, faAngleLeft, faAngleRight);

const App = () => (
  <DimensionsContextProvider>
    <Header />
    <Banner />
    <Projects />
  </DimensionsContextProvider>
);
  
export default App;
  