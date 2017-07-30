import PropTypes from 'prop-types';
import i18n from '../../i18n';
import { translate } from 'react-i18next';

// eslint-disable-next-line jsx-control-statements/jsx-jcs-no-undef
const Home = ({ t, url }) =>
  <div>
    {t('hello')}
  </div>;

Home.propTypes = {
  t: PropTypes.func,
  url: PropTypes.object,
};

const TranslatedHome = translate(['home', 'common'], { i18n, wait: process.browser })(Home);

// Passing down initial translations
// use req.i18n instance on serverside to avoid overlapping requests set the language wrong
TranslatedHome.getInitialProps = async ({ req }) => {
  if (req && !process.browser) return i18n.getInitialProps(req, ['home', 'common']);
  return {};
};

export default TranslatedHome;
