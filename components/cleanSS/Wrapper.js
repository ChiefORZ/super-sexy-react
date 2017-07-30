import { Div } from './Colors';
import { injectGlobal } from 'styled-components';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  img {
    width: 100%;
  }
  svg {
    max-height: 100%;
  }

  embed,
  img,
  canvas,
  iframe,
  video,
  object,
  svg,
  select,
  textarea {
    max-width: 100%;
  }
`;

const Wrapper = Div.extend`
  width: 100%;
  height: 100%;
  min-height: 100%;

  font-family: ${props => props.theme.typography.font};
  font-size: ${props => props.theme.typography.fontSize}em;
  font-weight: ${props => props.theme.typography.fontWeight};
  line-height: ${props => props.theme.typography.lineHeight};

  color: ${props => props.theme.colors.midgrey};
  background-color: ${props => props.theme.colors.white};
`;

Wrapper.displayName = 'Wrapper';

export default Wrapper;
