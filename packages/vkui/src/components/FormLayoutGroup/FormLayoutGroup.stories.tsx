import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { FormItem } from '../FormItem/FormItem';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import { FormLayoutGroup, FormLayoutGroupProps } from './FormLayoutGroup';

const story: Meta<FormLayoutGroupProps> = {
  title: 'Forms/FormLayoutGroup',
  component: FormLayoutGroup,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<FormLayoutGroupProps>;

export const Playground: Story = {
  render: (args) => (
    <FormLayoutGroup {...args}>
      <FormItem htmlFor="name" top="Имя ящика">
        <Input id="name" />
      </FormItem>
      <FormItem>
        <Select
          options={['@mail.ru', '@internet.ru', '@bk.ru', '@inbox.ru', '@list.ru'].map((i) => ({
            label: i,
            value: i,
          }))}
          defaultValue="@mail.ru"
        />
      </FormItem>
    </FormLayoutGroup>
  ),
};
