import type { Meta, StoryObj } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Group } from '../Group/Group';
import { Radio as BasicRadio } from '../Radio/Radio';
import {
  Playground as BasicRadioStory,
  WithDescription as RadioWithDescriptionStory,
} from '../Radio/Radio.stories';
import { RadioGroup, type RadioGroupProps } from './RadioGroup';

const story: Meta<RadioGroupProps> = {
  title: 'Layout/RadioGroup',
  component: RadioGroup,
  parameters: createStoryParameters('RadioGroup', CanvasFullLayout, DisableCartesianParam),
  tags: ['Раскладка'],
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
