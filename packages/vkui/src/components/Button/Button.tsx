'use client';

import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { usePlatform } from '../../hooks/usePlatform';
import type { Elevation, HasAlign } from '../../types';
import { Spinner } from '../Spinner/Spinner';
import { Tappable, type TappableOmitProps } from '../Tappable/Tappable';
import '../Tappable/Tappable.module.css';
import '../Spinner/Spinner.module.css';
import styles from './Button.module.css';

const stylesElevation = {
  '1': styles.elevation1,
  '2': styles.elevation2,
  '3': styles.elevation3,
  '4': styles.elevation4,
};

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

const densityClassNames = {
  none: styles.densityNone,
  regular: styles.densityRegular,
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
   *
   * ⚠️ **Важно для доступности**: При использовании `loading={true}` компонент автоматически
   * устанавливает `aria-label` в значение `loadingLabel` (по умолчанию "Загрузка..."),
   * чтобы скринридер мог объявить контекст загрузки. Вы можете переопределить это значение,
   * передав свойство `loadingLabel`.
   *
   * @example
   * <Button loading>Сохранить</Button>
   * // Скринридер объявит: "Загрузка..., кнопка"
   *
   * @example
   * <Button loading loadingLabel="Сохранение данных...">Сохранить</Button>
   */
  loading?: boolean;
  /**
   * Текст для `aria-label` при состоянии загрузки.
   * Подменяет переданный в компонент `aria-label` только когда `loading={true}`.
   */
  loadingLabel?: string;
  /**
   * Отключает анимацию спиннера загрузки.
   */
  disableSpinnerAnimation?: boolean;
  /**
   * Добавляет скругленные углы кнопке.
   */
  rounded?: boolean;
  /**
   * Добавляет тень кнопке.
   */
  elevation?: Elevation;
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
  loadingLabel = 'Загрузка...',
  onClick,
  disableSpinnerAnimation,
  rounded,
  disabled,
  href,
  'aria-label': ariaLabelProp,
  elevation,
  ...restProps
}: ButtonProps): React.ReactNode => {
  const hasIconOnly = !children && Boolean(after) !== Boolean(before);
  const { density = 'none' } = useAdaptivity();
  const platform = usePlatform();

  const isDisabled = disabled || loading;
  const hasHref = href !== undefined;

  const ariaLabel = loading ? loadingLabel : ariaLabelProp;

  const buttonProps = React.useMemo(() => {
    if (hasHref) {
      return isDisabled
        ? {
            // Для disabled/loading ссылок нужно удалить href и добавить role="link"
            // согласно https://w3c.github.io/html-aria/#example-communicate-a-disabled-link-with-aria
            'role': 'link' as const,
            'Component': 'a' as const,
            'aria-disabled': isDisabled,
          }
        : {
            href,
            'aria-disabled': isDisabled,
          };
    } else {
      return {
        Component: 'button' as const,
        disabled,
      };
    }
  }, [disabled, hasHref, href, isDisabled]);

  return (
    <Tappable
      hoverMode={styles.hover}
      activeMode={styles.active}
      focusVisibleMode="outside"
      aria-busy={loading}
      hasHover={!loading}
      hasActive={!loading}
      {...buttonProps}
      {...restProps}
      aria-label={ariaLabel}
      onClick={isDisabled ? undefined : onClick}
      baseClassName={classNames(
        styles.host,
        stylesSize[size],
        stylesMode[mode],
        stylesAppearance[appearance],
        align !== 'center' && stylesAlign[align],
        density !== 'compact' && densityClassNames[density],
        platform === 'ios' && styles.ios,
        stretched && styles.stretched,
        hasIconOnly && !stretched && styles.singleIcon,
        loading && styles.loading,
        rounded && styles.rounded,
        disabled && styles.disabled,
        elevation && stylesElevation[elevation],
      )}
      getRootRef={getRootRef}
    >
      {loading && (
        <Spinner
          size={size === 's' ? 's' : 'm'}
          className={styles.spinner}
          disableAnimation={disableSpinnerAnimation}
          noColor
          aria-hidden="true"
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
