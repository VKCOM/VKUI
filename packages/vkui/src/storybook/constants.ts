import type { InputType } from '@storybook/types';

export const CanvasFullLayout = {
  layout: 'fullscreen',
  centered: true,
};

export const DisableCartesianParam = {
  cartesian: {
    disable: true,
  },
};

export const StringArg: InputType = {
  control: 'text',
};
