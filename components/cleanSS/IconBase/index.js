import PropTypes from 'prop-types';
import React from 'react';

const IconBase = ({ children, color, size, style, ...props }, { reactIconBase = {} }) => {
  const computedSize = size || reactIconBase.size || '1em';
  return (
    <svg
      fill="currentColor"
      height={computedSize}
      preserveAspectRatio="xMidYMid meet"
      width={computedSize}
      {...reactIconBase}
      {...props}
      style={{
        verticalAlign: 'middle',
        color: color || reactIconBase.color,
        ...(reactIconBase.style || {}),
        ...style,
      }}
    >
      {children}
    </svg>
  );
};

IconBase.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
};

IconBase.contextTypes = {
  reactIconBase: PropTypes.shape(IconBase.propTypes),
};

export default IconBase;
