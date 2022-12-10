import React from 'react';
import { Link } from '@vkui';

export const LinkRenderer = ({ href: _href, ...restProps }) => {
  const href = _href?.replace('https://vkcom.github.io/VKUI/', '');

  return <Link href={href} {...restProps} />;
};

export default LinkRenderer;
