import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon16Delete } from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { IconButton, IconButtonProps } from './IconButton';

const story: Meta<IconButtonProps> = {
  title: 'Blocks/IconButton',
  component: IconButton,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  children: <Icon16Delete />,
};
