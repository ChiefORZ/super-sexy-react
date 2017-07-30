import { Div } from '../Colors';
import breakpoint from '../breakpoint';

const FormControls = Div.extend`
  margin: .5em 0 0 0;

  ${props => breakpoint('md', props.theme.breakpoints)`
    ${() =>
      props.aligned &&
      `
      margin: .5em 0 0 11em;
    `}
  `};
`;

FormControls.displayName = 'FormControls';

export default FormControls;
