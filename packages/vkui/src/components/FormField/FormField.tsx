import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { useFocusVisibleClassName } from '../../hooks/useFocusVisibleClassName';
import { useFocusWithin } from '../../hooks/useFocusWithin';
import type { HasComponent, HasRootRef } from '../../types';
import styles from './FormField.module.css';

const sizeYClassNames = {
  none: styles['FormField--sizeY-none'],
  compact: styles['FormField--sizeY-compact'],
};

const stylesStatus = {
  error: styles['FormField--status-error'],
  valid: styles['FormField--status-valid'],
};

const iconAlignClassNames = {
  center: undefined,
  start: styles['FormField__icon--align-start'],
  end: styles['FormField__icon--align-end'],
};

const renderIcon = (icon: React.ReactNode, align: FieldIconsAlign, className: string) => {
  return (
    <div className={styles['FormField__iconWrapper']}>
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
    mode: styles['FormField--focus-visible'],
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
      style={
        maxHeight !== undefined
          ? {
              ...style,
              maxHeight,
            }
          : style
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classNames(
        styles['FormField'],
        mode === 'default' && styles['FormField--mode-default'],
        status !== 'default' && stylesStatus[status],
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        disabled && styles['FormField--disabled'],
        !disabled && hover && styles['FormField--hover'],
        focusVisibleClassNames,
        className,
      )}
    >
      <div className={styles['FormField_scrollContainer']}>
        {before && renderIcon(before, beforeAlign, styles['FormField__before'])}
        <div className={styles['FormField__content']}>{children}</div>
        {after &&
          renderIcon(
            after,
            afterAlign,
            classNames(styles['FormField__after'], 'vkuiInternalFormField__after'),
          )}
      </div>
      <span aria-hidden className={styles['FormField__border']} />
    </Component>
  );
};
