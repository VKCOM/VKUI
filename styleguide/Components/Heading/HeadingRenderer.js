import React from 'react';
import { classNames, Headline, Title } from '@vkui';
import './Heading.css';

const HeadingRenderer = ({ level, children, className }) => {
  switch (level) {
    case 1:
      return (
        <Title className={classNames('Heading', 'Heading--1', className)} level="1">
          {children}
        </Title>
      );
    case 2:
      return (
        <Title className={classNames('Heading', 'Heading--2', className)} weight="2" level="2">
          {children}
        </Title>
      );
    default:
      return (
        <Headline className={classNames('Heading', 'Heading--3', className)} weight="1" level="1">
          {children}
        </Headline>
      );
  }
};

export default HeadingRenderer;
