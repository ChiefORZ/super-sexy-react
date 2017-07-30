import PropTypes from 'prop-types';
import styled from 'styled-components';

const Anchor = styled.a`
  cursor: pointer;
  text-decoration: none;

  color: ${props => (props.color ? props.theme.colors[props.color] : props.theme.colors.accent)};

  &:hover {
    text-decoration: underline;
  }
`;

Anchor.displayName = 'Anchor';

Anchor.propTypes = {
  color: PropTypes.string,
};

export default Anchor;
