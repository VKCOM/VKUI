import React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, Story } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { Button } from '../Button/Button';
import { Group } from '../Group/Group';
import { Image } from '../Image/Image';
import { Banner, BannerProps } from './Banner';

const story: Meta<BannerProps> = {
  title: 'Blocks/Banner',
  component: Banner,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Banner') },
};

export default story;

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
