import { initGA, logPageView } from '../utils/analytics';

import { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import { ThemeProvider } from 'styled-components';
import Wrapper from './cleanSS/Wrapper';

const theme = {
  siteWidth: 74,
  breakpoints: {
    sm: 568,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
  colors: {
    blue: '#0082D5',
    green: '#04BE5B',
    olive: '#9DBF16',
    orange: '#FF9948',
    red: '#D2335C',
    purple: '#A93ABA',
    white: '#FFFFFF',
    lightsilver: '#ECEFF4',
    silver: '#CAD3DF',
    lightgrey: '#ADB9CA',
    grey: '#8493A8',
    midgrey: '#54657E',
    black: '#375355',
    trueblack: '#000000',
    facebook: '#3b5998',
    google: '#d34837',
    twitter: '#00aced',
    accent: '#1caff6',
  },
  typography: {
    font: "'Roboto', Arial, sans-serif",
    fontSize: 1,
    fontWeight: 300,
    lineHeight: 1.6,
  },
  whitespace: {
    padding: 1,
    margin: 1,
  },
};

const description = 'Boileplate for react based on next.js';
const keywords = 'react, jsx, next.js, boilerplate, starter, pack, kit, i18n, intl';
const title = 'Super Sexy React';

class Layout extends Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Helmet defaultTitle={title} htmlAttributes={{ lang: 'en' }}>
            <meta content={description} name="description" />
            <meta content={keywords} name="keywords" />
            {/* Default content encoding. */}
            <meta content="utf-8" name="charset" />
            {/* @see http://bit.ly/2f8IaqJ */}
            <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
            {/* This is important to signify your application is mobile responsive! */}
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            {/* Providing a theme color is good if you are doing a progressive web application. */}
            <meta content="#1caff6" name="theme-color" />
            {/* Favicons */}
            <link
              href="http://droppercdn.blob.core.windows.net/schaffernak/apple-touch-icon-57x57.png"
              rel="apple-touch-icon"
              sizes="57x57"
            />
            <link
              href="http://droppercdn.blob.core.windows.net/schaffernak/apple-touch-icon-60x60.png"
              rel="apple-touch-icon"
              sizes="60x60"
            />
            <link
              href="http://droppercdn.blob.core.windows.net/schaffernak/apple-touch-icon-72x72.png"
              rel="apple-touch-icon"
              sizes="72x72"
            />
            <link
              href="http://droppercdn.blob.core.windows.net/schaffernak/apple-touch-icon-76x76.png"
              rel="apple-touch-icon"
              sizes="76x76"
            />
            <link
              href="http://droppercdn.blob.core.windows.net/schaffernak/apple-touch-icon-114x114.png"
              rel="apple-touch-icon"
              sizes="114x114"
            />
            <link
              href="http://droppercdn.blob.core.windows.net/schaffernak/apple-touch-icon-120x120.png"
              rel="apple-touch-icon"
              sizes="120x120"
            />
            <link
              href="http://droppercdn.blob.core.windows.net/schaffernak/apple-touch-icon-144x144.png"
              rel="apple-touch-icon"
              sizes="144x144"
            />
            <link
              href="http://droppercdn.blob.core.windows.net/schaffernak/apple-touch-icon-152x152.png"
              rel="apple-touch-icon"
              sizes="152x152"
            />
            <link
              href="http://droppercdn.blob.core.windows.net/schaffernak/apple-touch-icon-180x180.png"
              rel="apple-touch-icon"
              sizes="180x180"
            />
            <link
              href="http://droppercdn.blob.core.windows.net/schaffernak/favicon-32x32.png"
              rel="icon"
              sizes="32x32"
              type="image/png"
            />
            <link
              href="http://droppercdn.blob.core.windows.net/schaffernak/favicon-194x194.png"
              rel="icon"
              sizes="194x194"
              type="image/png"
            />
            <link
              href="http://droppercdn.blob.core.windows.net/schaffernak/favicon-96x96.png"
              rel="icon"
              sizes="96x96"
              type="image/png"
            />
            <link
              href="http://droppercdn.blob.core.windows.net/schaffernak/android-chrome-192x192.png"
              rel="icon"
              sizes="192x192"
              type="image/png"
            />
            <link
              href="http://droppercdn.blob.core.windows.net/schaffernak/favicon-16x16.png"
              rel="icon"
              sizes="16x16"
              type="image/png"
            />
            <link
              href="http://droppercdn.blob.core.windows.net/schaffernak/manifest.json"
              rel="manifest"
            />
            <link
              color="#5bbad5"
              href="http://droppercdn.blob.core.windows.net/schaffernak/safari-pinned-tab.svg"
              rel="mask-icon"
            />
            <link
              href="http://droppercdn.blob.core.windows.net/schaffernak/favicon.ico"
              rel="shortcut icon"
            />
            <meta content="#FFF" name="msapplication-TileColor" />
            <meta
              content="http://droppercdn.blob.core.windows.net/schaffernak/mstile-144x144.png"
              name="msapplication-TileImage"
            />
            <meta
              content="http://droppercdn.blob.core.windows.net/schaffernak/browserconfig.xml"
              name="msapplication-config"
            />
            {/* Open Graph */}
            <meta content={title} property="og:site_name" />
            <meta content="website" property="og:type" />
            <meta content="" property="og:image" />
            <meta content={title} property="og:title" />
            <meta content={description} property="og:description" />
            <meta content="http://schaffernak.eu" property="og:url" />
            {/* Twitter */}
            <meta content="summary" property="twitter:card" />
            <meta content="" property="twitter:image" />
            <meta content={title} property="twitter:title" />
            <meta content={description} property="twitter:description" />
            <meta content="http://schaffernak.eu" property="twitter:url" />
            {/* Fonts */}
            <link
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
              rel="stylesheet"
            />
          </Helmet>
          <Header />
          <Sidebar url={this.props.url} />
          {this.props.children}
          <Footer />
        </Wrapper>
      </ThemeProvider>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node,
  url: PropTypes.object,
};

export default Layout;
