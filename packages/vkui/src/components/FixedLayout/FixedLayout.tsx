import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useExternRef } from '../../hooks/useExternRef';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { usePlatform } from '../../hooks/usePlatform';
import { useDOM } from '../../lib/dom';
import { Platform } from '../../lib/platform';
import { HasRef, HasRootRef } from '../../types';
import { SplitColContext } from '../SplitCol/SplitColContext';
import { TooltipContainer } from '../Tooltip/TooltipContainer';
import styles from './FixedLayout.module.css';

export interface FixedLayoutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement>,
    HasRef<HTMLDivElement> {
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
  getRef,
  filled,
  className,
  useParentWidth,
  ...restProps
}: FixedLayoutProps) => {
  const platform = usePlatform();
  const ref = useExternRef(getRootRef, getRef); // TODO [>=6]: удалить getRef
  const [width, setWidth] = React.useState<string | undefined>(undefined);
  const { window } = useDOM();
  const { colRef } = React.useContext(SplitColContext);

  const doResize = () => {
    if (useParentWidth && ref.current) {
      const parentWidth = ref.current.parentElement?.getBoundingClientRect().width;
      setWidth(parentWidth ? `${parentWidth}px` : undefined);
    } else if (colRef?.current) {
      const computedStyle = getComputedStyle(colRef.current);

      setWidth(
        `${
          colRef.current.clientWidth -
          parseFloat(computedStyle.paddingLeft) -
          parseFloat(computedStyle.paddingRight)
        }px`,
      );
    } else {
      setWidth(undefined);
    }
  };
  React.useEffect(doResize, [colRef, platform, ref, useParentWidth]);
  useGlobalEventListener(window, 'resize', doResize);

  return (
    <TooltipContainer
      {...restProps}
      fixed
      ref={ref}
      className={classNames(
        styles['FixedLayout'],
        platform === Platform.IOS && 'vkuiInternalFixedLayout--ios',
        filled && styles['FixedLayout--filled'],
        vertical &&
          {
            top: styles['FixedLayout--vertical-top'],
            bottom: classNames(
              styles['FixedLayout--vertical-bottom'],
              'vkuiInternalFixedLayout--vertical-bottom',
            ),
          }[vertical],
        className,
      )}
      style={{ ...style, width }}
    >
      {children}
    </TooltipContainer>
  );
};
