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
    <ComponentPlayground
      {...props}
      propSets={[
        {
          padding: [true],
          size: ['s', 'm', 'l', false],
        },
        {
          padding: [true],
          showArrows: [true, false, 'always'],
        },
        {
          padding: [false],
        },
      ]}
    >
      {(props: CardScrollProps) => <CardScroll {...props}>{items}</CardScroll>}
    </ComponentPlayground>
  );
};
