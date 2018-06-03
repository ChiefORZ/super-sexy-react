import PropTypes from 'prop-types';
import { Span } from '../Colors';

const Rounded = Span.extend`
  border-radius: ${props => props.radius || 3}px;
`;

Rounded.displayName = 'Rounded';

Rounded.propTypes = {
  radius: PropTypes.number,
};

export default Rounded;
