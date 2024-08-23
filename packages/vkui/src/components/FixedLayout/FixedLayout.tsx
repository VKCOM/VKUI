import { useCallback } from 'react';
import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { usePlatform } from '../../hooks/usePlatform';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import { useDOM } from '../../lib/dom';
import { setRef } from '../../lib/utils';
import type { HasComponent, HTMLAttributesWithRootRef } from '../../types';
import { OnboardingTooltipContainer } from '../OnboardingTooltip/OnboardingTooltipContainer';
import { SplitColContext } from '../SplitCol/SplitColContext';
import styles from './FixedLayout.module.css';

const stylesVertical = {
  top: styles['FixedLayout--vertical-top'],
  bottom: classNames(
    styles['FixedLayout--vertical-bottom'],
    'vkuiInternalFixedLayout--vertical-bottom',
  ),
};

export interface FixedLayoutProps extends HTMLAttributesWithRootRef<HTMLDivElement>, HasComponent {
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

export interface FixedLayoutState {
  position: 'absolute' | null;
  top: number;
  bottom: number;
  width: string;
}

/**
 * @see https://vkcom.github.io/VKUI/#/FixedLayout
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

  useGlobalEventListener(window, 'resize', doResize);
  useResizeObserver(useParentWidth ? parentRef : colRef, doResize);

  return (
    <OnboardingTooltipContainer
      {...restProps}
      fixed
      ref={handleRootRef}
      className={classNames(
        styles['FixedLayout'],
        platform === 'ios' && 'vkuiInternalFixedLayout--ios',
        filled && styles['FixedLayout--filled'],
        vertical && stylesVertical[vertical],
        className,
      )}
      style={{ ...style, width }}
    >
      {children}
    </OnboardingTooltipContainer>
  );
};
