import ColorMixin from './ColorMixin';
import PropTypes from 'prop-types';

const Span = ColorMixin.withComponent('span');

Span.propTypes = {
  bgColor: PropTypes.string,
  borderColor: PropTypes.string,
  fontColor: PropTypes.string,
};

export default Span;
