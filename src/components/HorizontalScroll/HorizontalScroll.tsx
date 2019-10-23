import React, { FunctionComponent, HTMLAttributes } from 'react';
import classNames from '../../lib/classNames';

export interface HorizontalScrollProps extends HTMLAttributes<HTMLDivElement> {}

const HorizontalScroll: FunctionComponent<HorizontalScrollProps> = (props: HorizontalScrollProps) => {
  const { children, className, ...restProps } = props;
  return (
    <div {...restProps} className={classNames('HorizontalScroll', className)}>
      <div className="HorizontalScroll__in">{children}</div>
    </div>
  );
};

export default HorizontalScroll;
