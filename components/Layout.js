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

const Layout = props =>
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        titleTemplate="%s | Sebastian Schaffernak"
        defaultTitle={title}
      >
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {/* Default content encoding. */}
        <meta name="charset" content="utf-8" />
        {/* @see http://bit.ly/2f8IaqJ */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* This is important to signify your application is mobile responsive! */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Providing a theme color is good if you are doing a progressive web application. */}
        <meta name="theme-color" content="#1caff6" />
        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="http://droppercdn.blob.core.windows.net/schaffernak/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="http://droppercdn.blob.core.windows.net/schaffernak/apple-touch-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="http://droppercdn.blob.core.windows.net/schaffernak/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="http://droppercdn.blob.core.windows.net/schaffernak/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="http://droppercdn.blob.core.windows.net/schaffernak/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="http://droppercdn.blob.core.windows.net/schaffernak/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="http://droppercdn.blob.core.windows.net/schaffernak/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="http://droppercdn.blob.core.windows.net/schaffernak/apple-touch-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="http://droppercdn.blob.core.windows.net/schaffernak/apple-touch-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="http://droppercdn.blob.core.windows.net/schaffernak/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="http://droppercdn.blob.core.windows.net/schaffernak/favicon-194x194.png"
          sizes="194x194"
        />
        <link
          rel="icon"
          type="image/png"
          href="http://droppercdn.blob.core.windows.net/schaffernak/favicon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/png"
          href="http://droppercdn.blob.core.windows.net/schaffernak/android-chrome-192x192.png"
          sizes="192x192"
        />
        <link
          rel="icon"
          type="image/png"
          href="http://droppercdn.blob.core.windows.net/schaffernak/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="manifest"
          href="http://droppercdn.blob.core.windows.net/schaffernak/manifest.json"
        />
        <link
          rel="mask-icon"
          href="http://droppercdn.blob.core.windows.net/schaffernak/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link
          rel="shortcut icon"
          href="http://droppercdn.blob.core.windows.net/schaffernak/favicon.ico"
        />
        <meta name="msapplication-TileColor" content="#FFF" />
        <meta
          name="msapplication-TileImage"
          content="http://droppercdn.blob.core.windows.net/schaffernak/mstile-144x144.png"
        />
        <meta
          name="msapplication-config"
          content="http://droppercdn.blob.core.windows.net/schaffernak/browserconfig.xml"
        />
        {/* Open Graph */}
        <meta property="og:site_name" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="http://schaffernak.eu" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:image" content="" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:url" content="http://schaffernak.eu" />
        {/* Fonts */}
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
      </Helmet>
      <Header />
      <Sidebar url={props.url} />
      {props.children}
      <Footer />
    </Wrapper>
  </ThemeProvider>;

Layout.propTypes = {
  children: PropTypes.node,
  url: PropTypes.object,
};

export default Layout;
