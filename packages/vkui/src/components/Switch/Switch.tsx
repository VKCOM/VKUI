import * as React from 'react';
import { getPlatformClassName } from '../../helpers/getPlatformClassName';
import { classNames } from '@vkontakte/vkjs';
import { callMultiple } from '../../lib/callMultiple';
import { usePlatform } from '../../hooks/usePlatform';
import { HasRootRef } from '../../types';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import {
  VisuallyHiddenInput,
  VisuallyHiddenInputProps,
} from '../VisuallyHiddenInput/VisuallyHiddenInput';
import { useFocusVisible } from '../../hooks/useFocusVisible';
import { FocusVisible } from '../FocusVisible/FocusVisible';
import { getSizeYClassName } from '../../helpers/getSizeYClassName';
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
      role="presentation"
    >
      <VisuallyHiddenInput
        {...restProps}
        type="checkbox"
        className={styles['Switch__self']}
        onBlur={callMultiple(onBlur, restProps.onBlur)}
        onFocus={callMultiple(onFocus, restProps.onFocus)}
      />
      <span role="presentation" className={styles['Switch__pseudo']} />
      <FocusVisible mode="outside" />
    </label>
  );
};
