import { Div } from './Colors';
import PropTypes from 'prop-types';

const Container = Div.extend`
  position: relative;

  max-width: ${props => (props.edge ? 'none' : props.theme.siteWidth)}em;
  margin: 0 auto;
  padding: ${props => (props.edge ? '2em 0' : '2em')};
`;

Container.displayName = 'Container';

Container.propTypes = {
  edge: PropTypes.bool,
};

export default Container;
