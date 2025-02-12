import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { PopoutWrapper, type PopoutWrapperProps } from './PopoutWrapper';

const story: Meta<PopoutWrapperProps> = {
  title: 'Popouts/PopoutWrapper',
  component: PopoutWrapper,
  parameters: {
    ...CanvasFullLayout,
    ...DisableCartesianParam,
  },
};

export default story;

type Story = StoryObj<PopoutWrapperProps>;

export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 500, height: 500, position: 'relative' }}>
      <PopoutWrapper {...args} />
    </div>
  ),
  args: {
    children: 'Some content',
  },
};
