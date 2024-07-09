import * as React from 'react';
import { Chip } from './Chip/Chip';
import type { ChipOption, ChipOptionLabel, ChipOptionValue, RenderChipProps } from './types';

export const DEFAULT_VALUE: never[] = [];

export const DEFAULT_INPUT_VALUE = '';

export function getOptionValueDefault<O extends ChipOption>(option: O): ChipOptionValue {
  return option.value;
}

export function getOptionLabelDefault<O extends ChipOption>(option: O): ChipOptionLabel {
  return option.label;
}

export function getNewOptionDataDefault<O extends ChipOption>(
  value: ChipOptionValue,
  label: ChipOptionLabel,
): O {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  return {
    value,
    label,
  } as O;
}

export function renderChipDefault(props: RenderChipProps): React.ReactNode {
  const { label, ...rest } = props;
  return (
    <Chip removable={!props.disabled} {...rest}>
      {label}
    </Chip>
  );
}
