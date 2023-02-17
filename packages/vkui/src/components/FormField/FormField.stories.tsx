import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon16Clear, Icon28MessageOutline } from '@vkontakte/icons';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFigmaPage } from '../../storybook/helpers';
import { Group } from '../Group/Group';
import { IconButton } from '../IconButton/IconButton';
import { FormField, FormFieldProps } from './FormField';

const story: Meta<FormFieldProps> = {
  title: 'Forms/FormField',
  component: FormField,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms'), ...DisableCartesianParam },
};

export default story;

const Template: Story<FormFieldProps> = (args) => (
  <FormField {...args}>
    <input
      style={{
        position: 'relative',
        display: 'block',
        width: '100%',
        margin: 0,
        paddingRight: 12,
        paddingLeft: 12,
        fontSize: 16,
        lineHeight: '20px',
        textOverflow: 'ellipsis',
        color: '#000',
        border: 'none',
        background: 'transparent',
      }}
    />
  </FormField>
);

export const Playground = Template.bind({});
Playground.args = {
  before: (
    <IconButton>
      <Icon28MessageOutline />
    </IconButton>
  ),
  after: (
    <IconButton>
      <Icon16Clear />
    </IconButton>
  ),
};
Playground.decorators = [
  (Component, context) => (
    <Group>
      <Component {...context.args} />
    </Group>
  ),
  withSinglePanel,
  withVKUILayout,
];
