'use client';

import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import type { HasComponent, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './CardGrid.module.css';

const sizeXClassNames = {
  none: styles.sizeXNone,
  compact: styles.sizeXCompact,
};

const stylesSize = {
  s: 'vkuiInternalCardGrid--size-s',
  m: 'vkuiInternalCardGrid--size-m',
  l: 'vkuiInternalCardGrid--size-l',
};

export interface CardGridProps extends HTMLAttributesWithRootRef<HTMLDivElement>, HasComponent {
  size?: 's' | 'm' | 'l';
  /**
   * Если true, то вокруг компонента присутствуют стандартные отсупы сверху/снизу и слева/справа
   */
  padding?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/CardGrid
 */
export const CardGrid = ({
  size = 's',
  padding = false,
  Component = 'ul',
  ...restProps
}: CardGridProps): React.ReactNode => {
  const { sizeX = 'none' } = useAdaptivity();

  return (
    <RootComponent
      {...restProps}
      Component={Component}
      baseClassName={classNames(
        styles.host,
        'vkuiInternalCardGrid',
        padding && styles.padding,
        stylesSize[size],
        sizeX !== 'regular' && sizeXClassNames[sizeX],
      )}
    />
  );
};
