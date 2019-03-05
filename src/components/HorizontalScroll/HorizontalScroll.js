import React from 'react';
import PropType from 'prop-types';
import classNames from '../../lib/classNames';

const HorizontalScroll = ({ children, className, ...restProps }) => (
  <div {...restProps} className={classNames('HorizontalScroll', className)}>
    <div className="HorizontalScroll__in">{children}</div>
  </div>
);

HorizontalScroll.propTypes = {
  children: PropType.node,
  className: PropType.string,
  style: PropType.object
};

export default HorizontalScroll;
