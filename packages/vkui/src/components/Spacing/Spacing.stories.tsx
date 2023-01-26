import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Spacing, SpacingProps } from './Spacing';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Group } from '../Group/Group';
import { SimpleCell } from '../SimpleCell/SimpleCell';
import { Icon28BlockOutline, Icon28UserOutline } from '@vkontakte/icons';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Blocks/Spacing',
  component: Spacing,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Spacing'), ...DisableCartesianParam },
} as Meta<SpacingProps>;

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
