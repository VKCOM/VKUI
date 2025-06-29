import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { FloatingArrow, type FloatingArrowProps } from './FloatingArrow';

const story: Meta<FloatingArrowProps> = {
  title: 'Utils/FloatingArrow',
  component: FloatingArrow,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<FloatingArrowProps>;

export const Playground: Story = {
  args: {
    placement: 'top-end',
    isStaticOffset: true,
  },
  decorators: [
    (Component) => (
      <div
        style={{
          width: 60,
          height: 30,
          position: 'absolute',
          insetBlockStart: '50%',
          insetInlineStart: '50%',
          transform: 'translate(-50%,-50%)',
          border: '1px dashed black',
          borderRadius: '4px',
        }}
      >
        <Component />
      </div>
    ),
  ],
};
