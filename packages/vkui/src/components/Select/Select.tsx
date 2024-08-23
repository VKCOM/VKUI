import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivityConditionalRender } from '../../hooks/useAdaptivityConditionalRender';
import type { HasOnlyExpectedProps } from '../../types';
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
    autoHideScrollbar,
    autoHideScrollbarDelay,
    labelTextTestId,
    nativeSelectTestId,
    after,
    mode,
    getSelectInputRef,
    overscrollBehavior,
    beforeAlign,
    afterAlign,
    ...restProps
  } = props;

  const { deviceType } = useAdaptivityConditionalRender();

  const nativeProps: HasOnlyExpectedProps<typeof restProps, NativeSelectProps> = restProps;

  return (
    <React.Fragment>
      {deviceType.desktop && (
        <CustomSelect className={classNames(className, deviceType.desktop.className)} {...props} />
      )}
      {deviceType.mobile && (
        <NativeSelect
          className={classNames(className, deviceType.mobile.className)}
          {...nativeProps}
        >
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
