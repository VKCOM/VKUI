'use client';

import * as React from 'react';
import { Icon16Cancel } from '@vkontakte/icons';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import type { HTMLAttributesWithRootRef } from '../../types';
import { DefaultIcon } from '../FloatingArrow/DefaultIcon';
import { FloatingArrow, type FloatingArrowProps } from '../FloatingArrow/FloatingArrow';
import { RootComponent } from '../RootComponent/RootComponent';
import { Tappable } from '../Tappable/Tappable';
import { Subhead } from '../Typography/Subhead/Subhead';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './TooltipBase.module.css';

export const TOOLTIP_MAX_WIDTH = 220;

const stylesAppearance = {
  accent: styles.appearanceAccent,
  white: styles.appearanceWhite,
  black: styles.appearanceBlack,
  inversion: styles.appearanceInversion,
};

export interface TooltipBaseProps
  extends Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'children' | 'title'> {
  /**
   * Стиль отображения подсказки
   */
  appearance?: 'accent' | 'neutral' | 'white' | 'black' | 'inversion';
  /**
   * Текст тултипа.
   */
  description?: React.ReactNode;
  /**
   * Заголовок тултипа.
   */
  title?: React.ReactNode;
  /**
   * [a11y] Id для заголовка тултипа.
   * Можно использовать для связи элемента с `role="dialog"` и заголовка через `aria-labelledby`
   */
  titleId?: string;
  /**
   * Для показа указателя, требуется передать хотя бы `coords` и `placement`.
   */
  arrowProps?: Omit<FloatingArrowProps, 'Icon'>;
  /**
   * Пользовательская SVG иконка.
   *
   * Требования:
   *
   * 1. Иконка по умолчанию должна быть направлена вверх (a.k.a `IconUp`).
   * 2. Чтобы избежать проблемы с пространством между стрелкой и контентом на некоторых экранах,
   *    растяните кривую по высоте на `1px` и увеличьте на этот размер `height` и `viewBox` SVG.
   *    (см. https://github.com/VKCOM/VKUI/pull/4496).
   * 3. Убедитесь, что компонент принимает все валидные для SVG параметры.
   * 4. Убедитесь, что SVG и её элементы наследует цвет через `fill="currentColor"`.
   * 5. Если стрелка наезжает на якорный элемент, то увеличьте смещение между целевым и всплывающим элементами.
   */
  ArrowIcon?: FloatingArrowProps['Icon'];
  /**
   * Пользовательские css-классы, будут добавлены на root-элемент
   */
  className?: string;
  /**
   * Перебивает максимальную ширину заданную по умолчанию.
   *
   * Передача `null` полностью сбрасывает установку `max-width` на элемент.
   */
  maxWidth?: number | string | null;
  /**
   * Скрытый текст для кнопки закрытия.
   */
  closeIconLabel?: string;
  /**
   * Обработчик нажатия на кнопку закрытия. При передаче, показывается иконка.
   */
  onCloseIconClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Низкоуровневый компонент для отрисовки тултипа.
 * Примеры использования и Readme можно найти в документации Tooltip
 * @see https://vkcom.github.io/VKUI/#/Tooltip
 * @private
 */
export const TooltipBase = ({
  appearance = 'accent',
  arrowProps,
  ArrowIcon = DefaultIcon,
  description,
  title,
  titleId,
  maxWidth = TOOLTIP_MAX_WIDTH,
  closeIconLabel = 'Закрыть',
  onCloseIconClick,
  className,
  ...restProps
}: TooltipBaseProps): React.ReactNode => {
  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        styles.host,
        appearance !== 'neutral' && stylesAppearance[appearance],
        className,
      )}
      role="tooltip"
    >
      {arrowProps && (
        <FloatingArrow
          {...arrowProps}
          iconClassName={classNames(styles.arrow, arrowProps.iconClassName)}
          Icon={ArrowIcon}
        />
      )}
      <div className={styles.content} style={maxWidth !== null ? { maxWidth } : undefined}>
        <div>
          {hasReactNode(title) && (
            <Subhead id={titleId} className={styles.title} weight="2">
              {title}
            </Subhead>
          )}
          {hasReactNode(description) && (
            <Subhead className={styles.description}>{description}</Subhead>
          )}
        </div>
        {typeof onCloseIconClick === 'function' && (
          <Tappable
            Component="button"
            className={styles.closeButton}
            hoverMode="opacity"
            activeMode="opacity"
            onClick={onCloseIconClick}
          >
            <VisuallyHidden>{closeIconLabel}</VisuallyHidden>
            <Icon16Cancel display="block" />
          </Tappable>
        )}
      </div>
    </RootComponent>
  );
};
