import NextApp from 'next/app'
// import bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
// import global styles
import '../styles/index.scss';

// import theme for ThemeProvider
import theme from '../theme';
import { ThemeProvider } from 'styled-components';
import DimensionsContextProvider from '../contexts/DimensionsContext';

export default class App extends NextApp {
  // remove it here
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }
  
  render() {
    const { Component, pageProps } = this.props
    return (
      <DimensionsContextProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </DimensionsContextProvider>
    );
  }
}
