import React from 'react';
import { Story, Meta } from '@storybook/react';
import { RadioGroup, RadioGroupProps } from './RadioGroup';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import {
  Playground as BasicRadio,
  WithDescription as RadioWithDescription,
} from '../Radio/Radio.stories';
import { Group } from '../Group/Group';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Forms/RadioGroup',
  component: RadioGroup,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms'), ...DisableCartesianParam },
} as Meta<RadioGroupProps>;

const Template: Story<RadioGroupProps> = (args) => (
  <RadioGroup {...args}>
    <BasicRadio {...BasicRadio.args}>SberPay</BasicRadio>
    <RadioWithDescription {...RadioWithDescription.args} />
  </RadioGroup>
);

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
