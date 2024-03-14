import * as React from 'react';
import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import type { PartialStoryFn } from '@storybook/types';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { CustomSelectOption, CustomSelectOptionProps } from './CustomSelectOption';

const withListBox = (Story: PartialStoryFn<ReactRenderer>) => (
  <div role="listbox" aria-label="Список администраторов">
    <Story />
  </div>
);

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
  decorators: [withListBox],
};
