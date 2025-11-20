'use client';

import * as React from 'react';
import { Icon16Cancel } from '@vkontakte/icons';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { useFocusVisible } from '../../../hooks/useFocusVisible';
import { useFocusVisibleClassName } from '../../../hooks/useFocusVisibleClassName';
import {
  type HasComponent,
  type HasDataAttribute,
  type HTMLAttributesWithRootRef,
} from '../../../types';
import { RootComponent } from '../../RootComponent/RootComponent';
import { Footnote } from '../../Typography/Footnote/Footnote';
import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';
import { type ChipOptionValue } from '../types';
import styles from './Chip.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
} as const;

const modeClassNames = {
  primary: styles.modePrimary,
  secondary: styles.modeSecondary,
} as const;

export interface ChipProps
  extends HasComponent,
    HasDataAttribute,
    HTMLAttributesWithRootRef<HTMLElement> {
  /**
   * Режим отображения компонента.
   */
  mode?: 'primary' | 'secondary';
  /**
   * Значение чипа.
   */
  value?: ChipOptionValue;
  /**
   * Можно ли удалить чип.
   */
  removable?: boolean;
  /**
   * Блокировка взаимодействия с чипом.
   */
  disabled?: boolean;
  /**
   * Режим только для чтения.
   */
  readOnly?: boolean;
  /**
   * Текст для кнопки удаления.
   */
  removeLabel?: string;
  /**
   * Контент перед основным содержимым.
   */
  before?: React.ReactNode;
  /**
   * Контент после основного содержимого.
   */
  after?: React.ReactNode;
  /**
   * Обработчик удаления чипа.
   */
  onRemove?: (event: React.MouseEvent, value: ChipOptionValue) => void;
}

/**
 * @see https://vkui.io/components/chip
 */
export const Chip = ({
  mode = 'primary',
  Component = 'span',
  value = '',
  removable = true,
  onRemove,
  removeLabel = 'Удалить',
  before,
  after,
  disabled,
  readOnly,
  children,
  className,
  onFocus: onFocusProp,
  onBlur: onBlurProp,
  ...restProps
}: ChipProps): React.ReactNode => {
  const { sizeY = 'none' } = useAdaptivity();
  const { focusVisible, onFocus, onBlur } = useFocusVisible();
  const focusVisibleClassName = useFocusVisibleClassName({ focusVisible });

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onFocusProp) {
      onFocusProp(event);
    }
    onFocus(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onBlurProp) {
      onBlurProp(event);
    }
    onBlur(event);
  };

  const onRemoveWrapper = React.useCallback(
    (event: React.MouseEvent) => {
      onRemove?.(event, value);
    },
    [onRemove, value],
  );

  return (
    <RootComponent
      {...restProps}
      Component={Component}
      className={classNames(
        styles.host,
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        modeClassNames[mode],
        focusVisibleClassName,
        className,
      )}
      aria-readonly={readOnly}
      aria-disabled={disabled}
      onFocus={disabled ? undefined : handleFocus}
      onBlur={disabled ? undefined : handleBlur}
    >
      <div className={styles.in}>
        {hasReactNode(before) && <div className={styles.before}>{before}</div>}
        <Footnote className={styles.content}>{children}</Footnote>
        {hasReactNode(after) && <div className={styles.after}>{after}</div>}
      </div>
      {!readOnly && removable && (
        <div className={styles.removable}>
          <button
            type="button"
            tabIndex={-1} // [reason]: чтобы можно было выставлять состояние фокуса только программно через `*.focus()`
            disabled={disabled}
            className={styles.remove}
            onClick={disabled ? undefined : onRemoveWrapper}
          >
            <VisuallyHidden>
              &nbsp; {removeLabel} {children}
            </VisuallyHidden>
            <Icon16Cancel />
          </button>
        </div>
      )}
    </RootComponent>
  );
};
