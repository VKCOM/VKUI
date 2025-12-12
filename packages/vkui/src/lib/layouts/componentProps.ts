import { DESIGN_SYSTEM_SIZES } from '../spacings/sizes';
import { type PropDescriptor } from './types';

const ALIGN_VALUES = ['start', 'end', 'center', 'stretch', 'baseline'] as const;

const FLEX_PROPS: Record<string, PropDescriptor> = {
  justify: {
    type: 'static',
    values: ['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly'],
    propName: 'justify-content',
  },
  direction: {
    type: 'static',
    values: ['row', 'row-reverse', 'column', 'column-reverse'],
    propName: 'flex-direction',
  },
  noWrap: {
    type: 'static',
    class: 'flex-wrap',
    propName: 'flex-wrap',
  },
  alignSelf: {
    type: 'static',
    values: ALIGN_VALUES,
    propName: 'align-self',
  },
};

const GRID_PROPS: Record<string, PropDescriptor> = {
  columns: {
    type: 'dynamic',
    class: 'grid-columns',
    propName: 'grid_columns',
  },
  minColWidth: {
    type: 'dynamic',
    propName: 'min_col_width',
  },
};

export const COMPONENTS_PROPS: Record<string, PropDescriptor> = {
  align: {
    type: 'static',
    values: ALIGN_VALUES,
    propName: 'align-items',
  },
  ...FLEX_PROPS,
  ...GRID_PROPS,
  gap: DESIGN_SYSTEM_SIZES,
  size: {
    type: 'dynamic',
    class: 'spacing',
    values: DESIGN_SYSTEM_SIZES,
    propName: 'spacing_size',
  },
  display: {
    type: 'static',
    values: [
      'none',
      'inline',
      'inline-block',
      'block',
      'contents',
      'flex',
      'grid',
      'inline-grid',
      'inline-flex',
    ],
  },
};

export type ComponentsPropKeys = keyof typeof COMPONENTS_PROPS;
