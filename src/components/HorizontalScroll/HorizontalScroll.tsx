import React, { FunctionComponent, HTMLAttributes } from 'react';
import classNames from '../../lib/classNames';

const HorizontalScroll: FunctionComponent<HTMLAttributes<HTMLDivElement>> = (props: HTMLAttributes<HTMLDivElement>) => {
  const { children, className, ...restProps } = props;
  return (
    <div {...restProps} className={classNames('HorizontalScroll', className)}>
      <div className="HorizontalScroll__in">{children}</div>
    </div>
  );
};

export default HorizontalScroll;
