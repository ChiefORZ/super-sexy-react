import { css } from 'styled-components';

const defaultBreakpoints = {
  mobile: 0, // targeting all devices
  tablet: 737, // targeting devices that are LARGER than the iPhone 6 Plus (which is 736px in landscape mode)
  desktop: 1025, // targeting devices that are LARGER than the iPad (which is 1024px in landscape mode)
};

/**
 * @param   {string}    name
 * @param   {object}    [breakpoints]
 * @returns {*}
 */
const breakpoint = (name, breakpoints = defaultBreakpoints) => {
  let breakpointX = breakpoints[name];

  if (typeof breakpointX === 'number') {
    breakpointX = `${breakpointX / 16}em`; // assume number is px and convert to 'em's
  }

  // special case for 0 to avoid wrapping in an unnecessary @media
  if (parseInt(breakpointX, 10) === 0) {
    return (...args) => css(...args);
  }

  return (...args) => css`
    @media (min-width: ${breakpointX}) {
      ${css(...args)};
    }
  `;
};

/**
 * @param   {*|object}  value
 * @param   {function}  mapValueToCSS
 * @param   {object}    [breakpoints]
 * @returns {*}
 */
export const map = (value, mapValueToCSS, breakpoints) => {
  const type = typeof value;

  if (type === 'object') {
    return [
      mapValueToCSS(undefined), // set the default value
      ...Object.keys(value).map(key => breakpoint(key, breakpoints)(...mapValueToCSS(value[key]))),
    ];
  }
  return mapValueToCSS(value);
};

export default breakpoint;
