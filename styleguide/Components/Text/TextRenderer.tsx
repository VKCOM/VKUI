import React, { FC } from 'react';
import { Text, TextProps } from '@vkui';
import './Text.css';

export const TextRenderer: FC<{ semantic: string }> = ({ children, semantic }) => {
  let weight: TextProps['weight'];

  switch (semantic) {
    case 'strong':
      weight = 'medium';
      break;
    default:
      weight = 'regular';
  }

  return (
    <Text className="Text" weight={weight}>{children}</Text>
  )
}

export default TextRenderer;
