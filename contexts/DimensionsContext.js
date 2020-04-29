import React, { createContext, useState, useEffect } from 'react';

export const DimensionsContext = createContext();

const DimensionsContextProvider = ({ children }) => {
  const [values, setValues] = useState({
    navHeight: 70,
    bannerHeight: 413,
    projectsHeight: 400
  });

  useEffect(() => {
    console.log(window.innerWidth);
  }, []);

  return (
    <DimensionsContext.Provider value={{
      values
    }}>
      {children}
    </DimensionsContext.Provider>
  )
}

export default DimensionsContextProvider;