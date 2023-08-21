import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { SizeType } from '../../lib/adaptivity';
import styles from './CardGrid.module.css';

const sizeXClassNames = {
  none: styles['CardGrid--sizeX-none'],
  [SizeType.COMPACT]: styles['CardGrid--sizeX-compact'],
};

const stylesSize = {
  s: 'vkuiInternalCardGrid--size-s',
  m: 'vkuiInternalCardGrid--size-m',
  l: 'vkuiInternalCardGrid--size-l',
};

export interface CardGridProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 's' | 'm' | 'l';
  /**
   * Если true, то вокруг компонента присутствуют стандартные отсупы сверху/снизу и слева/справа
   */
  spaced?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/CardGrid
 */
export const CardGrid = ({
  children,
  size = 's',
  spaced = false,
  className,
  ...restProps
}: CardGridProps) => {
  const { sizeX = 'none' } = useAdaptivity();

  return (
    <div
      {...restProps}
      className={classNames(
        styles['CardGrid'],
        'vkuiInternalCardGrid',
        spaced && styles['CardGrid--spaced'],
        stylesSize[size],
        sizeX !== SizeType.REGULAR && sizeXClassNames[sizeX],
        className,
      )}
    >
      {children}
    </div>
  );
};
