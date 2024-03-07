import * as React from 'react';
import { useAdaptivityHasPointer } from '../../hooks/useAdaptivityHasPointer';
import { HasOnlyExpectedProps } from '../../types';
import {
  CustomSelect,
  type CustomSelectOptionInterface,
  type SelectProps,
} from '../CustomSelect/CustomSelect';
import { NativeSelect, type NativeSelectProps } from '../NativeSelect/NativeSelect';
export type SelectType = 'default' | 'plain' | 'accent';

/**
 * @see https://vkcom.github.io/VKUI/#/Select
 */
export const Select = <OptionT extends CustomSelectOptionInterface>({
  children,
  ...props
}: SelectProps<OptionT>) => {
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
    autoHideScrollbar,
    autoHideScrollbarDelay,
    labelTextTestId,
    nativeSelectTestId,
    after,
    mode,
    ...restProps
  } = props;

  const hasPointer = useAdaptivityHasPointer();

  const nativeProps: HasOnlyExpectedProps<typeof restProps, NativeSelectProps> = restProps;

  return (
    <React.Fragment>
      {(hasPointer === undefined || hasPointer) && <CustomSelect {...props} />}
      {(hasPointer === undefined || !hasPointer) && (
        <NativeSelect {...nativeProps}>
          {options.map(({ label, value }) => (
            <option value={value} key={`${value}`}>
              {label}
            </option>
          ))}
        </NativeSelect>
      )}
    </React.Fragment>
  );
};
