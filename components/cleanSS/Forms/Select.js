import InputMixin from './InputMixin';

const SelectMixin = InputMixin.withComponent('select');

const Select = SelectMixin.extend`
  height: 2.25em;
  background-color: ${props => props.theme.colors.white};

  &[multiple] {
    height: auto;
  }
`;

Select.displayName = 'Select';

export default Select;
