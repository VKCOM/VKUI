import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Div } from '../Div/Div';
import { Header } from '../Header/Header';
import { Group } from './Group';

export const GroupPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          header: [undefined, <Header key="header">Header</Header>],
          children: [<Div key="div">Content</Div>],
          mode: ['plain', 'card'],
        },
        {
          header: [<Header key="header">Header</Header>],
          children: [<Div key="div">Content</Div>],
          description: ['Description'],
        },
      ]}
    >
      {Group}
    </ComponentPlayground>
  );
};
