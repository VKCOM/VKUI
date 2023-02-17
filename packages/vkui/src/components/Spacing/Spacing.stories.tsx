import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon28BlockOutline, Icon28UserOutline } from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { Group } from '../Group/Group';
import { SimpleCell } from '../SimpleCell/SimpleCell';
import { Spacing, SpacingProps } from './Spacing';

const story: Meta<SpacingProps> = {
  title: 'Blocks/Spacing',
  component: Spacing,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Spacing'), ...DisableCartesianParam },
};

export default story;

const Template: Story<SpacingProps> = (args) => <Spacing {...args} />;

export const Playground = Template.bind({});
Playground.args = {};
Playground.decorators = [
  (Component) => (
    <div>
      Before Space
      <Component />
      After Space
    </div>
  ),
];

export const Example = Template.bind({});
Example.args = {};
Example.decorators = [
  (Component) => (
    <Group>
      <SimpleCell before={<Icon28BlockOutline />}>Не беспокоить</SimpleCell>
      <Component />
      <SimpleCell before={<Icon28UserOutline />}>Учётная запись</SimpleCell>
    </Group>
  ),
];
