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
  width: string;
}

class FixedLayout extends React.Component<FixedLayoutProps & DOMProps & PanelContextProps, FixedLayoutState> {
  state: FixedLayoutState = {
    position: 'absolute',
    top: null,
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
    const { scrolls, from, to } = e.detail;
    const { panel } = this.props;
    let panelScroll = scrolls[panel] || 0;

    if (panelScroll > 0 && (panel === from || panel === to)) {
      this.setState({
        position: 'absolute',
        top: this.el.offsetTop + panelScroll,
        width: '',
      });
    }
  };

  onViewTransitionEnd: VoidFunction = () => {
    this.setState({
      position: null,
      top: null,
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
