import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Banner, BannerProps } from './Banner';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout } from '../../storybook/constants';
import { Button } from '../Button/Button';
import { Group } from '../Group/Group';
import { Image } from '../Image/Image';
import { getFigmaPage } from '../../storybook/helpers';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';

export default {
  title: 'Blocks/Banner',
  component: Banner,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Banner') },
} as Meta<BannerProps>;

const Template: Story<BannerProps> = (args) => <Banner {...args} />;

export const Playground = Template.bind({});
Playground.args = {
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
};
Playground.decorators = [
  (Component, context) => (
    <Group>
      <Component {...context.args} />
    </Group>
  ),
  withCartesian,
  withSinglePanel,
  withVKUILayout,
];
