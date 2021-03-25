import React from 'react';
import { Headline, Title } from '@vkui';

const HeadingRenderer = ({ level, children }) => {
  console.log(level);
  switch (level) {
    case 1:
      return <Title weight="bold" level="1">{children}</Title>
    case 2:
      return <Title weight="semibold" level="1">{children}</Title>
    default:
      return <Headline weight="bold" level="1">{children}</Headline>
  }
}

export default HeadingRenderer;
