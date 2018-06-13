import PropTypes from 'prop-types';
import React from 'react';
import i18n from '../../i18n';
import { translate } from 'react-i18next';

// eslint-disable-next-line no-unused-vars
class Home extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line no-undef
    if ('serviceWorker' in navigator) {
      // eslint-disable-next-line no-undef
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(() => {
          console.log('service worker registration successful');
        })
        .catch(err => {
          console.warn('service worker registration failed', err.message);
        });
    }
  }

  render() {
    const { t } = this.props;
    return <div>{t('hello')}</div>;
  }
}

Home.propTypes = {
  t: PropTypes.func,
};

const TranslatedHome = translate(['home', 'common'], { i18n, wait: process.browser })(Home);

// Passing down initial translations
// use req.i18n instance on serverside to avoid overlapping requests set the language wrong
TranslatedHome.getInitialProps = async ({ req }) => {
  if (req && !process.browser) return i18n.getInitialProps(req, ['home', 'common']);
  return {};
};

export default TranslatedHome;
