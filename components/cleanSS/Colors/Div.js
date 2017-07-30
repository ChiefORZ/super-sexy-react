import ColorMixin from './ColorMixin';
import PropTypes from 'prop-types';

const Div = ColorMixin.withComponent('div');

Div.propTypes = {
  bgColor: PropTypes.string,
  borderColor: PropTypes.string,
  fontColor: PropTypes.string,
};

export default Div;
