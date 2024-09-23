import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useIsomorphicLayoutEffect } from '../../../lib/useIsomorphicLayoutEffect';
import type { HasRootRef } from '../../../types';
import type { RootComponentProps } from '../../RootComponent/RootComponent';
import { Tooltip, type TooltipProps } from '../../Tooltip/Tooltip';
import { useOverflowDetector } from './useOverflowDetector';
import styles from './EllipsisText.module.css';

export interface EllipsisTextProps
  extends RootComponentProps<HTMLElement>,
    HasRootRef<HTMLElement> {
  /**
   * Пользовательская маскимальная ширина.
   *
   * Используйте в случаях, когда у контейнера ширина зависит от размера контента,
   * другими словами, когда ширина не ограничена.
   */
  maxWidth?: number;
  /**
   * Максимальное количество видимых строк
   *
   * > При `maxLines > 1` используется свойство line-clamp, которое поддерживается не всеми версиями браузеров. Используйте с осторожностью
   * > @see [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp)
   */
  maxLines?: number;
  /**
   * Отвечает за то, нужно ли показывать тултип с полным текстом.
   * Будет показывать тултип, только в случае, когда текст не помещается и обрезается.
   */
  tooltipEnabled?: boolean;
  /**
   * Позиция тултипа, который показывает полный текст. Работает совместно с `tooltipEnabled=true`
   */
  tooltipPlacement?: TooltipProps['placement'];
}

const TextWithTooltip = ({
  children,
  contentRef,
  tooltipChildren,
  placement,
}: {
  children: React.ReactNode;
  contentRef: React.RefObject<HTMLElement>;
  tooltipChildren: React.ReactNode;
  placement: EllipsisTextProps['tooltipPlacement'];
}) => {
  const needToShowTooltip = useOverflowDetector({
    ref: contentRef,
  });

  return (
    <Tooltip
      text={tooltipChildren}
      placement={placement}
      usePortal
      shown={needToShowTooltip ? undefined : false}
    >
      <div>{children}</div>
    </Tooltip>
  );
};

/** Компонент ограничивает текстовый контент убирая его в многоточие.
 *
 * @since 6.1.0
 * @see https://vkcom.github.io/VKUI/#/EllipsisText
 */
const EllipsisText = ({
  className,
  getRootRef,
  children,
  maxWidth,
  maxLines = 1,
  tooltipEnabled,
  tooltipPlacement = 'top',
  ...restProps
}: EllipsisTextProps): React.ReactNode => {
  const contentRef = React.useRef<HTMLSpanElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (contentRef && contentRef.current) {
      contentRef.current.style.setProperty('-webkit-line-clamp', maxLines > 1 ? `${maxLines}` : '');
    }
  }, [contentRef, maxLines]);

  const content = React.useMemo(() => {
    return (
      <span
        ref={getRootRef}
        className={classNames(styles['EllipsisText'], className)}
        {...restProps}
      >
        <span
          style={{ maxWidth }}
          ref={contentRef}
          className={classNames(
            styles['EllipsisText__content'],
            maxLines > 1 && styles['EllipsisText__content--multiline'],
          )}
        >
          {children}
        </span>
      </span>
    );
  }, [children, className, getRootRef, maxLines, maxWidth, restProps]);

  if (!tooltipEnabled) {
    return content;
  }

  return (
    <TextWithTooltip
      contentRef={contentRef}
      tooltipChildren={children}
      placement={tooltipPlacement}
    >
      {content}
    </TextWithTooltip>
  );
};

export { EllipsisText };
