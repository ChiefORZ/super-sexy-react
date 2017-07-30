import { Paragraph as ColoredParagraph } from '../Colors';

const Paragraph = ColoredParagraph.extend`
  margin-top: 0;
  margin-bottom: 1em;
`;

Paragraph.displayName = 'Paragraph';

export default Paragraph;
