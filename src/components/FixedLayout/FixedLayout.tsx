import * as React from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { transitionEndEventName, TransitionStartEventDetail, transitionStartEventName } from '../View/View';
import { HasRef, HasRootRef } from '../../types';
import { SplitColContext } from '../SplitCol/SplitCol';
import { TooltipContainer } from '../Tooltip/TooltipContainer';
import { PanelContext } from '../Panel/PanelContext';
import { useDOM } from '../../lib/dom';
import { IOS } from '../../lib/platform';
import { warnOnce } from '../../lib/warnOnce';
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

const warn = warnOnce('FixedLayout');

const FixedLayout: React.FC<FixedLayoutProps> = ({
  children, style, vertical, getRootRef, getRef, filled,
  ...restProps
}) => {
  const platform = usePlatform();
  const { colRef } = React.useContext(SplitColContext);
  const { window, document } = useDOM();
  const { panel, getPanelNode } = React.useContext(PanelContext);
  const [transitionOverrideStyle, setTransitionOverrideStyle] = React.useState<React.CSSProperties>({});
  const [width, setWidth] = React.useState<string>(null);
  const elRef = useExternRef(getRootRef);

  const doResize = () => setWidth(colRef?.current ? `${colRef.current.offsetWidth}px` : null);
  React.useEffect(doResize, []);
  useGlobalEventListener(window, 'resize', doResize);
  useGlobalEventListener(document, transitionStartEventName, (e: CustomEvent<TransitionStartEventDetail>) => {
    let panelScroll = e.detail.scrolls[panel] || 0;

    // support for unstable ViewInfinite
    if (Array.isArray(panelScroll)) {
      const scrolls = panelScroll as number[];
      panelScroll = scrolls[scrolls.length - 1];
    }

    const fromPanelHasScroll = panel === e.detail.from && panelScroll > 0;
    const toPanelHasScroll = panel === e.detail.to && panelScroll > 0;

    // если переход назад на Android - анимация только у панели с которой уходим (detail.from), и подстраиваться под скролл надо только на ней
    // на iOS переход между панелями горизонтальный, поэтому там нужно подстраивать хедеры на обеих панелях
    const panelAnimated = platform === IOS || !(panel === e.detail.to && e.detail.isBack);

    const currentPanel = getPanelNode();
    if (process.env.NODE_ENV === 'development' && !currentPanel) {
      warn('Panel element not found');
    }
    // Всегда предпологаем, что может быть скролл в случае, если нет document
    const canTargetPanelScroll = !currentPanel || currentPanel.scrollHeight > currentPanel.clientHeight;

    // Для панелей, с которых уходим всегда выставляется скролл
    // Для панелей на которые приходим надо смотреть, есть ли браузерный скролл и применяется ли к ней анимация перехода:
    if (fromPanelHasScroll || toPanelHasScroll && canTargetPanelScroll && panelAnimated) {
      setTransitionOverrideStyle({
        position: 'absolute',
        top: vertical === 'top' || fromPanelHasScroll ? elRef.current.offsetTop + panelScroll : null,
        bottom: vertical === 'bottom' && !fromPanelHasScroll ? -panelScroll : null,
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
