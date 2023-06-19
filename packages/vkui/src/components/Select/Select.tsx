import * as React from 'react';
import { useAdaptivityHasPointer } from '../../hooks/useAdaptivityHasPointer';
import { CustomSelect, SelectProps } from '../CustomSelect/CustomSelect';
import { NativeSelect } from '../NativeSelect/NativeSelect';

export type SelectType = 'default' | 'plain' | 'accent';

/**
 * @see https://vkcom.github.io/VKUI/#/Select
 */
export const Select = ({ children, ...props }: SelectProps) => {
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
    dropdownOffsetDistance,
    fixDropdownWidth,
    forceDropdownPortal,
    selectType,
    autoHideScrollbar,
    autoHideScrollbarDelay,
    ...nativeProps // TODO: https://github.com/Microsoft/TypeScript/issues/12936
  } = props;

  const hasPointer = useAdaptivityHasPointer();

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
