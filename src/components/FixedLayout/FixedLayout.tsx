import React, { HTMLAttributes, RefCallback } from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { transitionEndEventName, TransitionStartEventDetail, transitionStartEventName } from '../View/View';
import { withContext } from '../../hoc/withContext';
import { HasPlatform, HasRef, HasRootRef } from '../../types';
import { withPlatform } from '../../hoc/withPlatform';
import { withPanelContext } from '../Panel/withPanelContext';
import { setRef } from '../../lib/utils';
import { SplitColContext, SplitColContextProps } from '../SplitCol/SplitCol';
import { TooltipContainer } from '../Tooltip/TooltipContainer';
import { PanelContextProps } from '../Panel/PanelContext';
import { DOMProps, withDOM } from '../../lib/dom';
import { IOS } from '../../lib/platform';

export interface FixedLayoutProps extends
  HTMLAttributes<HTMLDivElement>,
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

class FixedLayout extends React.Component<FixedLayoutProps & DOMProps & PanelContextProps, FixedLayoutState> {
  state: FixedLayoutState = {
    position: 'absolute',
    top: null,
    bottom: null,
    width: '',
  };

  el: HTMLDivElement;

  private onMountResizeTimeout: number;

  get document() {
    return this.props.document;
  }

  get window() {
    return this.props.window;
  }

  get currentPanel(): HTMLElement {
    const elem = this.props.getPanelNode();

    if (!elem) {
      console.warn('[VKUI/FixedLayout] Panel element not found');
    }

    return elem;
  }

  get canTargetPanelScroll() {
    const panelEl = this.currentPanel;
    if (!panelEl) {
      return true; // Всегда предпологаем, что может быть скролл в случае, если нет document
    }
    return panelEl.scrollHeight > panelEl.clientHeight;
  }

  componentDidMount() {
    this.onMountResizeTimeout = setTimeout(() => this.doResize());
    this.window.addEventListener('resize', this.doResize);

    this.document.addEventListener(transitionStartEventName, this.onViewTransitionStart);
    this.document.addEventListener(transitionEndEventName, this.onViewTransitionEnd);
  }

  componentWillUnmount() {
    clearInterval(this.onMountResizeTimeout);
    this.window.removeEventListener('resize', this.doResize);

    this.document.removeEventListener(transitionStartEventName, this.onViewTransitionStart);
    this.document.removeEventListener(transitionEndEventName, this.onViewTransitionEnd);
  }

  onViewTransitionStart: EventListener = (e: CustomEvent<TransitionStartEventDetail>) => {
    const { panel, platform } = this.props;
    let panelScroll = e.detail.scrolls[panel] || 0;

    // support for unstable ViewInfinite
    if (Array.isArray(panelScroll)) {
      const scrolls = panelScroll as number[];
      // ViewInfinite может открвыать одну и ту же панель несколько раз,
      // поэтому учитываем скролл панели только если это это панель с которой уходим, либо переход назад
      panelScroll = scrolls[scrolls.length - 1] || 0;
    }

    const hasScroll = panelScroll > 0;
    const fromPanel = panel === e.detail.from;
    const toPanel = panel === e.detail.to;
    const isSwipedBackPanel = toPanel && e.detail.isSwipeBack;
    const isBackPanel = toPanel && e.detail.isBack;
    const isIOS = platform === IOS;

    // если переход назад на Android - анимация только у панели с которой уходим (detail.from), и подстраиваться под скролл надо только на ней
    // на iOS переход между панелями горизонтальный, поэтому там нужно подстраивать хедеры на обеих панелях
    const panelAnimated = isIOS && (isBackPanel || isSwipedBackPanel) || !isIOS && !isBackPanel;

    // Для панелей, с которых уходим всегда выставляется скролл
    // Для панелей на которые приходим надо смотреть, есть ли браузерный скролл и применяется ли к ней анимация перехода:
    if (hasScroll && fromPanel || toPanel && this.canTargetPanelScroll && panelAnimated) {
      this.setState({
        position: 'absolute',
        top: this.props.vertical === 'top' || fromPanel ? this.el.offsetTop + panelScroll : null,
        bottom: this.props.vertical === 'bottom' && !fromPanel ? -panelScroll : null,
        width: '',
      });
    }
  };

  onViewTransitionEnd: VoidFunction = () => {
    this.setState({
      position: null,
      top: null,
      bottom: null,
    });

    this.doResize();
  };

  doResize = () => {
    const { colRef } = this.props.splitCol;

    if (colRef && colRef.current) {
      const node: HTMLElement = colRef.current;
      const width = node.offsetWidth;

      this.setState({ width: `${width}px`, position: null });
    } else {
      this.setState({ width: '', position: null });
    }
  };

  getRef: RefCallback<HTMLDivElement> = (element) => {
    this.el = element;
    setRef(element, this.props.getRootRef);
  };

  render() {
    const {
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
    } = this.props;

    return (
      <TooltipContainer
        {...restProps}
        fixed
        ref={this.getRef}
        vkuiClass={classNames(getClassName('FixedLayout', platform), {
          'FixedLayout--filled': filled,
        }, `FixedLayout--${vertical}`)}
        style={{ ...style, ...this.state }}
      >
        <div vkuiClass="FixedLayout__in" ref={getRef}>{children}</div>
      </TooltipContainer>
    );
  }
}

export default withContext(
  withPlatform(withPanelContext(withDOM<FixedLayoutProps>(FixedLayout))),
  SplitColContext,
  'splitCol',
);
