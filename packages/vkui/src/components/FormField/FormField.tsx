'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { useFocusVisibleClassName } from '../../hooks/useFocusVisibleClassName';
import { useFocusWithin } from '../../hooks/useFocusWithin';
import type { HasComponent, HasRootRef } from '../../types';
import styles from './FormField.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

const stylesStatus = {
  error: styles.statusError,
  valid: styles.statusValid,
};

const iconAlignClassNames = {
  center: undefined,
  start: styles.iconAlignStart,
  end: styles.iconAlignEnd,
};

const renderIcon = (icon: React.ReactNode, align: FieldIconsAlign, className: string) => {
  return (
    <div className={styles.iconWrapper}>
      <span className={classNames(iconAlignClassNames[align], className)}>{icon}</span>
    </div>
  );
};

export type FieldIconsAlign = 'start' | 'center' | 'end';

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
   * Вертикальное выравнивание иконки слева
   */
  beforeAlign?: FieldIconsAlign;
  /**
   * Добавляет иконку справа.
   *
   * Рекомендации:
   *
   * - Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.
   * - Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.
   */
  after?: React.ReactNode;
  /**
   * Вертикальное выравнивание иконки справа
   */
  afterAlign?: FieldIconsAlign;
  /**
   * Режим отображения.
   *
   * - `default` — показывает фон, обводку и, при наличии, текст-подсказку.
   * - `plain` — показывает только текст-подсказку.
   */
  mode?: 'default' | 'plain';
  /**
   * Максимальная высота поля
   */
  maxHeight?: number;
}

export interface FormFieldOwnProps
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
  beforeAlign = 'center',
  afterAlign = 'center',
  disabled,
  mode = 'default',
  className,
  maxHeight,
  style,
  ...restProps
}: FormFieldOwnProps): React.ReactNode => {
  const elRef = useExternRef(getRootRef);
  const { sizeY = 'none' } = useAdaptivity();
  const [hover, setHover] = React.useState(false);

  const focusWithin = useFocusWithin(elRef);
  const focusVisibleClassNames = useFocusVisibleClassName({
    focusVisible: focusWithin,
    mode: styles.focusVisible,
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
      style={{
        maxHeight,
        ...style,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classNames(
        styles.host,
        mode === 'default' && styles.modeDefault,
        status !== 'default' && stylesStatus[status],
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        disabled && styles.disabled,
        !disabled && hover && styles.hover,
        focusVisibleClassNames,
        className,
      )}
    >
      <div className={styles.scrollContainer}>
        {before && renderIcon(before, beforeAlign, styles.before)}
        <div className={styles.content}>{children}</div>
        {after &&
          renderIcon(after, afterAlign, classNames(styles.after, 'vkuiInternalFormField__after'))}
      </div>
      <span aria-hidden className={styles.border} />
    </Component>
  );
};
