import * as React from 'react';
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
import { warnOnce } from '../../lib/warnOnce';
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

    if (process.env.NODE_ENV === 'development' && !elem) {
      warn('Panel element not found');
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
    clearTimeout(this.onMountResizeTimeout);
    this.window.removeEventListener('resize', this.doResize);

    this.document.removeEventListener(transitionStartEventName, this.onViewTransitionStart);
    this.document.removeEventListener(transitionEndEventName, this.onViewTransitionEnd);
  }

  onViewTransitionStart: EventListener = (e: CustomEvent<TransitionStartEventDetail>) => {
    let panelScroll = e.detail.scrolls[this.props.panel] || 0;

    // support for unstable ViewInfinite
    if (Array.isArray(panelScroll)) {
      const scrolls = panelScroll as number[];
      panelScroll = scrolls[scrolls.length - 1];
    }

    const fromPanelHasScroll = this.props.panel === e.detail.from && panelScroll > 0;
    const toPanelHasScroll = this.props.panel === e.detail.to && panelScroll > 0;

    // если переход назад на Android - анимация только у панели с которой уходим (detail.from), и подстраиваться под скролл надо только на ней
    // на iOS переход между панелями горизонтальный, поэтому там нужно подстраивать хедеры на обеих панелях
    const panelAnimated = this.props.platform === IOS || !(this.props.panel === e.detail.to && e.detail.isBack);

    // Для панелей, с которых уходим всегда выставляется скролл
    // Для панелей на которые приходим надо смотреть, есть ли браузерный скролл и применяется ли к ней анимация перехода:
    if (fromPanelHasScroll || toPanelHasScroll && this.canTargetPanelScroll && panelAnimated) {
      this.setState({
        position: 'absolute',
        top: this.props.vertical === 'top' || fromPanelHasScroll ? this.el.offsetTop + panelScroll : null,
        bottom: this.props.vertical === 'bottom' && !fromPanelHasScroll ? -panelScroll : null,
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

  getRef: React.RefCallback<HTMLDivElement> = (element) => {
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
          [`FixedLayout--${vertical}`]: !!vertical,
        })}
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
