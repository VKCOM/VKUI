import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { SegmentedControl, type SegmentedControlProps } from './SegmentedControl';

const story: Meta<SegmentedControlProps> = {
  title: 'Forms/SegmentedControl',
  component: SegmentedControl,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  args: { onChange: fn() },
};

export default story;

type Story = StoryObj<SegmentedControlProps>;

export const Playground: Story = {
  args: {
    options: [
      {
        label: 'Баг',
        value: 'bug',
      },
      {
        label: 'Идея',
        value: 'idea',
      },
      {
        label: 'Другое',
        value: 'other',
      },
    ],
  },
  decorators: [
    (Component) => (
      <div style={{ width: '100%' }}>
        <Component />
      </div>
    ),
  ],
};
