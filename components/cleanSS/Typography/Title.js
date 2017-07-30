import { Title as ColoredTitle } from '../Colors';
import PropTypes from 'prop-types';

const Title = ColoredTitle.extend`
  font-size: ${props => {
    switch (props.size) {
      case 'xs':
        return props.theme.typography.fontSize * 1.125;
      case 'sm':
        return props.theme.typography.fontSize * 1.25;
      case 'lg':
        return props.theme.typography.fontSize * 1.75;
      case 'xl':
        return props.theme.typography.fontSize * 2.25;
      case 'md':
      default:
        return props.theme.typography.fontSize * 1.5;
    }
  }}em;
  line-height: ${props => {
    switch (props.size) {
      case 'xs':
        return 1;
      case 'sm':
        return 1.5;
      case 'lg':
        return 1.3;
      case 'xl':
        return 1.2;
      case 'md':
      default:
        return 1.4;
    }
  }};
  font-weight: 400;

  margin-bottom: 1rem;
`;

Title.displayName = 'Title';

Title.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
};

export default Title;
