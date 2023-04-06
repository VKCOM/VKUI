import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, StoryObj } from '@storybook/react';
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

type Story = StoryObj<UsersStackProps>;

export const Playground: Story = {
  args: {
    children: 'Алексей, Илья, Михаил и ещё 1 человек',
    photos: [getAvatarUrl(), getAvatarUrl(), getAvatarUrl(), getAvatarUrl()],
    layout: undefined,
  },
};
