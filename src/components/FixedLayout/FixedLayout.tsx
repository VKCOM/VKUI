import * as React from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { transitionEndEventName, TransitionStartEventDetail, transitionStartEventName } from '../View/View';
import { withContext } from '../../hoc/withContext';
import { HasPlatform, HasRef, HasRootRef } from '../../types';
import { withPlatform } from '../../hoc/withPlatform';
import { withPanelContext } from '../Panel/withPanelContext';
import { SplitColContext, SplitColContextProps } from '../SplitCol/SplitCol';
import { TooltipContainer } from '../Tooltip/TooltipContainer';
import { PanelContextProps } from '../Panel/PanelContext';
import { DOMProps, withDOM } from '../../lib/dom';
import { IOS } from '../../lib/platform';
import { warnOnce } from '../../lib/warnOnce';
import { useTimeout } from '../../hooks/useTimeout';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { useExternRef } from '../../hooks/useExternRef';
import './FixedLayout.css';

export interface FixedLayoutProps extends
  React.HTMLAttributes<HTMLDivElement>,
  HasRootRef<HTMLDivElement>,
  HasRef<HTMLDivElement>,
  HasPlatform {
  vertical?: 'top' | 'bottom';
  /**
   * Это свойство определяет, будет ли фон компонента окрашен в цвет фона контента.
   * Это часто необходимо для фиксированных кнопок в нижней части экрана.
   */
  filled?: boolean;
  /**
   * @ignore
   */
  splitCol?: SplitColContextProps;
}

export interface FixedLayoutState {
  position: 'absolute' | null;
  top: number;
  bottom: number;
  width: string;
}

const warn = warnOnce('FixedLayout');

const FixedLayout: React.FC<FixedLayoutProps & DOMProps & PanelContextProps> = ({
  children,
  style,
  vertical,
  getRootRef,
  getRef,
  platform,
  filled,
  splitCol,
  panel,
  getPanelNode,
  window,
  document,
  ...restProps
}) => {
  const [transitionOverrideStyle, setTransitionOverrideStyle] = React.useState<React.CSSProperties>({});
  const [width, setWidth] = React.useState<string>(null);
  const elRef = useExternRef(getRootRef);

  const currentPanel = getPanelNode();
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development' && !currentPanel) {
      warn('Panel element not found');
    }
  }, [currentPanel]);
  // Всегда предпологаем, что может быть скролл в случае, если нет document
  const canTargetPanelScroll = !currentPanel || currentPanel.scrollHeight > currentPanel.clientHeight;

  const doResize = () => setWidth(splitCol?.colRef?.current ? `${splitCol.colRef.current.offsetWidth}px` : null);
  useTimeout(doResize, 0).set();
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

export default withContext(
  withPlatform(withPanelContext(withDOM<FixedLayoutProps>(FixedLayout))),
  SplitColContext,
  'splitCol',
);
