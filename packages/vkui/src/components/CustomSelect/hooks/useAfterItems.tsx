'use client';

import * as React from 'react';
import { useStableCallback } from '../../../hooks/useStableCallback';
import { DropdownIcon } from '../../DropdownIcon/DropdownIcon';
import { type NativeSelectValue, NOT_SELECTED } from '../../NativeSelect/NativeSelect';
import { type SelectProps } from '../CustomSelect';
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
}: UseAfterItemsProps) {
  const onClearButtonClickCb = useStableCallback(onClearButtonClick);

  const controlledValueSet = isControlledOutside && value !== NOT_SELECTED.CUSTOM;
  const uncontrolledValueSet = !isControlledOutside && nativeSelectValue !== NOT_SELECTED.NATIVE;
  const clearButtonShown =
    allowClearButton && !opened && (controlledValueSet || uncontrolledValueSet);

  const clearButton = React.useMemo(() => {
    if (!clearButtonShown) {
      return null;
    }

    return (
      <ClearButton
        className={iconProp === undefined ? styles.clearIcon : undefined}
        onClick={onClearButtonClickCb}
        disabled={disabled}
        data-testid={clearButtonTestId}
      />
    );
  }, [clearButtonShown, ClearButton, iconProp, onClearButtonClickCb, disabled, clearButtonTestId]);

  const icon = React.useMemo(() => {
    if (iconProp !== undefined) {
      return iconProp;
    }

    return (
      <DropdownIcon
        className={clearButtonShown ? styles.dropdownIcon : undefined}
        opened={opened}
      />
    );
  }, [clearButtonShown, iconProp, opened]);

  return React.useMemo(
    () =>
      !readOnly &&
      (icon || clearButtonShown) && (
        <React.Fragment>
          {clearButton}
          {icon}
        </React.Fragment>
      ),
    [clearButton, clearButtonShown, icon, readOnly],
  );
}
