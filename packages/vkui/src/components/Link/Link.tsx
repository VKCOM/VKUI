import * as React from 'react';
import { classNames, noop } from '@vkontakte/vkjs';
import { Tappable, TappableProps } from '../Tappable/Tappable';
import styles from './Link.module.css';

export interface LinkProps extends TappableProps {
  /**
   * Включает состояние `visited`, которое позволяет пользователю понять посещал ли он ссылку или нет
   */
  hasVisited?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Link
 */
export const Link = ({
  hasVisited,
  children,
  className,
  onClick = noop,
  ...restProps
}: LinkProps) => {
  return (
    <Tappable
      Component={restProps.href ? 'a' : 'button'}
      onClick={onClick}
      {...restProps}
      className={classNames(styles['Link'], hasVisited && styles['Link--has-visited'], className)}
      hasHover={false}
      activeMode="opacity"
      focusVisibleMode="outside"
    >
      {children}
    </Tappable>
  );
};
