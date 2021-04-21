import React from 'react';
import { Headline, Title } from '@vkui';
import './Heading.css';

const HeadingRenderer = ({ level, children }) => {
  switch (level) {
    case 1:
      return <Title className="Heading Heading--1" weight="semibold" level="1">{children}</Title>
    case 2:
      return <Title className="Heading Heading--2" weight="medium" level="2">{children}</Title>
    default:
      return <Headline className="Heading Heading--3" weight="bold" level="1">{children}</Headline>
  }
}

export default HeadingRenderer;
