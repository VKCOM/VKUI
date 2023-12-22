import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './CardGrid.module.css';

const sizeXClassNames = {
  none: styles.hostSizeXNone,
  ['compact']: styles.hostSizeXCompact,
};

const stylesSize = {
  s: 'vkuiInternalCardGridSizeS',
  m: 'vkuiInternalCardGridSizeM',
  l: 'vkuiInternalCardGridSizeL',
};

export interface CardGridProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  size?: 's' | 'm' | 'l';
  /**
   * Если true, то вокруг компонента присутствуют стандартные отсупы сверху/снизу и слева/справа
   */
  spaced?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/CardGrid
 */
export const CardGrid = ({ size = 's', spaced = false, ...restProps }: CardGridProps) => {
  const { sizeX = 'none' } = useAdaptivity();

  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        styles.host,
        'vkuiInternalCardGrid',
        spaced && styles.hostSpaced,
        stylesSize[size],
        sizeX !== 'regular' && sizeXClassNames[sizeX],
      )}
    />
  );
};
