import { classNames } from '@vkontakte/vkjs';
import type { HasComponent, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Card.module.css';

export interface CardProps extends HTMLAttributesWithRootRef<HTMLDivElement>, HasComponent {
  mode?: 'tint' | 'shadow' | 'outline' | 'outline-tint';
}

/**
 * @see https://vkcom.github.io/VKUI/#/Card
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
        withBorder && styles.withBorder,
      )}
    />
  );
};
