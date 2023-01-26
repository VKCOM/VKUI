import React from 'react';
import { Story, Meta } from '@storybook/react';
import { FormLayoutGroup, FormLayoutGroupProps } from './FormLayoutGroup';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { FormItem } from '../FormItem/FormItem';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Forms/FormLayoutGroup',
  component: FormLayoutGroup,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms'), ...DisableCartesianParam },
} as Meta<FormLayoutGroupProps>;

const Template: Story<FormLayoutGroupProps> = (args) => (
  <FormLayoutGroup {...args}>
    <FormItem top="Имя ящика">
      <Input />
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
);

export const Playground = Template.bind({});
Playground.args = {};
