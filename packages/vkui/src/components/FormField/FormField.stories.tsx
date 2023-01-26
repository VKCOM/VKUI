import React from 'react';
import { Story, Meta } from '@storybook/react';
import { FormField, FormFieldProps } from './FormField';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { IconButton } from '../IconButton/IconButton';
import { Icon16Clear, Icon28MessageOutline } from '@vkontakte/icons';
import { Group } from '../Group/Group';
import { getFigmaPage } from '../../storybook/helpers';

export default {
  title: 'Forms/FormField',
  component: FormField,
  parameters: { ...CanvasFullLayout, ...getFigmaPage('Forms'), ...DisableCartesianParam },
} as Meta<FormFieldProps>;

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
