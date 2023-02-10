import * as React from 'react';
import { Platform } from '../../lib/platform';
import { classNames } from '@vkontakte/vkjs';
import { HasRef, HasRootRef } from '../../types';
import { SplitColContext } from '../SplitCol/SplitColContext';
import { TooltipContainer } from '../Tooltip/TooltipContainer';
import { useDOM } from '../../lib/dom';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { usePlatform } from '../../hooks/usePlatform';
import { useExternRef } from '../../hooks/useExternRef';
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
  ...restProps
}: FixedLayoutProps) => {
  const platform = usePlatform();
  const ref = useExternRef(getRootRef, getRef); // TODO: v6 удалить getRef
  const [width, setWidth] = React.useState<string | undefined>(undefined);
  const { window } = useDOM();
  const { colRef } = React.useContext(SplitColContext);
  const doResize = () => {
    if (colRef?.current) {
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
  React.useEffect(doResize, [colRef, platform]);
  useGlobalEventListener(window, 'resize', doResize);

  return (
    <TooltipContainer
      {...restProps}
      fixed
      ref={ref}
      className={classNames(
        styles['FixedLayout'],
        platform === Platform.IOS && styles['FixedLayout--ios'],
        filled && styles['FixedLayout--filled'],
        vertical && styles[`FixedLayout--vertical-${vertical}`],
        className,
      )}
      style={{ ...style, width }}
    >
      {children}
    </TooltipContainer>
  );
};
