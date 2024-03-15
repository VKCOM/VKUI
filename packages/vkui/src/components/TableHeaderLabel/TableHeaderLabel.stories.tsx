// import * as React from 'react';
import type { Meta } from '@storybook/react';
import { withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { TableHeaderLabel, type TableHeaderLabelProps } from './TableHeaderLabel';

const story: Meta<TableHeaderLabelProps> = {
  title: 'Layout/TableHeaderLabel',
  component: TableHeaderLabel,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  decorators: [withVKUILayout],
};

export default story;
