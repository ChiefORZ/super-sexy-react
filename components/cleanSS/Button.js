import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  font-family: inherit;
  font-size: ${props => {
    switch (props.size) {
      case 'xs':
        return '70%';
      case 'sm':
        return '85%';
      case 'lg':
        return '110%';
      case 'xl':
        return '125%';
      case 'md':
      default:
        return '100%';
    }
  }};
  line-height: 1em;

  display: inline-block;
  zoom: 1;

  margin: .25em 0;
  padding: .5em 1em;

  cursor: pointer;
  user-select: none;
  transition: all linear .2s;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-decoration: none;

  color: ${props =>
    (props.primary && props.theme.colors.white) ||
    (props.color ? props.theme.colors[props.color] : props.theme.colors.accent)};
  border-width: 1px;
  border-style: solid;
  border-color: ${props =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.accent};
  border-radius: ${props => (props.pill ? '24px' : '6px')};
  background: ${props =>
    props.primary
      ? (props.color && props.theme.colors[props.color]) || props.theme.colors.accent
      : 0};

  user-focus: normal;

  &:focus {
    outline: 0;
    outline: -webkit-focus-ring-color none;
  }

  &:hover,
  &:focus {
    text-decoration: none;

    opacity: .8;
    color: ${props => props.theme.colors.white};
    border-color: ${props =>
      props.color ? props.theme.colors[props.color] : props.theme.colors.accent};
    background-color: ${props =>
      props.color ? props.theme.colors[props.color] : props.theme.colors.accent};
  }

  &:active {
    transform: translateY(1px);

    color: ${props => props.theme.colors.white};
    border-color: ${props =>
      props.color ? props.theme.colors[props.color] : props.theme.colors.accent};
    background-color: ${props =>
      props.color ? props.theme.colors[props.color] : props.theme.colors.accent};
    box-shadow: inset 0 1px 0 rgba(0, 0, 0, .2);
  }

  ${props =>
    props.disabled &&
    `
    cursor: not-allowed;
    pointer-events: none;

    opacity: .4;
  `};
`;

Button.displayName = 'Button';

Button.propTypes = {
  color: PropTypes.string,
  pill: PropTypes.bool,
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
};

export default Button;
