import ColorMixin from './ColorMixin';
import PropTypes from 'prop-types';

const Title = ColorMixin.withComponent('h1');

Title.propTypes = {
  bgColor: PropTypes.string,
  borderColor: PropTypes.string,
  fontColor: PropTypes.string,
};

export default Title;
