import PropTypes from 'prop-types';
import { Span } from '../Colors';

const Ellipsis = Span.extend`
  max-width: ${props => (props.maxWidth ? props.maxWidth : '100%')};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

Ellipsis.displayName = 'Ellipsis';

Ellipsis.propTypes = {
  maxWidth: PropTypes.string,
};

export default Ellipsis;
