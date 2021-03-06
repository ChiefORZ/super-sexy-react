import PropTypes from 'prop-types';
import styled from 'styled-components';

const ColorMixin = styled.div`
  ${props => {
    if (props.bgColor) {
      return props.theme.colors[props.bgColor]
        ? `background-color: ${props.theme.colors[props.bgColor]};`
        : `background-color: ${props.bgColor};`;
    }
    return '';
  }} ${props => {
  if (props.borderColor) {
    return props.theme.colors[props.borderColor]
      ? `border-color: ${props.theme.colors[props.borderColor]};`
      : `border-color: ${props.borderColor};`;
  }
  return '';
}} ${props => {
  if (props.fontColor) {
    return props.theme.colors[props.fontColor]
      ? `color: ${props.theme.colors[props.fontColor]};`
      : `color: ${props.fontColor};`;
  }
  return '';
}};
`;

ColorMixin.propTypes = {
  bgColor: PropTypes.string,
  borderColor: PropTypes.string,
  fontColor: PropTypes.string,
};

export default ColorMixin;
