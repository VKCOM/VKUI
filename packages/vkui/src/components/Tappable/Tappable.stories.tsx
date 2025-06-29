import type { Meta, StoryObj } from '@storybook/react';
import { noop } from '@vkontakte/vkjs';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Tappable, type TappableProps } from './Tappable';

const story: Meta<TappableProps> = {
  title: 'Utils/Tappable',
  component: Tappable,
  parameters: createStoryParameters('Tappable', CanvasFullLayout, DisableCartesianParam),
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
