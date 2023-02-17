import React from 'react';
import { Meta, Story } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { Group } from '../Group/Group';
import {
  Playground as BasicRadio,
  WithDescription as RadioWithDescription,
} from '../Radio/Radio.stories';
import { RadioGroup, RadioGroupProps } from './RadioGroup';

const story: Meta<RadioGroupProps> = {
  title: 'Forms/RadioGroup',
  component: RadioGroup,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms'), ...DisableCartesianParam },
};

export default story;

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
