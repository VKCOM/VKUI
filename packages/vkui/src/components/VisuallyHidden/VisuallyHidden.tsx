import { classNames } from '@vkontakte/vkjs';
import { RootComponent, type RootComponentProps } from '../RootComponent/RootComponent';
import styles from './VisuallyHidden.module.css';

export type VisuallyHiddenProps<T> = RootComponentProps<T>;

/**
 * Компонент-обертка. Позволяет скрыть контент визуально, но оставить его
 * доступным для ассистивных технологий. По умолчанию — `span`.
 *
 * @since 5.4.0
 * @see https://vkui.io/components/visually-hidden
 */
export const VisuallyHidden = <T,>({
  Component = 'span',
  baseClassName,
  ...restProps
}: VisuallyHiddenProps<T>): React.ReactNode => (
  <RootComponent
    Component={Component}
    {...restProps}
    baseClassName={classNames(
      baseClassName,
      styles.host,
      Component === 'input' && styles.focusableInput,
    )}
  />
);
