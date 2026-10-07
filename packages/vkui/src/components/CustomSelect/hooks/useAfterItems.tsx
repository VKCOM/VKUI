'use client';

import * as React from 'react';
import { useStableCallback } from '../../../hooks/useStableCallback';
import { DropdownIcon } from '../../DropdownIcon/DropdownIcon';
import { type NativeSelectValue, NOT_SELECTED } from '../../NativeSelect/NativeSelect';
import type { SelectProps } from '../CustomSelect';
import { CustomSelectClearButton } from '../CustomSelectClearButton';
import styles from '../CustomSelect.module.css';

/* eslint-disable jsdoc/require-jsdoc */
interface UseAfterItemsProps
  extends Pick<
    SelectProps,
    | 'value'
    | 'allowClearButton'
    | 'icon'
    | 'readOnly'
    | 'disabled'
    | 'ClearButton'
    | 'clearButtonTestId'
  > {
  isControlledOutside: boolean;
  nativeSelectValue: NativeSelectValue;
  opened: boolean;
  onClearButtonClick: () => void;
  searchable: boolean;
  inputValue: string;
  onInputClear: () => void;
}
/* eslint-enable jsdoc/require-jsdoc */

export function useAfterItems({
  value,
  nativeSelectValue,
  isControlledOutside,
  opened,
  allowClearButton,
  ClearButton = CustomSelectClearButton,
  onClearButtonClick,
  clearButtonTestId,
  disabled,
  readOnly,
  icon: iconProp,
  searchable,
  inputValue,
  onInputClear,
}: UseAfterItemsProps) {
  const onClearButtonClickCb = useStableCallback(onClearButtonClick);
  const onInputClearCb = useStableCallback(onInputClear);

  const controlledValueSet = isControlledOutside && value !== NOT_SELECTED.CUSTOM;
  const uncontrolledValueSet = !isControlledOutside && nativeSelectValue !== NOT_SELECTED.NATIVE;
  const valueSet = controlledValueSet || uncontrolledValueSet;
  const hasInputValue = searchable && opened && inputValue.length > 0;
  const clearButtonShown = allowClearButton && !opened && valueSet;
  const inputClearButtonShown = allowClearButton && hasInputValue;

  const clearButton = React.useMemo(() => {
    if (!clearButtonShown && !inputClearButtonShown) {
      return null;
    }

    return (
      <ClearButton
        className={iconProp === undefined ? styles.clearIcon : undefined}
        onClick={inputClearButtonShown ? onInputClearCb : onClearButtonClickCb}
        disabled={disabled}
        data-testid={clearButtonTestId}
      />
    );
  }, [
    clearButtonShown,
    inputClearButtonShown,
    ClearButton,
    iconProp,
    onInputClearCb,
    onClearButtonClickCb,
    disabled,
    clearButtonTestId,
  ]);

  const icon = React.useMemo(() => {
    if (iconProp !== undefined) {
      return iconProp;
    }

    return (
      <DropdownIcon
        className={clearButtonShown || inputClearButtonShown ? styles.dropdownIcon : undefined}
        opened={opened}
      />
    );
  }, [clearButtonShown, inputClearButtonShown, iconProp, opened]);

  return React.useMemo(
    () =>
      !readOnly &&
      (icon || clearButtonShown || inputClearButtonShown) && (
        <React.Fragment>
          {clearButton}
          {icon}
        </React.Fragment>
      ),
    [clearButton, clearButtonShown, inputClearButtonShown, icon, readOnly],
  );
}
