import type { Meta, StoryObj } from '@storybook/react';
import { SimpleCell } from '../../components/SimpleCell/SimpleCell';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Switch, type SwitchProps } from './Switch';

const story: Meta<SwitchProps> = {
  title: 'Forms/Switch',
  component: Switch,
  parameters: createStoryParameters('Switch', CanvasFullLayout, DisableCartesianParam),
  args: {
    name: 'switch',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
};

export default story;

type Story = StoryObj<SwitchProps>;

export const Playground: Story = {
  args: {
    'aria-label': 'Комментарии к записям',
  },
};

export const WithSimpleCellLabel: Story = {
  render: function Render(args) {
    return (
      <SimpleCell Component="label" after={<Switch {...args} />}>
        Комментарии к записям
      </SimpleCell>
    );
  },
};
