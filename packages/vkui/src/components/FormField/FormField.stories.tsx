import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Icon16Clear, Icon28MessageOutline } from '@vkontakte/icons';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Group } from '../Group/Group';
import { IconButton } from '../IconButton/IconButton';
import { FormField, FormFieldProps } from './FormField';

const story: Meta<FormFieldProps> = {
  title: 'Forms/FormField',
  component: FormField,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<FormFieldProps>;

export const Playground: Story = {
  render: (args) => (
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
  ),
  args: {
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
  },
  decorators: [
    (Component, context) => (
      <Group>
        <Component {...context.args} />
      </Group>
    ),
    withSinglePanel,
    withVKUILayout,
  ],
};
