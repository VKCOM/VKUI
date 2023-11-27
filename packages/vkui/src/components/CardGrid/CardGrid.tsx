import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './CardGrid.module.css';

const sizeXClassNames = {
  none: styles['CardGrid--sizeX-none'],
  ['compact']: styles['CardGrid--sizeX-compact'],
};

const stylesSize = {
  s: 'vkuiInternalCardGrid--size-s',
  m: 'vkuiInternalCardGrid--size-m',
  l: 'vkuiInternalCardGrid--size-l',
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
        styles['CardGrid'],
        'vkuiInternalCardGrid',
        spaced && styles['CardGrid--spaced'],
        stylesSize[size],
        sizeX !== 'regular' && sizeXClassNames[sizeX],
      )}
    />
  );
};
