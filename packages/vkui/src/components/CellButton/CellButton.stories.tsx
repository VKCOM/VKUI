import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CellButton, CellButtonProps } from './CellButton';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Icon28AddOutline } from '@vkontakte/icons';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Blocks/CellButton',
  component: CellButton,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('CellButton'), ...DisableCartesianParam },
} as Meta<CellButtonProps>;

const Template: Story<CellButtonProps> = (args) => <CellButton {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  children: 'Создать беседу',
  before: <Icon28AddOutline />,
};
