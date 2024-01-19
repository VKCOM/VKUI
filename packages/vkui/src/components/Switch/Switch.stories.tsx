import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SimpleCell } from '../../components/SimpleCell/SimpleCell';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Switch, SwitchProps } from './Switch';

const story: Meta<SwitchProps> = {
  title: 'Blocks/Switch',
  component: Switch,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
};

export default story;

type Story = StoryObj<SwitchProps>;

export const Playground: Story = {};

export const WithSimpleCellLabel: Story = {
  render: function Render(args) {
    return (
      <SimpleCell Component="label" after={<Switch {...args} />}>
        Комментарии к записям
      </SimpleCell>
    );
  },
};
