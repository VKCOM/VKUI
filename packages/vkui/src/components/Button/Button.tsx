'use client';

import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { usePlatform } from '../../hooks/usePlatform';
import type { HasAlign } from '../../types';
import { Spinner } from '../Spinner/Spinner';
import { Tappable, type TappableOmitProps } from '../Tappable/Tappable';
import '../Tappable/Tappable.module.css';
import '../Spinner/Spinner.module.css';
import styles from './Button.module.css';

const stylesSize = {
  s: styles.sizeS,
  m: styles.sizeM,
  l: styles.sizeL,
};

const stylesMode = {
  primary: styles.modePrimary,
  secondary: styles.modeSecondary,
  tertiary: styles.modeTertiary,
  outline: styles.modeOutline,
  link: styles.modeLink,
};

const stylesAppearance = {
  'accent': styles.appearanceAccent,
  'positive': styles.appearancePositive,
  'negative': styles.appearanceNegative,
  'neutral': styles.appearanceNeutral,
  'overlay': styles.appearanceOverlay,
  'accent-invariable': styles.appearanceAccentInvariable,
};

const stylesAlign = {
  left: styles.alignLeft,
  right: styles.alignRight,
};

const sizeYClassNames = {
  none: styles.sizeYNone,
  regular: styles.sizeYRegular,
};

export interface VKUIButtonProps extends HasAlign {
  /**
   * Режим отображения кнопки.
   */
  mode?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'link';
  /**
   * Цветовая схема кнопки.
   */
  appearance?: 'accent' | 'positive' | 'negative' | 'neutral' | 'overlay' | 'accent-invariable';
  /**
   * Размер кнопки.
   */
  size?: 's' | 'm' | 'l';
  /**
   * Растягивает кнопку на всю ширину контейнера.
   */
  stretched?: boolean;
  /**
   * Контент, отображаемый перед основным содержимым кнопки.
   */
  before?: React.ReactNode;
  /**
   * Контент, отображаемый после основного содержимого кнопки.
   */
  after?: React.ReactNode;
  /**
   * Включает состояние загрузки (отображает спиннер).
   */
  loading?: boolean;
  /**
   * Отключает анимацию спиннера загрузки.
   */
  disableSpinnerAnimation?: boolean;
  /**
   * Добавляет скругленные углы кнопке.
   */
  rounded?: boolean;
}

export interface ButtonProps extends Omit<TappableOmitProps, 'size'>, VKUIButtonProps {}

/**
 * @see https://vkui.io/components/button
 */
export const Button = ({
  size = 's',
  mode = 'primary',
  appearance = 'accent',
  stretched = false,
  align = 'center',
  children,
  before,
  after,
  getRootRef,
  loading,
  onClick,
  disableSpinnerAnimation,
  rounded,
  disabled,
  ...restProps
}: ButtonProps): React.ReactNode => {
  const hasIconOnly = !children && Boolean(after) !== Boolean(before);
  const { sizeY = 'none' } = useAdaptivity();
  const platform = usePlatform();

  return (
    <Tappable
      hoverMode={styles.hover}
      activeMode={styles.active}
      Component={restProps.href ? 'a' : 'button'}
      focusVisibleMode="outside"
      disabled={loading || disabled}
      {...restProps}
      onClick={loading ? undefined : onClick}
      baseClassName={classNames(
        styles.host,
        stylesSize[size],
        stylesMode[mode],
        stylesAppearance[appearance],
        align !== 'center' && stylesAlign[align],
        sizeY !== 'compact' && sizeYClassNames[sizeY],
        platform === 'ios' && styles.ios,
        stretched && styles.stretched,
        hasIconOnly && !stretched && styles.singleIcon,
        loading && styles.loading,
        rounded && styles.rounded,
        disabled && styles.disabled,
      )}
      getRootRef={getRootRef}
    >
      {loading && (
        <Spinner
          size="s"
          className={styles.spinner}
          disableAnimation={disableSpinnerAnimation}
          noColor
        />
      )}
      <span className={styles.in}>
        {hasReactNode(before) && (
          <span
            className={styles.before}
            role="presentation"
            data-testid={process.env.NODE_ENV === 'test' ? 'before' : undefined}
          >
            {before}
          </span>
        )}
        {hasReactNode(children) && (
          <span
            className={styles.content}
            data-testid={process.env.NODE_ENV === 'test' ? 'children' : undefined}
          >
            {children}
          </span>
        )}
        {hasReactNode(after) && (
          <span
            className={styles.after}
            role="presentation"
            data-testid={process.env.NODE_ENV === 'test' ? 'after' : undefined}
          >
            {after}
          </span>
        )}
      </span>
    </Tappable>
  );
};
