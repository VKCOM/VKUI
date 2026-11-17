import { classNames } from '@vkontakte/vkjs';
import { getTextFromChildren } from '../../../lib/children';
import type { HasRootRef } from '../../../types';
import { RootComponent, type RootComponentProps } from '../../RootComponent/RootComponent';
import styles from './EllipsisText.module.css';

export interface EllipsisTextProps
  extends Omit<RootComponentProps<HTMLElement>, 'title'>,
    HasRootRef<HTMLElement> {
  /**
   * Пользовательская маскимальная ширина.
   *
   * Используйте в случаях, когда у контейнера ширина зависит от размера контента,
   * другими словами, когда ширина не ограничена.
   */
  maxWidth?: number | undefined;
  /**
   * Максимальное количество видимых строк.
   *
   * > При `maxLines > 1` используется свойство line-clamp, которое поддерживается не всеми версиями браузеров. Используйте с осторожностью
   * > @see [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp).
   */
  maxLines?: number | undefined;
  /**
   * Отключает отображение нативного тултипа с полным текстом.
   */
  disableNativeTitle?: boolean | undefined;
}

/** Компонент ограничивает текстовый контент, убирая его в многоточие.
 *
 * @since 6.1.0
 * @see https://vkui.io/components/ellipsis-text
 */
const EllipsisText = ({
  Component = 'span',
  className,
  children,
  maxWidth,
  maxLines = 1,
  disableNativeTitle = false,
  ...restProps
}: EllipsisTextProps): React.ReactNode => {
  return (
    <RootComponent
      Component={Component}
      className={classNames(
        styles.host,
        disableNativeTitle && styles.disableNativeTitle,
        className,
      )}
      title={disableNativeTitle ? undefined : getTextFromChildren(children)}
      {...restProps}
    >
      <span
        style={{ maxWidth, WebkitLineClamp: maxLines > 1 ? `${maxLines}` : undefined }}
        className={classNames(styles.content, maxLines > 1 && styles.contentMultiline)}
      >
        {children}
      </span>
    </RootComponent>
  );
};

export { EllipsisText };
