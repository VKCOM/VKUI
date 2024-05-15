// import * as React from 'react';
import type { Meta } from '@storybook/react';
import { withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { TableRow, type TableRowProps } from './TableRow';

const story: Meta<TableRowProps> = {
  title: 'Layout/TableRow',
  component: TableRow,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  decorators: [withVKUILayout],
};

export default story;
