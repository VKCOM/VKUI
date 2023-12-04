import * as React from 'react';
import { Chip } from './Chip/Chip';
import type { ChipOption, ChipValue, RenderChipProps } from './types';

export const DEFAULT_VALUE = [];

export const DEFAULT_INPUT_VALUE = '';

export const DEFAULT_INPUT_ARIA_LABEL = 'Введите ваше значение...';

export function getOptionValueDefault<O extends ChipOption>(option: O) {
  return option.value;
}

export function getOptionLabelDefault<O extends ChipOption>(option: O) {
  return option.label;
}

export function getNewOptionDataDefault<O extends ChipOption>(value: ChipValue, label: string): O {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  return {
    value,
    label,
  } as O;
}

export function renderChipDefault(props: RenderChipProps): React.ReactNode {
  const { disabled, label, ...rest } = props;
  return (
    <Chip removable={!disabled} {...rest}>
      {label}
    </Chip>
  );
}
