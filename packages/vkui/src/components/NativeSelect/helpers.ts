import type * as React from 'react';

export type SelectValue = Exclude<
  React.SelectHTMLAttributes<HTMLSelectElement>['value'],
  undefined
> | null;

export type NativeSelectValue = Exclude<SelectValue, null>;

export const NOT_SELECTED = {
  NATIVE: '__vkui_internal_Select_not_selected__',
  CUSTOM: null,
};

/**
 * @visibleName NativeSelect
 */
export const remapFromSelectValueToNativeValue = (value: SelectValue): NativeSelectValue =>
  value === NOT_SELECTED.CUSTOM ? NOT_SELECTED.NATIVE : value;

export const remapFromNativeValueToSelectValue = (value: NativeSelectValue): SelectValue =>
  value === NOT_SELECTED.NATIVE ? NOT_SELECTED.CUSTOM : value;
