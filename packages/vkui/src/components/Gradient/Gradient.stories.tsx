import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Gradient, GradientProps } from './Gradient';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Blocks/Gradient',
  component: Gradient,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Gradient'), ...DisableCartesianParam },
} as Meta<GradientProps>;

const Template: Story<GradientProps> = (args) => <Gradient {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  children: <div style={{ width: '100%', height: '200px' }} />,
};
Playground.decorators = [
  (Component, context) => (
    <div style={{ width: '50%', height: '50%' }}>
      <Component args={context.args} />
    </div>
  ),
];
