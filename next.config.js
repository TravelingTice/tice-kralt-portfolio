require('dotenv').config();
const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV !== 'production',
    register: process.env.NODE_ENV === 'production',
  },
  publicRuntimeConfig: {
    APP_NAME: 'Tice Kralt Portfolio Site',
    PRODUCTION: process.env.NODE_ENV === 'production',
    DOMAIN_DEV: 'http://localhost:3000',
    DOMAIN_PROD: 'https://ticekralt.com'
  }
});