import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getAvatarUrl } from '../../testing/mock';
import { Avatar } from '../Avatar/Avatar';
import { Group } from '../Group/Group';
import { HorizontalCell } from '../HorizontalCell/HorizontalCell';
import { HorizontalScroll } from '../HorizontalScroll/HorizontalScroll';
import { HorizontalCellShowMore, HorizontalCellShowMoreProps } from './HorizontalCellShowMore';

const story: Meta<HorizontalCellShowMoreProps> = {
  title: 'Blocks/HorizontalCellShowMore',
  component: HorizontalCellShowMore,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<HorizontalCellShowMoreProps & { imgSize: number }>;

export const Playground: Story = {
  render: function Render({ ...args }) {
    return (
      <>
        <HorizontalCellShowMore {...args}>{args.children}</HorizontalCellShowMore>
      </>
    );
  },
  args: {
    size: 'l',
    height: 96,
  },
  decorators: [
    (Component, { args }) => (
      <Group>
        <HorizontalScroll>
          <div style={{ display: 'flex' }}>
            {[
              {
                id: 1,
                title: 'Промокот',
                icon: getAvatarUrl('app_promokot'),
              },
              {
                id: 2,
                title: 'Разделите счёт',
                icon: getAvatarUrl('app_split_bill'),
              },
              {
                id: 3,
                title: 'Рассылки',
                icon: getAvatarUrl('app_emails'),
              },
              {
                id: 4,
                title: 'Тексты песен',
                icon: getAvatarUrl('app_lyrics'),
              },
            ].map((element) => (
              <HorizontalCell key={element.id} size={args.size} header={element.title}>
                <Avatar
                  size={args.size === 's' ? 56 : args.height}
                  src={element.icon}
                  alt={`avatar: ${element.title}`}
                />
              </HorizontalCell>
            ))}
            <Component {...args} />
          </div>
        </HorizontalScroll>
      </Group>
    ),
    withSinglePanel,
    withVKUILayout,
  ],
};

export const Small: Story = {
  ...Playground,
  args: {
    ...Playground.args,
    size: 's',
    height: 56,
  },
};

export const Middle: Story = {
  ...Playground,
  args: {
    ...Playground.args,
    size: 'm',
    height: 88,
  },
};

export const Large: Story = Playground;

export const WithCustomText: Story = {
  ...Playground,
  args: {
    ...Playground.args,
    size: 'm',
    height: 88,
    children: 'Show More',
  },
};
