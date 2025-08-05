'use client';

import { useCallback } from 'react';
import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import { useDOM } from '../../lib/dom';
import { setRef } from '../../lib/utils';
import type { HasComponent, HTMLAttributesWithRootRef } from '../../types';
import { OnboardingTooltipContainer } from '../OnboardingTooltip/OnboardingTooltipContainer';
import { SplitColContext } from '../SplitCol/SplitColContext';
import styles from './FixedLayout.module.css';

const stylesVertical = {
  top: styles.verticalTop,
  bottom: classNames(styles.verticalBottom, 'vkuiInternalFixedLayout--vertical-bottom'),
};

export interface FixedLayoutProps extends HTMLAttributesWithRootRef<HTMLDivElement>, HasComponent {
  /**
   * Положение по вертикали, либо сверху, либо снизу.
   */
  vertical?: 'top' | 'bottom';
  /**
   * Это свойство определяет, будет ли фон компонента окрашен в цвет фона контента.
   * Это часто необходимо для фиксированных кнопок в нижней части экрана.
   */
  filled?: boolean;
  /**
   * Всегда соответствовать ширине родителя.
   * Ширина пересчитывается по событию `window` `resize`.
   */
  useParentWidth?: boolean;
}

/**
 * @see https://vkui.io/components/fixed-layout
 */
export const FixedLayout = ({
  children,
  style,
  vertical,
  getRootRef,
  filled,
  className,
  useParentWidth,
  ...restProps
}: FixedLayoutProps): React.ReactNode => {
  const platform = usePlatform();
  const ref = React.useRef<HTMLElement | null>(null);
  const [width, setWidth] = React.useState<string | undefined>(undefined);
  const { window } = useDOM();
  const { colRef } = React.useContext(SplitColContext);
  const parentRef = React.useRef<HTMLElement | null>(null);

  const handleRootRef = useCallback(
    (node: HTMLElement | null) => {
      if (!node) {
        return;
      }

      setRef(node, getRootRef);
      setRef(node, ref);
      setRef(node.parentElement, parentRef);
    },
    [getRootRef],
  );

  const doResize = () => {
    if (useParentWidth && parentRef.current) {
      const parentWidth = parentRef.current.getBoundingClientRect().width;
      setWidth(parentWidth ? `${parentWidth}px` : undefined);
    } else if (colRef?.current) {
      const computedStyle = getComputedStyle(colRef.current);

      setWidth(
        `${
          colRef.current.clientWidth -
          parseFloat(computedStyle.paddingLeft || '0') -
          parseFloat(computedStyle.paddingRight || '0')
        }px`,
      );
    } else {
      setWidth(undefined);
    }
  };
  React.useEffect(doResize, [colRef, platform, ref, useParentWidth]);

  useResizeObserver(window, doResize);
  useResizeObserver(useParentWidth ? parentRef : colRef, doResize);

  return (
    <OnboardingTooltipContainer
      {...restProps}
      fixed
      ref={handleRootRef}
      className={classNames(
        styles.host,
        platform === 'ios' && 'vkuiInternalFixedLayout--ios',
        filled && styles.filled,
        vertical && stylesVertical[vertical],
        className,
      )}
      style={{ width, ...style }}
    >
      {children}
    </OnboardingTooltipContainer>
  );
};
