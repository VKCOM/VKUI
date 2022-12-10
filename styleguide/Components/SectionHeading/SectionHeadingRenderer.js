import React from 'react';
import Heading from '../Heading';

export const SectionHeadingRenderer = ({ children, level = 1, ...restProps }) => {
  return (
    <Heading {...restProps} level={level}>
      {children}
    </Heading>
  );
};

export default SectionHeadingRenderer;
