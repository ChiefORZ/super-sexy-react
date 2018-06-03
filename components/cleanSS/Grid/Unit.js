import { Div } from '../Colors';
import PropTypes from 'prop-types';
import { map } from '../breakpoint';

const widthMixin = ({ width, theme }) =>
  map(
    width,
    (value = 1) => {
      switch (value) {
        case 'min': {
          return `
            flex-grow: 0;
            flex-basis: auto;
            width: auto;
            max-width: none;
          `;
        }
        case 'max': {
          return `
            flex-grow: 1;
            flex-basis: auto;
            width: auto;
            max-width: none;
          `;
        }
        default: {
          const pct = Math.round(value * 100);
          return `
              flex-basis: ${pct}%;
              max-width: ${pct}%;
            `;
        }
      }
    },
    theme.breakpoints
  );

const visibilityMixin = ({ visible, theme }) =>
  map(
    visible,
    (value = true) => {
      if (value) {
        return 'display: inline-block;';
      }
      return 'display: none;';
    },
    theme.breakpoints
  );

const Unit = Div.extend`
  display: inline-block;
  zoom: 1;
  vertical-align: top;
  letter-spacing: normal;
  word-spacing: normal;
  text-rendering: auto;
  ${widthMixin} ${visibilityMixin};
`;

Unit.displayName = 'Unit';

Unit.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  visible: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};

Unit.defaultProps = {
  width: 1,
  visible: true,
};

export default Unit;
