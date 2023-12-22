import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { useFocusVisibleClassName } from '../../hooks/useFocusVisibleClassName';
import { useFocusWithin } from '../../hooks/useFocusWithin';
import { HasComponent, HasRootRef } from '../../types';
import styles from './FormField.module.css';

const sizeYClassNames = {
  none: styles.hostSizeYNone,
  ['compact']: styles.hostSizeYCompact,
};

const stylesStatus = {
  error: styles.hostStatusError,
  valid: styles.hostStatusValid,
};

export interface FormFieldProps {
  status?: 'default' | 'error' | 'valid';
  /**
   * Добавляет иконку слева.
   *
   * Рекомендации:
   *
   * - Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.
   * - Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.
   */
  before?: React.ReactNode;
  /**
   * Добавляет иконку справа.
   *
   * Рекомендации:
   *
   * - Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.
   * - Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.
   */
  after?: React.ReactNode;
  mode?: 'default' | 'plain';
}

interface FormFieldOwnProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement>,
    HasComponent,
    FormFieldProps {
  disabled?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/FormField
 */
export const FormField = ({
  Component = 'span',
  status = 'default',
  children,
  getRootRef,
  before,
  after,
  disabled,
  mode = 'default',
  className,
  ...restProps
}: FormFieldOwnProps) => {
  const elRef = useExternRef(getRootRef);
  const { sizeY = 'none' } = useAdaptivity();
  const [hover, setHover] = React.useState(false);

  const focusWithin = useFocusWithin(elRef);
  const focusVisibleClassNames = useFocusVisibleClassName({
    focusVisible: focusWithin,
    mode: styles.hostFocusVisible,
  });

  const handleMouseEnter = (e: MouseEvent) => {
    e.stopPropagation();
    setHover(true);
  };

  const handleMouseLeave = (e: MouseEvent) => {
    e.stopPropagation();
    setHover(false);
  };

  return (
    <Component
      {...restProps}
      ref={elRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classNames(
        styles.host,
        mode === 'default' && styles.hostModeDefault,
        status !== 'default' && stylesStatus[status],
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        disabled && styles.hostDisabled,
        !disabled && hover && styles.hostHover,
        focusVisibleClassNames,
        className,
      )}
    >
      {before && <span className={styles.before}>{before}</span>}
      {children}
      {after && (
        <span className={classNames(styles.after, 'vkuiInternalFormFieldAfter')}>{after}</span>
      )}
      <span aria-hidden className={styles.border} />
    </Component>
  );
};
