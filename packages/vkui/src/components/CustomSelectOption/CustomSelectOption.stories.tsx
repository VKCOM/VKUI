import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { CustomSelectOption, CustomSelectOptionProps } from './CustomSelectOption';

const story: Meta<CustomSelectOptionProps> = {
  title: 'Forms/CustomSelectOption',
  component: CustomSelectOption,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<CustomSelectOptionProps>;

export const Playground: Story = {
  args: {
    style: { width: 300 },
    children: 'Игорь Федоров',
    description: 'Россия, Санкт-Петербург',
  },
};
