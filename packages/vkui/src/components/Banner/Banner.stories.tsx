import React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, StoryObj } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout } from '../../storybook/constants';
import { Button } from '../Button/Button';
import { Group } from '../Group/Group';
import { Image } from '../Image/Image';
import { Banner, BannerProps } from './Banner';

const story: Meta<BannerProps> = {
  title: 'Blocks/Banner',
  component: Banner,
  parameters: CanvasFullLayout,
};

export default story;

type Story = StoryObj<BannerProps>;

export const Playground: Story = {
  args: {
    before: (
      <Image
        size={96}
        src="https://sun9-63.userapi.com/yOEQYPHrNHjZEoanbqPb65HPl5iojmiLgLzfGA/W3geVMMt8TI.jpg"
      />
    ),
    header: 'Баста в Ледовом',
    subheader: 'Большой концерт',
    asideMode: 'dismiss',
    actions: <Button>Подробнее</Button>,
  },
  decorators: [
    (Component, context) => (
      <Group>
        <Component {...context.args} />
      </Group>
    ),
    withCartesian,
    withSinglePanel,
    withVKUILayout,
  ],
};
