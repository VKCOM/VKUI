import React, { AllHTMLAttributes } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { HasComponent, HasRootRef } from '../../types';
import { VisuallyHidden } from './VisuallyHidden';

interface VisuallyHiddenProps
  extends AllHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement>,
    HasComponent {}

const story: Meta<VisuallyHiddenProps> = {
  title: 'Helpers/VisuallyHidden',
  component: VisuallyHidden,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

export const Playground: StoryObj<VisuallyHiddenProps> = {
  render: (props) => <VisuallyHidden {...props} />,
  args: {
    children: 'Этот текст скрыт визуально, но доступен для ассистивных технологий!',
  },
};
