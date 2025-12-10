import { classNames } from '@vkontakte/vkjs';
import type { HasComponent, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Card.module.css';

export interface CardProps extends HTMLAttributesWithRootRef<HTMLDivElement>, HasComponent {
  /**
   * Внешний вид карточки.
   */
  mode?: 'tint' | 'shadow' | 'outline' | 'outline-tint' | 'plain';
}

/**
 * @see https://vkui.io/components/card
 */
export const Card = ({
  mode = 'tint',
  Component = 'li',
  ...restProps
}: CardProps): React.ReactNode => {
  const withBorder = mode === 'outline' || mode === 'outline-tint';
  return (
    <RootComponent
      {...restProps}
      Component={Component}
      baseClassName={classNames(
        styles.host,
        mode === 'outline' && styles.modeOutline,
        mode === 'shadow' && styles.modeShadow,
        mode === 'plain' && styles.modePlain,
        withBorder && styles.withBorder,
      )}
    />
  );
};
