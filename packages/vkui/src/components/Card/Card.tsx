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
  // TODO [>=7]: поменять тег на li https://github.com/VKCOM/VKUI/issues/7336
  Component = 'div',
  ...restProps
}: CardProps): React.ReactNode => {
  const withBorder = mode === 'outline' || mode === 'outline-tint';
  return (
    <RootComponent
      {...restProps}
      Component={Component}
      baseClassName={classNames(
        styles['Card'],
        mode === 'outline' && styles['Card--mode-outline'],
        mode === 'shadow' && styles['Card--mode-shadow'],
        withBorder && styles['Card--withBorder'],
      )}
    />
  );
};
