import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { 
  faBars 
} from '@fortawesome/free-solid-svg-icons';

import Header from './Header/Header';
import Banner from './Banner/Banner';
import Projects from './Projects/Projects';

// define height of the header
const height = 80;
// add icons to the library
library.add(fab, faBars);

const App = () => (
  <>
    <Header height={height}/>
    <Banner height={height}/>
    {/* <Projects/> */}
  </>
);
  
export default App;
  