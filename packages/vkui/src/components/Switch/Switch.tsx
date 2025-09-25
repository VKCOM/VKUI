'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useConfigDirection } from '../../hooks/useConfigDirection';
import { useFocusVisible } from '../../hooks/useFocusVisible';
import { useFocusVisibleClassName } from '../../hooks/useFocusVisibleClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { callMultiple } from '../../lib/callMultiple';
import type { HasDataAttribute, HasRef, HasRootRef } from '../../types';
import { VisuallyHidden, type VisuallyHiddenProps } from '../VisuallyHidden/VisuallyHidden';
import styles from './Switch.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

type HiddenInputSwitchProps = Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  | 'id'
  | 'name'
  | 'value'
  | 'checked'
  | 'defaultChecked'
  | 'disabled'
  | 'required'
  | 'readOnly'
  | 'autoFocus'
  | 'onChange'
  | 'onInvalid'
  | 'onFocus'
  | 'onBlur'
  | 'onClick'
>;

export interface SwitchProps
  extends HiddenInputSwitchProps,
    Omit<React.LabelHTMLAttributes<HTMLLabelElement>, keyof HiddenInputSwitchProps>,
    HasRootRef<HTMLLabelElement>,
    HasRef<HTMLInputElement> {
  /**
   *
   */
  slotsProps?: {
    root?: React.LabelHTMLAttributes<HTMLLabelElement> & HasDataAttribute;
    input?: React.InputHTMLAttributes<HTMLInputElement> & HasDataAttribute;
  };
}

/**
 * @see https://vkui.io/components/switch
 */
export const Switch = ({
  style,
  className,
  getRootRef,
  getRef,
  onClick,

  // HiddenInputProps
  id,
  name,
  value,
  checked: checkedProp,
  defaultChecked,
  disabled,
  required,
  readOnly,
  autoFocus,
  onChange,
  onInvalid,
  onBlur: onBlurProp,
  onFocus: onFocusProp,
  slotsProps,
  ...restProps
}: SwitchProps): React.ReactNode => {
  const direction = useConfigDirection();
  const isRtl = direction === 'rtl';
  const platform = usePlatform();
  const { sizeY = 'none' } = useAdaptivity();
  const { focusVisible, onBlur, onFocus } = useFocusVisible();
  const focusVisibleClassNames = useFocusVisibleClassName({ focusVisible, mode: 'outside' });
  const handleBlur = callMultiple(onBlur, onBlurProp, slotsProps?.input?.onBlur);
  const handleFocus = callMultiple(onFocus, onFocusProp, slotsProps?.input?.onFocus);

  const [localUncontrolledChecked, setLocalUncontrolledChecked] = React.useState(
    Boolean(defaultChecked),
  );
  const isControlled = checkedProp !== undefined;

  const syncUncontrolledCheckedStateOnClick = React.useCallback(
    (e: React.MouseEvent<HTMLInputElement>) => {
      if (isControlled) {
        return;
      }

      const switchTarget = e.target as HTMLInputElement;
      setLocalUncontrolledChecked(switchTarget.checked);
    },
    [isControlled],
  );

  const inputProps: VisuallyHiddenProps<HTMLInputElement> = {
    id,
    name,
    value,
    checked: checkedProp,
    defaultChecked,
    disabled,
    required,
    readOnly,
    autoFocus,
    onChange,
    onInvalid,
    Component: 'input',
    getRootRef: getRef,
    type: 'checkbox',
    role: 'switch',
    onBlur: onBlurProp,
    onFocus: onFocusProp,
    onClick: callMultiple(syncUncontrolledCheckedStateOnClick, onClick),
  };

  if (isControlled) {
    inputProps.checked = checkedProp;
    inputProps['aria-checked'] = checkedProp ? 'true' : 'false';
  } else {
    inputProps['aria-checked'] = localUncontrolledChecked ? 'true' : 'false';
  }

  return (
    <label
      className={classNames(
        styles.host,
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        platform === 'ios' ? styles.ios : styles.default,
        disabled && styles.disabled,
        isRtl && styles.rtl,
        focusVisibleClassNames,
        className,
      )}
      style={style}
      ref={getRootRef}
      {...restProps}
      {...slotsProps?.root}
    >
      <VisuallyHidden
        {...inputProps}
        {...slotsProps?.input}
        className={classNames(styles.inputNative, slotsProps?.input?.className)}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <span aria-hidden className={styles.inputFake}>
        <span className={styles.track} />
        <span
          aria-hidden
          className={classNames(
            styles.handle,
            platform !== 'ios' && !disabled && styles.handleWithRipple,
          )}
        />
      </span>
    </label>
  );
};
