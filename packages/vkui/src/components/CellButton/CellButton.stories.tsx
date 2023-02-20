import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon28AddOutline } from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { CellButton, CellButtonProps } from './CellButton';

const story: Meta<CellButtonProps> = {
  title: 'Blocks/CellButton',
  component: CellButton,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

const Template: Story<CellButtonProps> = (args) => <CellButton {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  children: 'Создать беседу',
  before: <Icon28AddOutline />,
};
