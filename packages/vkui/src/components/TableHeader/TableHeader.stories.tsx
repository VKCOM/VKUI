// import * as React from 'react';
import type { Meta } from '@storybook/react';
import { withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { TableHeader, type TableHeaderProps } from './TableHeader';

const story: Meta<TableHeaderProps> = {
  title: 'Layout/TableHeader',
  component: TableHeader,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  decorators: [withVKUILayout],
};

export default story;
