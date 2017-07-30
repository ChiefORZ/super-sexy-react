import { Div } from '../Colors';
import PropTypes from 'prop-types';

const Absolute = Div.extend`
  position: absolute;
  ${props => props.top && `top: 0;`};
  ${props => props.bottom && `bottom: 0;`};
  ${props => props.left && `left: 0;`};
  ${props => props.right && `right: 0;`};
  ${props =>
    props.center &&
    `top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    margin: auto;
  `};
`;

Absolute.displayName = 'Absolute';

Absolute.propTypes = {
  center: PropTypes.bool,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
};

export default Absolute;
