import React from 'react';
import { classNames } from '@vkui';
import './Text.css';

export const TextRenderer = ({
  children,
  semantic,
  className,
  Component = 'span',
  ...restProps
}) => {
  const weight = semantic === 'strong' ? 'medium' : 'regular';

  return (
    <Component {...restProps} className={classNames('Text', `Text--${weight}`, className)}>
      {children}
    </Component>
  );
};

export default TextRenderer;
