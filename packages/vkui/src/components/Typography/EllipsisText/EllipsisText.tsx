import { useRef } from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useIsomorphicLayoutEffect } from '../../../lib/useIsomorphicLayoutEffect';
import type { HasRootRef } from '../../../types';
import type { RootComponentProps } from '../../RootComponent/RootComponent';
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
}

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
  ...restProps
}: EllipsisTextProps): React.ReactNode => {
  const contentRef = useRef<HTMLSpanElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (contentRef && contentRef.current) {
      contentRef.current.style.setProperty('-webkit-line-clamp', maxLines > 1 ? `${maxLines}` : '');
    }
  }, [contentRef, maxLines]);

  return (
    <span ref={getRootRef} className={classNames(styles['EllipsisText'], className)} {...restProps}>
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
};

export { EllipsisText };
