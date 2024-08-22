import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useFocusVisible } from '../../hooks/useFocusVisible';
import { useFocusVisibleClassName } from '../../hooks/useFocusVisibleClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { callMultiple } from '../../lib/callMultiple';
import type { HasRef, HasRootRef } from '../../types';
import { VisuallyHidden, type VisuallyHiddenProps } from '../VisuallyHidden/VisuallyHidden';
import styles from './Switch.module.css';

const sizeYClassNames = {
  none: styles['Switch--sizeY-none'],
  compact: styles['Switch--sizeY-compact'],
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
        styles['Switch'],
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        platform === 'ios' ? styles['Switch--ios'] : styles['Switch--default'],
        disabled && styles['Switch--disabled'],
        focusVisibleClassNames,
        className,
      )}
      style={style}
      ref={getRootRef}
    >
      <VisuallyHidden
        {...inputProps}
        className={styles['Switch__inputNative']}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <span aria-hidden className={styles['Switch__inputFake']}>
        <span className={styles['Switch__track']} />
        <span
          aria-hidden
          className={classNames(
            styles['Switch__handle'],
            platform !== 'ios' && !disabled && styles['Switch__handle--withRipple'],
          )}
        />
      </span>
    </label>
  );
};
