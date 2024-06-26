import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Flex, type FlexProps } from './Flex';

const ChildNode = () => <div style={{ width: 50, height: 50, backgroundColor: 'red' }} />;

export const FlexPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          children: [[<ChildNode key="1" />, <ChildNode key="2" />]],
          gap: [8],
          margin: ['auto'],
        },
        {
          direction: ['row', 'column'],
          children: [[<ChildNode key="1" />, <ChildNode key="2" />]],
          gap: [8],
        },
        {
          children: [[<ChildNode key="1" />, <ChildNode key="2" />, <ChildNode key="1" />]],
          gap: [[8, 16]],
          style: [{ width: 120 }],
        },
      ]}
    >
      {(props: FlexProps) => <Flex {...props} />}
    </ComponentPlayground>
  );
};
