import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Badge, BadgeProps } from './Badge';
import { CanvasFullLayout } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';

export default {
  title: 'Blocks/Badge',
  component: Badge,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Badge') },
  decorators: [withCartesian],
} as Meta<BadgeProps>;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Playground = Template.bind({});
Playground.args = {};

export const NewMode = Template.bind({});
NewMode.args = {
  mode: 'new',
};

export const ProminentMode = Template.bind({});
ProminentMode.args = {
  mode: 'prominent',
};
