import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { usePlatform } from '../../hooks/usePlatform';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getAvatarUrl } from '../../testing/mock';
import { Group } from '../Group/Group';
import { Image } from '../Image/Image';
import { HorizontalCell, HorizontalCellProps } from './HorizontalCell';

const story: Meta<HorizontalCellProps> = {
  title: 'Blocks/HorizontalCell',
  component: HorizontalCell,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<HorizontalCellProps & { values: HorizontalCellItemProps[] }>;

interface HorizontalCellItemProps {
  id: number;
  title: string;
  icon: string;
}

export const Playground: Story = {
  render: function Render({ values, ...args }) {
    const platform = usePlatform();

    return (
      <>
        {values.map((value) => {
          return (
            <HorizontalCell key={value.id} header={value.title} {...args}>
              <Image size={platform === 'ios' ? 64 : 56} borderRadius="l" src={value.icon} />
            </HorizontalCell>
          );
        })}
      </>
    );
  },
  args: {
    values: [
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
    ],
  },
  decorators: [
    (Component, context) => (
      <Group>
        <div style={{ display: 'flex' }}>
          <Component {...context.args} />
        </div>
      </Group>
    ),
    withSinglePanel,
    withVKUILayout,
  ],
};
