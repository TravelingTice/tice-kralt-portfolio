import React, { createContext, Component } from 'react';

export const DimensionsContext = createContext();

class DimensionsContextProvider extends Component {
  state = {
    navHeight: 80,
    bannerHeight: 540,
    projectsHeight: 400,
  }
  render() {
    return (
      <DimensionsContext.Provider value={{...this.state}}>
        {this.props.children}
      </DimensionsContext.Provider>
    );
  }
}

export default DimensionsContextProvider;