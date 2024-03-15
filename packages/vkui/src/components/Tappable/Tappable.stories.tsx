import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { noop } from '@vkontakte/vkjs';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Tappable, TappableProps } from './Tappable';

const story: Meta<TappableProps> = {
  title: 'Blocks/Tappable',
  component: Tappable,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<TappableProps>;

export const Playground: Story = {
  render: (args) => (
    <Tappable {...args} onClick={noop}>
      <div style={{ padding: 16 }}>Кнопка</div>
    </Tappable>
  ),
};
