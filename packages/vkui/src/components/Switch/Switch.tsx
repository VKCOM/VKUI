import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { getPlatformClassName } from '../../helpers/getPlatformClassName';
import { getSizeYClassName } from '../../helpers/getSizeYClassName';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useFocusVisible } from '../../hooks/useFocusVisible';
import { usePlatform } from '../../hooks/usePlatform';
import { callMultiple } from '../../lib/callMultiple';
import { HasRootRef } from '../../types';
import { FocusVisible } from '../FocusVisible/FocusVisible';
import {
  VisuallyHiddenInput,
  VisuallyHiddenInputProps,
} from '../VisuallyHiddenInput/VisuallyHiddenInput';
import styles from './Switch.module.css';

export interface SwitchProps extends VisuallyHiddenInputProps, HasRootRef<HTMLLabelElement> {}

/**
 * @see https://vkcom.github.io/VKUI/#/Switch
 */
export const Switch = ({ style, className, getRootRef, ...restProps }: SwitchProps) => {
  const platform = usePlatform();
  const { sizeY } = useAdaptivity();
  const { focusVisible, onBlur, onFocus } = useFocusVisible();

  return (
    <label
      className={classNames(
        styles['Switch'],
        getPlatformClassName(styles['Switch'], platform),
        getSizeYClassName(styles['Switch'], sizeY),
        restProps.disabled && styles['Switch--disabled'],
        focusVisible && styles['Switch--focus-visible'],
        className,
      )}
      style={style}
      ref={getRootRef}
    >
      <VisuallyHiddenInput
        {...restProps}
        type="checkbox"
        className={styles['Switch__self']}
        onBlur={callMultiple(onBlur, restProps.onBlur)}
        onFocus={callMultiple(onFocus, restProps.onFocus)}
      />
      <span aria-hidden className={styles['Switch__pseudo']} />
      <FocusVisible mode="outside" />
    </label>
  );
};
