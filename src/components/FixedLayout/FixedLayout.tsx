import * as React from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { transitionEndEventName, TransitionStartEventDetail, transitionStartEventName } from '../View/View';
import { HasRef, HasRootRef } from '../../types';
import { SplitColContext } from '../SplitCol/SplitCol';
import { TooltipContainer } from '../Tooltip/TooltipContainer';
import { PanelContext } from '../Panel/PanelContext';
import { useDOM } from '../../lib/dom';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { useExternRef } from '../../hooks/useExternRef';
import { usePlatform } from '../../hooks/usePlatform';
import './FixedLayout.css';

export interface FixedLayoutProps extends
  React.HTMLAttributes<HTMLDivElement>,
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

const FixedLayout: React.FC<FixedLayoutProps> = ({
  children, style, vertical, getRootRef, getRef, filled,
  ...restProps
}: FixedLayoutProps) => {
  const platform = usePlatform();
  const { colRef } = React.useContext(SplitColContext);
  const { window, document } = useDOM();
  const { panel } = React.useContext(PanelContext);
  const [transitionOverrideStyle, setTransitionOverrideStyle] = React.useState<React.CSSProperties>({});
  const [width, setWidth] = React.useState<string>(null);
  const elRef = useExternRef(getRootRef);

  const doResize = () => setWidth(colRef?.current ? `${colRef.current.offsetWidth}px` : null);
  React.useEffect(doResize, []);
  useGlobalEventListener(window, 'resize', doResize);
  useGlobalEventListener(document, transitionStartEventName, (e: CustomEvent<TransitionStartEventDetail>) => {
    const panelScroll = e.detail.scrolls[panel];
    if (panelScroll > 0) {
      setTransitionOverrideStyle({
        position: 'absolute',
        top: vertical === 'top' ? elRef.current.offsetTop + panelScroll : null,
        bottom: vertical === 'bottom' ? -panelScroll : null,
      });
    }
  });
  useGlobalEventListener(document, transitionEndEventName, () => {
    setTransitionOverrideStyle({});
    doResize();
  });

  return (
    <TooltipContainer
      {...restProps}
      fixed
      ref={elRef}
      vkuiClass={classNames(getClassName('FixedLayout', platform), {
        'FixedLayout--filled': filled,
      }, `FixedLayout--${vertical}`)}
      style={{ ...style, ...transitionOverrideStyle, width }}
    >
      <div vkuiClass="FixedLayout__in" ref={getRef}>{children}</div>
    </TooltipContainer>
  );
};

export default FixedLayout;
