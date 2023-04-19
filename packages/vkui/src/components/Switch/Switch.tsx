import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useFocusVisible } from '../../hooks/useFocusVisible';
import { usePlatform } from '../../hooks/usePlatform';
import { SizeType } from '../../lib/adaptivity';
import { callMultiple } from '../../lib/callMultiple';
import { Platform } from '../../lib/platform';
import { HasRef, HasRootRef } from '../../types';
import { FocusVisible } from '../FocusVisible/FocusVisible';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './Switch.module.css';

const sizeYClassNames = {
  none: styles['Switch--sizeY-none'],
  [SizeType.COMPACT]: styles['Switch--sizeY-compact'],
};

export interface SwitchProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRootRef<HTMLLabelElement>,
    HasRef<HTMLInputElement> {}

/**
 * @see https://vkcom.github.io/VKUI/#/Switch
 */
export const Switch = ({ style, className, getRootRef, getRef, ...restProps }: SwitchProps) => {
  const platform = usePlatform();
  const { sizeY = 'none' } = useAdaptivity();
  const { focusVisible, onBlur, onFocus } = useFocusVisible();

  return (
    <label
      className={classNames(
        styles['Switch'],
        platform === Platform.IOS && styles['Switch--ios'],
        sizeY !== SizeType.REGULAR && sizeYClassNames[sizeY],
        restProps.disabled && styles['Switch--disabled'],
        className,
      )}
      style={style}
      ref={getRootRef}
      onBlur={callMultiple(onBlur, restProps.onBlur)}
      onFocus={callMultiple(onFocus, restProps.onFocus)}
    >
      <VisuallyHidden
        {...restProps}
        Component="input"
        getRootRef={getRef}
        type="checkbox"
        className={styles['Switch__self']}
      />
      <span aria-hidden className={styles['Switch__pseudo']} />
      <FocusVisible visible={focusVisible} mode="outside" />
    </label>
  );
};
