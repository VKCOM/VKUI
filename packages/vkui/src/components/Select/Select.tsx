'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivityConditionalRender } from '../../hooks/useAdaptivityConditionalRender';
import type { HasDataAttribute, HasOnlyExpectedProps, HasRootRef } from '../../types';
import { CustomSelect, type SelectProps } from '../CustomSelect/CustomSelect';
import { type CustomSelectOptionInterface } from '../CustomSelect/types';
import {
  type NativeHTMLSelectProps,
  NativeSelect,
  type NativeSelectProps,
} from '../NativeSelect/NativeSelect';
export type SelectType = 'default' | 'plain' | 'accent';

/**
 * @see https://vkui.io/components/select
 */
export const Select = <OptionT extends CustomSelectOptionInterface>({
  children,
  className,
  ...props
}: SelectProps<OptionT>): React.ReactNode => {
  const {
    options = [],
    searchable,
    emptyText,
    onInputChange,
    filterFn,
    popupDirection,
    renderOption,
    renderDropdown,
    fetching,
    onClose,
    onOpen,
    icon,
    ClearButton,
    allowClearButton,
    clearButtonTestId,
    dropdownOffsetDistance,
    dropdownAutoWidth,
    forceDropdownPortal,
    noMaxHeight,
    labelTextTestId,
    nativeSelectTestId,
    after,
    mode,
    pattern,
    minLength,
    maxLength,
    readOnly,
    getSelectInputRef,
    overscrollBehavior,
    beforeAlign,
    afterAlign,
    onInputKeyDown,
    accessible,
    fetchingCompletedLabel,
    fetchingInProgressLabel,

    slotProps,
    ...restProps
  } = props;

  const { deviceType } = useAdaptivityConditionalRender();

  const nativeProps: HasOnlyExpectedProps<typeof restProps, NativeSelectProps> = restProps;

  return (
    <React.Fragment>
      {deviceType.desktop && (
        <CustomSelect
          className={classNames(className, deviceType.desktop.className)}
          slotProps={slotProps}
          {...props}
        />
      )}
      {deviceType.mobile && (
        <NativeSelect
          className={classNames(className, deviceType.mobile.className)}
          slotProps={{
            select: {
              ...(slotProps?.input as NativeHTMLSelectProps &
                HasRootRef<HTMLSelectElement> &
                HasDataAttribute),
              ...slotProps?.select,
            },
            root: slotProps?.root,
          }}
          {...nativeProps}
        >
          {options.map(({ label, value, disabled }) => (
            <option value={value} key={`${value}`} disabled={disabled}>
              {label}
            </option>
          ))}
        </NativeSelect>
      )}
    </React.Fragment>
  );
};
