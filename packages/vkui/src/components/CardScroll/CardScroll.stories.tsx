import type { Meta, StoryFn } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Card } from '../Card/Card';
import { Group } from '../Group/Group';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { CardScroll, type CardScrollProps } from './CardScroll';

type StoryCardScrollProps = CardScrollProps & { count: number };

const story: Meta<StoryCardScrollProps> = {
  title: 'Layout/CardScroll',
  component: CardScroll,
  parameters: createStoryParameters('CardScroll', CanvasFullLayout, DisableCartesianParam),
  argTypes: {
    count: {
      control: { type: 'number' },
    },
  },
  tags: ['Раскладка'],
};

export default story;

type Story = StoryFn<StoryCardScrollProps>;

export const Playground: Story = ({ count, ...args }: StoryCardScrollProps) => (
  <CardScroll {...args}>
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
  </CardScroll>
);

Playground.args = {
  count: 3,
};

Playground.decorators = [withSinglePanel, withVKUILayout];

export const InsideGroup: Story = ({ count, ...args }: StoryCardScrollProps) => (
  <Group>
    <CardScroll {...args}>
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
    </CardScroll>
  </Group>
);

InsideGroup.args = {
  count: 3,
};

InsideGroup.decorators = [withSinglePanel, withVKUILayout];
