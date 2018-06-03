import { Div } from '../Colors';
import breakpoint from '../breakpoint';

const FormGroup = Div.extend`
  ${props => {
    if (props.stacked) {
      return `
        & input,
        & select,
        & textarea {
          display: block;
          margin: .25em 0;
        }
      `;
    }
    return '';
  }} ${props => {
    if (props.aligned) {
      return `
        & input,
        & textarea,
        & select {
          display: inline-block;
          margin: .25em 0;
          vertical-align: middle;
        }
        & textarea {
          vertical-align: top;
        }
        & label {
          display: block;
          width: 100%;
        }
      `;
    }
    return '';
  }};
  ${props => breakpoint('md', props.theme.breakpoints)`
    ${() =>
      props.aligned &&
      `
      margin-bottom: .5em;
      & label {
        display: inline-block;
        width: 10em;
        margin: 0 1em 0 0;
        text-align: right;
        vertical-align: middle;
      }
    `}
  `};
`;

FormGroup.displayName = 'FormGroup';

export default FormGroup;
