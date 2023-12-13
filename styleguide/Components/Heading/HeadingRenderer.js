import * as React from 'react';
import { classNames, Headline, Title } from '@vkui';
import { generateIdByReactNode } from '../../utils';
import './Heading.css';

const HeadingRenderer = ({ level, children, className }) => {
  const id = generateIdByReactNode(children);
  switch (level) {
    case 1:
      return (
        <Title
          id={id}
          className={classNames('Heading', 'Heading--1', className)}
          level="1"
          Component="h1"
        >
          {children}
        </Title>
      );
    case 2:
      return (
        <Title
          id={id}
          className={classNames('Heading', 'Heading--2', className)}
          weight="2"
          level="2"
          Component="h2"
        >
          {children}
        </Title>
      );
    case 3:
      return (
        <Title
          id={id}
          className={classNames('Heading', 'Heading--3', className)}
          weight="1"
          level="3"
          Component="h3"
        >
          {children}
        </Title>
      );
    default:
      return (
        <Headline
          id={id}
          className={classNames('Heading', 'Heading--4', className)}
          weight="1"
          level="1"
          Component="h4"
        >
          {children}
        </Headline>
      );
  }
};

export default HeadingRenderer;
