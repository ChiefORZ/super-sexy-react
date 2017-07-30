import ColorMixin from './ColorMixin';
import PropTypes from 'prop-types';

const Paragraph = ColorMixin.withComponent('p');

Paragraph.propTypes = {
  bgColor: PropTypes.string,
  borderColor: PropTypes.string,
  fontColor: PropTypes.string,
};

export default Paragraph;
