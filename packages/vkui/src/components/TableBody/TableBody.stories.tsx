// import * as React from 'react';
import type { Meta } from '@storybook/react';
import { withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { TableBody, type TableBodyProps } from './TableBody';

const story: Meta<TableBodyProps> = {
  title: 'Layout/TableBody',
  component: TableBody,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  decorators: [withVKUILayout],
};

export default story;
