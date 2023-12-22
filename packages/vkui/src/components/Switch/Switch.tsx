import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useFocusVisible } from '../../hooks/useFocusVisible';
import { useFocusVisibleClassName } from '../../hooks/useFocusVisibleClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { callMultiple } from '../../lib/callMultiple';
import { HasRef, HasRootRef } from '../../types';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './Switch.module.css';

const sizeYClassNames = {
  none: styles.hostSizeYNone,
  ['compact']: styles.hostSizeYCompact,
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
  const focusVisibleClassNames = useFocusVisibleClassName({ focusVisible, mode: 'outside' });

  return (
    <label
      className={classNames(
        styles.host,
        platform === 'ios' && styles.hostIos,
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        restProps.disabled && styles.hostDisabled,
        focusVisibleClassNames,
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
        className={styles.self}
      />
      <span aria-hidden className={styles.pseudo} />
    </label>
  );
};
