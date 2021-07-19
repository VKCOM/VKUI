import { FunctionComponent, HTMLAttributes } from 'react';
import { classNames } from '../../lib/classNames';

export interface GradientProps extends HTMLAttributes<HTMLDivElement> {
  mode?: 'tint' | 'white' | 'black';
  to?: 'top' | 'bottom';
}

const Gradient: FunctionComponent<GradientProps> = ({ mode, children, to, ...restProps }) => {
  return (
    <div
      role="presentation"
      {...restProps}
      vkuiClass={classNames('Gradient', `Gradient--md-${mode}`, `Gradient--to-${to}`)}
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
