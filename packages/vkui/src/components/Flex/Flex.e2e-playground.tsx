import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { withLabel } from '@vkui-e2e/utils';
import { Flex, type FlexProps } from './Flex';

const ChildNode = () => <div style={{ width: 50, height: 50, backgroundColor: 'red' }} />;

export const FlexPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          children: [[<ChildNode key="1" />, <ChildNode key="2" />]],
          gap: ['m', undefined],
          margin: ['auto'],
        },
        {
          direction: ['row', 'column'],
          children: [[<ChildNode key="1" />, <ChildNode key="2" />]],
          gap: ['m'],
        },
        {
          children: [[<ChildNode key="1" />, <ChildNode key="2" />, <ChildNode key="3" />]],
          gap: [withLabel<[number, number]>([16, 8], '[16, 8]')],
          style: [withLabel({ width: 120 }, 'Custom 120px width')],
        },
      ]}
    >
      {(props: FlexProps) => <Flex {...props} />}
    </ComponentPlayground>
  );
};
