import { Div } from '../Colors';
import PropTypes from 'prop-types';
import breakpoint from '../breakpoint';

const Text = Div.extend`
  text-align: ${props => {
    switch (props.align) {
      case 'center':
        return 'center';
      case 'right':
        return 'right';
      case 'left':
      default:
        return 'left';
    }
  }};
  ${props => breakpoint('sm', props.theme.breakpoints)`
    ${() => {
      if (props.sm) {
        switch (props.sm) {
          case 'center':
            return 'text-align: center;';
          case 'right':
            return 'text-align: right;';
          case 'left':
          default:
            return 'text-align: left;';
        }
      }
      return '';
    }}
  `};
  ${props => breakpoint('md', props.theme.breakpoints)`
    ${() => {
      if (props.md) {
        switch (props.md) {
          case 'center':
            return 'text-align: center;';
          case 'right':
            return 'text-align: right;';
          case 'left':
          default:
            return 'text-align: left;';
        }
      }
      return '';
    }}
  `} ${props => breakpoint('lg', props.theme.breakpoints)`
    ${() => {
      if (props.lg) {
        switch (props.lg) {
          case 'center':
            return 'text-align: center;';
          case 'right':
            return 'text-align: right;';
          case 'left':
          default:
            return 'text-align: left;';
        }
      }
      return '';
    }}
  `} ${props => breakpoint('xl', props.theme.breakpoints)`
    ${() => {
      if (props.xl) {
        switch (props.xl) {
          case 'center':
            return 'text-align: center;';
          case 'right':
            return 'text-align: right;';
          case 'left':
          default:
            return 'text-align: left;';
        }
      }
      return '';
    }}
  `};
`;

Text.displayName = 'Text';

Text.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  sm: PropTypes.oneOf(['left', 'center', 'right']),
  md: PropTypes.oneOf(['left', 'center', 'right']),
  lg: PropTypes.oneOf(['left', 'center', 'right']),
  xl: PropTypes.oneOf(['left', 'center', 'right']),
};

export default Text;
