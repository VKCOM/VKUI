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
  /* eslint-disable jsdoc/require-description-complete-sentence */
  /**
   * Режим отображения кнопки.
   *
   * ![mode="primary"](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSIxMjQiIGhlaWdodD0iNDIiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyIDYpIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjMjY4OGViIiByeD0iOCIvPjx0ZXh0IHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjI0Ljk3NiIgeT0iMTkuNDcyIiBmaWxsPSIjZmZmIiBmb250LWZhbWlseT0iUm9ib3RvIiBmb250LXNpemU9IjEzLjMzMyIgZm9udC13ZWlnaHQ9IjUwMCI+PHRzcGFuIHg9IjI0Ljk3NiIgeT0iMTkuNDcyIiBmb250LXNpemU9IjE0Ij5QcmltYXJ5PC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg==)
   *
   * ![mode="secondary"](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjQiIGhlaWdodD0iNDIiIGZpbGw9Im5vbmUiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyIC0zNikiPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMzAiIHk9IjQyIiBmaWxsPSIjZjVmNWY1IiByeD0iOCIvPjx0ZXh0IHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjE2LjIiIHk9IjYxLjUwMiIgZmlsbD0iIzI2ODhlYiIgZm9udC1mYW1pbHk9IlJvYm90byIgZm9udC1zaXplPSIxMy4zMzMiIGZvbnQtd2VpZ2h0PSI1MDAiPjx0c3BhbiB4PSIxNi4yIiB5PSI2MS41MDIiIGZvbnQtc2l6ZT0iMTQiPlNlY29uZGFyeTwvdHNwYW4+PC90ZXh0PjwvZz48L3N2Zz4=)
   *
   * ![mode="tertiary"](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjQiIGhlaWdodD0iNDIiIGZpbGw9Im5vbmUiPjx0ZXh0IHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjM3LjI4NiIgeT0iMjUuNDk4IiBmaWxsPSIjMjY4OGViIiBmb250LWZhbWlseT0iUm9ib3RvIiBmb250LXNpemU9IjEzLjMzMyIgZm9udC13ZWlnaHQ9IjUwMCI+PHRzcGFuIHg9IjM3LjI4NiIgeT0iMjUuNDk4IiBmb250LXNpemU9IjE0Ij5UZXJ0aWFyeTwvdHNwYW4+PC90ZXh0Pjwvc3ZnPg==)
   *
   * ![mode="outline"](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjQiIGhlaWdodD0iNDIiIGZpbGw9Im5vbmUiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyIC0xMjApIj48cmVjdCB3aWR0aD0iOTkiIGhlaWdodD0iMjkiIHg9Ii41IiB5PSIxMjYuNSIgc3Ryb2tlPSIjMjY4OGViIiByeD0iNy41Ii8+PHRleHQgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMjcuMjUzIiB5PSIxNDUuNDg2IiBmaWxsPSIjMjY4OGViIiBmb250LWZhbWlseT0iUm9ib3RvIiBmb250LXNpemU9IjEzLjMzMyIgZm9udC13ZWlnaHQ9IjUwMCI+PHRzcGFuIHg9IjI3LjI1MyIgeT0iMTQ1LjQ4NiIgZm9udC1zaXplPSIxNCI+T3V0bGluZTwvdHNwYW4+PC90ZXh0PjwvZz48L3N2Zz4=)
   *
   * ![mode="link"](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjQiIGhlaWdodD0iNDIiIGZpbGw9Im5vbmUiPjx0ZXh0IHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjEyLjE1NyIgeT0iMjUuNDkxIiBmaWxsPSIjMjY4OGViIiBmb250LWZhbWlseT0iUm9ib3RvIiBmb250LXNpemU9IjEzLjMzMyIgZm9udC13ZWlnaHQ9IjUwMCI+PHRzcGFuIHg9IjEyLjE1NyIgeT0iMjUuNDkxIiBmb250LXNpemU9IjE0Ij5MaW5rPC90c3Bhbj48L3RleHQ+PC9zdmc+)
   */
  mode?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'link' | undefined;
  /**
   * Цветовая схема кнопки.
   */
  appearance?:
    | 'accent'
    | 'positive'
    | 'negative'
    | 'neutral'
    | 'overlay'
    | 'accent-invariable'
    | undefined;
  /**
   * Размер кнопки.
   */
  size?: 's' | 'm' | 'l' | undefined;
  /**
   * Растягивает кнопку на всю ширину контейнера.
   */
  stretched?: boolean | undefined;
  /**
   * Контент, отображаемый перед основным содержимым кнопки.
   */
  before?: React.ReactNode | undefined;
  /**
   * Контент, отображаемый после основного содержимого кнопки.
   */
  after?: React.ReactNode | undefined;
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
  loading?: boolean | undefined;
  /**
   * Текст для `aria-label` при состоянии загрузки.
   * Подменяет переданный в компонент `aria-label` только когда `loading={true}`.
   */
  loadingLabel?: string | undefined;
  /**
   * Отключает анимацию спиннера загрузки.
   */
  disableSpinnerAnimation?: boolean | undefined;
  /**
   * Добавляет скругленные углы кнопке.
   */
  rounded?: boolean | undefined;
  /**
   * Добавляет тень кнопке.
   */
  elevation?: Elevation | undefined;
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
