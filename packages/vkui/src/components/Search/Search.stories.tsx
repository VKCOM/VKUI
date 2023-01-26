import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Search, SearchProps } from './Search';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Group } from '../Group/Group';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Blocks/Search',
  component: Search,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Search'), ...DisableCartesianParam },
} as Meta<SearchProps>;

const Template: Story<SearchProps> = (args) => <Search {...args} after={null} />;

export const Playground = Template.bind({});
Playground.args = {};
Playground.decorators = [
  (Component, context) => (
    <Group>
      <Component {...context.args} />
    </Group>
  ),
  withSinglePanel,
  withVKUILayout,
];
