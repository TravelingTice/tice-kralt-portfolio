import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { 
  faBars 
} from '@fortawesome/free-solid-svg-icons';

import Header from './Header/Header';
import Banner from './Banner/Banner';
import Projects from './Projects/Projects';

// add icons to the library
library.add(fab, faBars);

const App = () => (
  <>
    <Header/>
    {/* <Banner/> */}
    {/* <Projects/> */}
  </>
);
  
export default App;
  