import React from 'react';
import PropType from 'prop-types';
import classNames from '../../lib/classNames';
import { HasChildren, HasStyleObject } from '../../types/props';

interface HorizontalScrollProps extends HasStyleObject, HasChildren {}

const HorizontalScroll = ({ children, className, ...restProps }: HorizontalScroll) => (
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
