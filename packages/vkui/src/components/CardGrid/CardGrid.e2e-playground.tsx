import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Card } from '../Card/Card';
import { CardGrid, type CardGridProps } from './CardGrid';

const getCardPaddingBottom = (size: Exclude<CardGridProps['size'], undefined>) =>
  ({
    s: '92%',
    m: '62%',
    l: '30%',
  })[size];

const getItems = (size: Exclude<CardGridProps['size'], undefined>) => {
  return new Array(3).fill(0).map((_, index) => (
    <Card key={index}>
      <div style={{ paddingBottom: getCardPaddingBottom(size) }} />
    </Card>
  ));
};

export const CardGridPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          size: ['s', 'm', 'l'],
          spaced: [true, false],
        },
      ]}
    >
      {(props: CardGridProps) => <CardGrid {...props}>{getItems(props.size!)}</CardGrid>}
    </ComponentPlayground>
  );
};
