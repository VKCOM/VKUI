import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { PopoutWrapper, type PopoutWrapperProps } from './PopoutWrapper';

const story: Meta<PopoutWrapperProps> = {
  title: 'Utils/PopoutWrapper',
  component: PopoutWrapper,
  parameters: createStoryParameters('PopoutWrapper', CanvasFullLayout, DisableCartesianParam),
  tags: ['Утилиты'],
};

export default story;

export const Playground: StoryObj<PopoutWrapperProps> = (args: PopoutWrapperProps) => (
  <div
    style={{
      width: 500,
      height: 500,
      position: 'relative',
    }}
  >
    <PopoutWrapper {...args} />
  </div>
);

Playground.args = {
  children: 'Some content',
};
