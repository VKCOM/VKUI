'use client';

import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { type SizeTypeValues, ViewWidth, type ViewWidthType } from '../../lib/adaptivity';
import type { HasComponent, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './CardGrid.module.css';

function getViewWidthClassName(
  viewWidth: ViewWidthType | 'none',
  legacySizeX: SizeTypeValues | undefined,
) {
  // TODO [>=10]: #9015 Удалить это условие
  if (legacySizeX !== undefined && legacySizeX === 'compact') {
    return styles.viewWidthNone;
  }
  if (viewWidth === 'none') {
    return styles.viewWidthSmallTabletMinus;
  }
  if (viewWidth < ViewWidth.SMALL_TABLET) {
    return styles.viewWidthNone;
  }
  return;
}

const stylesSize = {
  s: 'vkuiInternalCardGrid--size-s',
  m: 'vkuiInternalCardGrid--size-m',
  l: 'vkuiInternalCardGrid--size-l',
};

export interface CardGridProps extends HTMLAttributesWithRootRef<HTMLDivElement>, HasComponent {
  /**
   * Размер карточек.
   */
  size?: 's' | 'm' | 'l';
  /**
   * Если true, то вокруг компонента присутствуют стандартные отсупы сверху/снизу и слева/справа.
   */
  padding?: boolean;
}

/**
 * @see https://vkui.io/components/card-grid
 */
export const CardGrid = ({
  size = 's',
  padding = false,
  Component = 'ul',
  ...restProps
}: CardGridProps): React.ReactNode => {
  const { sizeX: legacySizeX, viewWidth = 'none' } = useAdaptivity();

  return (
    <RootComponent
      {...restProps}
      Component={Component}
      baseClassName={classNames(
        styles.host,
        'vkuiInternalCardGrid',
        padding && styles.padding,
        stylesSize[size],
        getViewWidthClassName(viewWidth, legacySizeX),
      )}
    />
  );
};
