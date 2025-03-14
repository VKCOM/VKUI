import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import type { HasComponent, HasRootRef } from '../../types';
import { VisuallyHidden } from './VisuallyHidden';

interface VisuallyHiddenProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement>,
    HasComponent {}

const story: Meta<VisuallyHiddenProps> = {
  title: 'Service/VisuallyHidden',
  component: VisuallyHidden,
  parameters: createStoryParameters('VisuallyHidden', CanvasFullLayout, DisableCartesianParam),
};

export default story;

export const Playground: StoryObj<VisuallyHiddenProps> = {
  render: (props) => <VisuallyHidden {...props} />,
  args: {
    children: 'Этот текст скрыт визуально, но доступен для ассистивных технологий!',
  },
};
