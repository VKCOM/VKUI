import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam, StringArg } from '../../storybook/constants';
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
  argTypes: {
    children: StringArg,
  },
};

export default story;

type Story = StoryObj<HorizontalCellShowMoreProps & { imgSize: number }>;

const CELL_ITEMS = [
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
];

function getNotTooBigHeightBySize({
  size,
  height,
}: Pick<HorizontalCellShowMoreProps, 'size' | 'height'>) {
  if (size === 's') {
    return 56;
  }

  if (size === 'm' && height && height > 88) {
    return 88;
  }

  return height;
}

export const Playground: Story = {
  render: function Render({ ...args }) {
    return (
      <>
        <HorizontalCellShowMore {...args} height={getNotTooBigHeightBySize(args)}>
          {args.children}
        </HorizontalCellShowMore>
      </>
    );
  },
  args: {
    size: 'l',
    height: 96,
  },
  decorators: [
    (Component, { args }) => {
      const cellImageSize = getNotTooBigHeightBySize(args);
      return (
        <Group>
          <HorizontalScroll>
            <div style={{ display: 'flex' }}>
              {CELL_ITEMS.map((element) => (
                <HorizontalCell key={element.id} size={args.size} header={element.title}>
                  <Avatar
                    size={cellImageSize}
                    src={element.icon}
                    alt={`avatar: ${element.title}`}
                  />
                </HorizontalCell>
              ))}
              <Component {...args} />
            </div>
          </HorizontalScroll>
        </Group>
      );
    },
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
