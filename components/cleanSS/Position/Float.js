import { Div } from '../Colors';
import PropTypes from 'prop-types';

const Float = Div.extend`float: ${props => (props.right && 'right') || 'left'};`;

Float.displayName = 'Float';

Float.propTypes = {
  left: PropTypes.bool,
  right: PropTypes.bool,
};

export default Float;
