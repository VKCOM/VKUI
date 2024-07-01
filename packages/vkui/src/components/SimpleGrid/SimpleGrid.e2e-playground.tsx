import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { SimpleGrid, type SimpleGridProps } from './SimpleGrid';

const ChildNode = () => <div style={{ height: 50, backgroundColor: 'red' }}>Grid Item</div>;

export const SimpleGridPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          children: [[<ChildNode key="1" />, <ChildNode key="2" />]],
          columns: [1, 2],
          gap: ['m'],
          margin: ['auto'],
        },
        {
          margin: ['auto-inline', 'auto-block'],
          children: [[<ChildNode key="1" />, <ChildNode key="2" />]],
          gap: ['xl'],
        },
        {
          children: [[<ChildNode key="1" />, <ChildNode key="2" />, <ChildNode key="3" />]],
          gap: [[16, 8]],
          columns: [2],
        },
      ]}
    >
      {(props: SimpleGridProps) => <SimpleGrid {...props} />}
    </ComponentPlayground>
  );
};
