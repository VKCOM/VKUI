import { classNames } from '@vkontakte/vkjs';
import { Tappable, type TappableProps } from '../Tappable/Tappable';
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
  ...restProps
}: LinkProps): React.ReactNode => {
  return (
    <Tappable
      Component={restProps.href ? 'a' : 'button'}
      {...restProps}
      className={classNames(styles['Link'], hasVisited && styles['Link--has-visited'], className)}
      hasHover={false}
      activeMode="opacity"
      hoverMode="none"
      focusVisibleMode="outside"
    >
      {children}
    </Tappable>
  );
};
