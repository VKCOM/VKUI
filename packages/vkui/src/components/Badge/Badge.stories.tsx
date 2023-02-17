import React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { Badge, BadgeProps } from './Badge';

const story: Meta<BadgeProps> = {
  title: 'Blocks/Badge',
  component: Badge,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Badge') },
  decorators: [withCartesian],
};

export default story;

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
