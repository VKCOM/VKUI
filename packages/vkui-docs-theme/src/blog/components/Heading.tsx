import type * as React from 'react';
import { Title } from '@vkontakte/vkui';

export interface HeadingProps extends React.ComponentProps<'h2'> {
  Tag?: `h${1 | 2 | 3}` | undefined;
}

export function Heading({ Tag = 'h2', children, ...props }: HeadingProps) {
  return (
    <Title Component={Tag} {...props}>
      {children}
    </Title>
  );
}
