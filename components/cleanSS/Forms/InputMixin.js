import styled from 'styled-components';

const InputMixin = styled.input`
  font-size: 1em;

  display: inline-block;

  height: auto;
  margin: inherit;
  margin-top: 0.25em;
  margin-bottom: 0.25em;
  padding: 0.5em 0.6em;

  transition: border-color 0.2s;

  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.colors.lightgrey};
  border-radius: 3px;
  box-shadow: inset 0 1px 3px #ddd;

  &:focus {
    border-color: ${props => props.theme.colors.accent};
    outline: none;
  }

  &[disabled] {
    cursor: not-allowed;

    color: ${props => props.theme.colors.grey};
    border-color: ${props => props.theme.colors.silver};
    background-color: ${props => props.theme.colors.lightsilver};
  }

  &[readonly] {
    color: ${props => props.theme.colors.grey};
    background-color: ${props => props.theme.colors.lightsilver};
  }

  &:focus:invalid {
    color: ${props => props.theme.colors.red};
    border-color: ${props => props.theme.colors.red};
  }

  ${props =>
    props.error &&
    `color: ${props.theme.colors.red};
    border-color: ${props.theme.colors.red};`};
`;

InputMixin.displayName = 'InputMixin';

export default InputMixin;
