import React from 'react';
import { Story, Meta } from '@storybook/react';
import { FormStatus, FormStatusProps } from './FormStatus';
import { CanvasFullLayout } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';

export default {
  title: 'Forms/FormStatus',
  component: FormStatus,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms') },
  decorators: [withCartesian],
} as Meta<FormStatusProps>;

const Template: Story<FormStatusProps> = (args) => <FormStatus {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  mode: 'error',
  header: 'Некорректный мобильный номер',
  children: 'Необходимо корректно ввести номер в международном формате',
};
