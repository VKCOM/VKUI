import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import './Code.css';

export const CodeRenderer = ({ Component = 'span', noWrap, children, className, ...restProps }) => {
  return (
    <Component className={classNames('Code', noWrap && 'Code--nowrap', className)} {...restProps}>
      {children}
    </Component>
  );
};

export default CodeRenderer;
