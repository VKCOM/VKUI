// import * as React from 'react';
import type { Meta } from '@storybook/react';
import { withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { TableFooter, type TableFooterProps } from './TableFooter';

const story: Meta<TableFooterProps> = {
  title: 'Layout/TableFooter',
  component: TableFooter,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  decorators: [withVKUILayout],
};

export default story;
