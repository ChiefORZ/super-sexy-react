import { Div } from '../Colors';

const Grid = Div.extend`
  display: flex;

  letter-spacing: -.31em;

  flex-flow: row wrap;
  text-rendering: optimizespeed;
`;

Grid.displayName = 'Grid';

export default Grid;
