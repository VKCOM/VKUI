import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DisableCartesianParam } from '../../storybook/constants';
import { Button } from '../Button/Button';
import { TextTooltip, TextTooltipProps } from './TextTooltip';

const story: Meta<TextTooltipProps> = {
  title: 'Poppers/TextTooltip',
  component: TextTooltip,
  parameters: DisableCartesianParam,
};

export default story;

type Story = StoryObj<TextTooltipProps>;

export const Playground: Story = {
  render: (args) => (
    <TextTooltip {...args}>
      <Button style={{ margin: 20 }}>Наведи</Button>
    </TextTooltip>
  ),
  args: {
    text: 'Привет',
  },
};
