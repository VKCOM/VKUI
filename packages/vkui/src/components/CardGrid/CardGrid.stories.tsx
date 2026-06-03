import type { Meta, StoryFn } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Card } from '../Card/Card';
import { Group } from '../Group/Group';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { CardGrid, type CardGridProps } from './CardGrid';

type StoryCardGridProps = CardGridProps & { count: number };

const story: Meta<StoryCardGridProps> = {
  title: 'Layout/CardGrid',
  component: CardGrid,
  parameters: createStoryParameters('CardGrid', CanvasFullLayout, DisableCartesianParam),
  argTypes: {
    count: {
      control: { type: 'number' },
    },
  },
  tags: ['Раскладка'],
};

export default story;

type Story = StoryFn<StoryCardGridProps>;

export const Playground: Story = ({ count, ...args }: StoryCardGridProps) => (
  <CardGrid {...args}>
    {Array(count)
      .fill(null)
      .map((_, index) => (
        <Card key={index}>
          <div
            style={{
              height: 96,
            }}
          >
            <VisuallyHidden>
              Контент для вашей карточки (визуальный компонент-обертка)
            </VisuallyHidden>
          </div>
        </Card>
      ))}
  </CardGrid>
);

Playground.args = {
  count: 3,
};

Playground.decorators = [withSinglePanel, withVKUILayout];

export const InsideGroup: Story = ({ count, ...args }: StoryCardGridProps) => (
  <Group>
    <CardGrid {...args}>
      {Array(count)
        .fill(null)
        .map((_, index) => (
          <Card key={index}>
            <div
              style={{
                height: 96,
              }}
            >
              <VisuallyHidden>
                Контент для вашей карточки (визуальный компонент-обертка)
              </VisuallyHidden>
            </div>
          </Card>
        ))}
    </CardGrid>
  </Group>
);

InsideGroup.args = {
  count: 3,
};

InsideGroup.decorators = [withSinglePanel, withVKUILayout];
