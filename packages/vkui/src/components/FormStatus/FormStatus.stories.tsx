import React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, Story } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import { FormStatus, FormStatusProps } from './FormStatus';

const story: Meta<FormStatusProps> = {
  title: 'Forms/FormStatus',
  component: FormStatus,
  parameters: CanvasFullLayout,
  decorators: [withCartesian],
};

export default story;

const Template: Story<FormStatusProps> = (args) => <FormStatus {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  mode: 'error',
  header: 'Некорректный мобильный номер',
  children: 'Необходимо корректно ввести номер в международном формате',
};
