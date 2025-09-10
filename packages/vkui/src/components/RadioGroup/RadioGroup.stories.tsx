import type { Meta, StoryObj } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Group } from '../Group/Group';
import { Radio } from '../Radio/Radio';
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
        <Radio name="payment">SberPay</Radio>
        <Radio name="payment" description="Баланс 7 320 ₽">
          VK Pay
        </Radio>
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
