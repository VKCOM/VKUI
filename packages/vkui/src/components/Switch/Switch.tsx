'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useConfigDirection } from '../../hooks/useConfigDirection';
import { useFocusVisible } from '../../hooks/useFocusVisible';
import { useFocusVisibleClassName } from '../../hooks/useFocusVisibleClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { callMultiple } from '../../lib/callMultiple';
import type { HasRef, HasRootRef } from '../../types';
import { VisuallyHidden, type VisuallyHiddenProps } from '../VisuallyHidden/VisuallyHidden';
import styles from './Switch.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

export interface SwitchProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRootRef<HTMLLabelElement>,
    HasRef<HTMLInputElement> {}

/**
 * @see https://vkcom.github.io/VKUI/#/Switch
 */
export const Switch = ({
  style,
  className,
  getRootRef,
  getRef,
  checked: checkedProp,
  disabled,
  onBlur: onBlurProp,
  onFocus: onFocusProp,
  onClick,
  ...restProps
}: SwitchProps): React.ReactNode => {
  const direction = useConfigDirection();
  const isRtl = direction === 'rtl';
  const platform = usePlatform();
  const { sizeY = 'none' } = useAdaptivity();
  const { focusVisible, onBlur, onFocus } = useFocusVisible();
  const focusVisibleClassNames = useFocusVisibleClassName({ focusVisible, mode: 'outside' });
  const handleBlur = callMultiple(onBlur, onBlurProp);
  const handleFocus = callMultiple(onFocus, onFocusProp);

  const [localUncontrolledChecked, setLocalUncontrolledChecked] = React.useState(
    Boolean(restProps.defaultChecked),
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
    ...restProps,
    Component: 'input',
    getRootRef: getRef,
    type: 'checkbox',
    role: 'switch',
    disabled: disabled,
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
    >
      <VisuallyHidden
        {...inputProps}
        className={styles.inputNative}
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
