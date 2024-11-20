import type { ReactElement } from 'react';
import { classNames } from '@vkontakte/vkjs';
import { Tappable, type TappableProps } from '../Tappable/Tappable';
import styles from './Link.module.css';

export interface LinkProps extends TappableProps {
  /**
   * Иконка слева.
   */
  before?: ReactElement;
  /**
   * Иконка справа.
   */
  after?: ReactElement;
  /**
   * Выключает появления нижнего подчеркивания при наведении.
   */
  noUnderline?: boolean;
  /**
   * Включает состояние `visited`, которое позволяет пользователю понять посещал ли он ссылку или нет.
   */
  hasVisited?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Link
 */
export const Link = ({
  before: beforeProp,
  after: afterProp,
  noUnderline,
  hasVisited,
  children,
  className,
  ...restProps
}: LinkProps): React.ReactNode => {
  const before = beforeProp ? <span className={styles.before}>{beforeProp}</span> : null;
  const after = afterProp ? <span className={styles.after}>{afterProp}</span> : null;

  return (
    <Tappable
      Component={restProps.href ? 'a' : 'button'}
      {...restProps}
      className={classNames(
        styles.host,
        hasVisited && styles.hasVisited,
        noUnderline ? undefined : styles.withUnderline,
        className,
      )}
      hasHover={false}
      activeMode="opacity"
      hoverMode="none"
      focusVisibleMode="outside"
    >
      {before}
      {children}
      {after}
    </Tappable>
  );
};
