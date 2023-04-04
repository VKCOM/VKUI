import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Card } from '../Card/Card';
import { CardScroll, type CardScrollProps } from './CardScroll';

const items = new Array(20).fill(0).map((_, index) => (
  <Card key={index}>
    <div style={{ paddingBottom: '66%' }} />
  </Card>
));

export const CardScrollPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground<CardScrollProps>
      {...props}
      propSets={[
        {
          size: ['s', 'm', 'l', false],
        },
        {
          showArrows: [true, false, 'always'],
        },
        {
          withSpaces: [true, false],
        },
      ]}
    >
      {(props) => <CardScroll {...props}>{items}</CardScroll>}
    </ComponentPlayground>
  );
};
