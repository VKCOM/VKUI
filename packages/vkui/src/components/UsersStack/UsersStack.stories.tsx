import React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import { getAvatarUrl } from '../../testing/mock';
import { UsersStack, UsersStackProps } from './UsersStack';

const story: Meta<UsersStackProps> = {
  title: 'Blocks/UsersStack',
  component: UsersStack,
  parameters: CanvasFullLayout,
  decorators: [withCartesian],
};

export default story;

const Template: Story<UsersStackProps> = (args) => <UsersStack {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  children: 'Алексей, Илья, Михаил и ещё 1 человек',
  photos: [getAvatarUrl(), getAvatarUrl(), getAvatarUrl(), getAvatarUrl()],
};
