import type { Meta, StoryObj } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getFormFieldIconsPresets } from '../../testing/presets/getFormFieldIconsPresets';
import { Group } from '../Group/Group';
import { FormField, type FormFieldProps } from './FormField';

const iconsPresets = getFormFieldIconsPresets();

const story: Meta<FormFieldProps> = {
  title: 'Forms/FormField',
  component: FormField,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  argTypes: {
    before: iconsPresets,
    after: iconsPresets,
  },
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
    before: 'MessageButton',
    after: 'DeleteIconButton',
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
