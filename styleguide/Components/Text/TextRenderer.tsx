import React, { FC } from 'react';
import { classNames } from '@vkui';
import './Text.css';

export const TextRenderer: FC<{ semantic: string }> = ({ children, semantic, className, Component = 'span', ...restProps }) => {
  let weight: string;

  switch (semantic) {
    case 'strong':
      weight = 'medium';
      break;
    default:
      weight = 'regular';
  }

  return (
    <Component className={classNames('Text', `Text--${weight}`, className)}>{children}</Component>
  )
}

export default TextRenderer;
