import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Group } from '../Group/Group';
import { Radio as BasicRadio } from '../Radio/Radio';
import {
  Playground as BasicRadioStory,
  WithDescription as RadioWithDescriptionStory,
} from '../Radio/Radio.stories';
import { RadioGroup, RadioGroupProps } from './RadioGroup';

const story: Meta<RadioGroupProps> = {
  title: 'Forms/RadioGroup',
  component: RadioGroup,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<RadioGroupProps>;

export const Playground: Story = {
  render: function Render(args) {
    return (
      <RadioGroup {...args}>
        <BasicRadio {...BasicRadioStory.args}>SberPay</BasicRadio>
        <BasicRadio {...RadioWithDescriptionStory.args} />
      </RadioGroup>
    );
  },
  decorators: [
    (Component, context) => (
      <Group>
        <Component {...context.args} />
      </Group>
    ),
    withSinglePanel,
    withVKUILayout,
  ],
};
