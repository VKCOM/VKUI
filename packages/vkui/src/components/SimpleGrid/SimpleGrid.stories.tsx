import type { Meta, StoryFn } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { ContentCard } from '../ContentCard/ContentCard';
import { SimpleGrid, type SimpleGridProps } from './SimpleGrid';

const story: Meta<SimpleGridProps> = {
  title: 'Layout/SimpleGrid',
  component: SimpleGrid,
  parameters: createStoryParameters('SimpleGrid', CanvasFullLayout, DisableCartesianParam),
  tags: ['Раскладка'],
};

export default story;

type Story = StoryFn<SimpleGridProps>;

export const Playground: Story = (args: SimpleGridProps) => (
  <SimpleGrid {...args}>
    {Array.from(
      {
        length: 5,
      },
      (_, index) => {
        return (
          <div
            key={index}
            style={{
              width: '80%',
              border: '1px dotted red',
            }}
          >
            <ContentCard
              overTitle="ALBUM"
              title="Halsey – Badlands"
              caption="Blue Vinyl · EU · 2015"
              description="Badlands is the story about dreams and cruel reality..."
            />
          </div>
        );
      },
    )}
  </SimpleGrid>
);

Playground.args = {
  gap: 'm',
};

Playground.decorators = [
  (Component) => (
    <div
      style={{
        width: '80%',
        border: '1px dotted red',
      }}
    >
      <Component />
    </div>
  ),
];
