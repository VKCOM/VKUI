import React from 'react';
import { Story, Meta } from '@storybook/react';
import { IconButton, IconButtonProps } from './IconButton';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Icon16Delete } from '@vkontakte/icons';

export default {
  title: 'Blocks/IconButton',
  component: IconButton,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
} as Meta<IconButtonProps>;

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  children: <Icon16Delete />,
};
