import NextApp from 'next/app'
// import bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
// import global styles
import '../styles/index.scss';

// import theme for ThemeProvider
import theme from '../theme';
import { ThemeProvider } from '@material-ui/core/styles';

import { ParallaxProvider } from 'react-scroll-parallax';

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
      <ThemeProvider theme={theme}>
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
      </ThemeProvider>
    );
  }
}
