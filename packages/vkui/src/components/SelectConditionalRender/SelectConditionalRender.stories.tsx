import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { SelectProps } from '../CustomSelect/CustomSelect';
import { SelectConditionalRender } from './SelectConditionalRender';

const story: Meta<SelectProps> = {
  title: 'Forms/SelectConditionalRenderRender',
  component: SelectConditionalRender,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<SelectProps>;

export const Playground: Story = {
  args: {
    style: { width: 300 },
  },
};
