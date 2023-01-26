import React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Story, Meta } from '@storybook/react';
import { Spinner, SpinnerProps } from './Spinner';
import { CanvasFullLayout } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Blocks/Spinner',
  component: Spinner,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('ScreenSpinner') },
  decorators: [withCartesian],
} as Meta<SpinnerProps>;

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Playground = Template.bind({});
Playground.args = {};
