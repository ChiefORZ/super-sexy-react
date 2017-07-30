import PropTypes from 'prop-types';
import { Span } from '../Colors';

const Circle = Span.extend`
  display: inline-block;
  border-radius: 50%;
  padding: ${props => props.padding || 10}px;
`;

Circle.displayName = 'Circle';

Circle.propTypes = {
  padding: PropTypes.number,
};

export default Circle;
