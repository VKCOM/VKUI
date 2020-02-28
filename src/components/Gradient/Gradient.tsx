import React, { FunctionComponent, HTMLAttributes } from 'react';
import classNames from '../../lib/classNames';

export interface GradientProps extends HTMLAttributes<HTMLDivElement> {
  mode?: 'tint' | 'white' | 'black';
  to?: 'top' | 'bottom';
}

const Gradient: FunctionComponent<GradientProps> = ({ mode, children, style, className, to, ...restProps }: GradientProps) => {
  return (
    <div
      {...restProps}
      className={classNames('Gradient', `Gradient--md-${mode}`, `Gradient--to-${to}`, className)}
      style={style}
    >
      {children}
    </div>
  );
};

Gradient.defaultProps = {
  mode: 'tint',
  to: 'top',
};

export default Gradient;
