import React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Story, Meta } from '@storybook/react';
import { UsersStack, UsersStackProps } from './UsersStack';
import { CanvasFullLayout } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { getAvatarUrl } from '../../testing/mock';

export default {
  title: 'Blocks/UsersStack',
  component: UsersStack,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('UsersStack') },
  decorators: [withCartesian],
} as Meta<UsersStackProps>;

const Template: Story<UsersStackProps> = (args) => <UsersStack {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  children: 'Алексей, Илья, Михаил и ещё 1 человек',
  photos: [getAvatarUrl(), getAvatarUrl(), getAvatarUrl(), getAvatarUrl()],
};
