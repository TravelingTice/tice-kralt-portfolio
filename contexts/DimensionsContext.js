import React, { createContext, useState } from 'react';

export const DimensionsContext = createContext();

const DimensionsContextProvider = ({ children }) => {
  const [values, setValues] = useState({
    navHeight: 80,
    bannerHeight: 540,
    projectsHeight: 400
  });

  return (
    <DimensionsContext.Provider value={{
      values
    }}>
      {children}
    </DimensionsContext.Provider>
  )
}

export default DimensionsContextProvider;