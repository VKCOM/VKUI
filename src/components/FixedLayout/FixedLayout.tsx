import React, { HTMLAttributes, RefCallback } from 'react';
import getClassName from '../../helpers/getClassName';
import PropTypes, { Requireable } from 'prop-types';
import classNames from '../../lib/classNames';
import { transitionEndEventName, TransitionStartEventDetail, transitionStartEventName } from '../View/View';
import { SplitContext, SplitContextProps } from '../../components/SplitLayout/SplitLayout';
import withContext from '../../hoc/withContext';
import { HasPlatform, HasRootRef } from '../../types';
import withPlatform from '../../hoc/withPlatform';
import withPanelContext from '../Panel/withPanelContext';

export interface FixedLayoutProps extends
  HTMLAttributes<HTMLDivElement>,
  HasRootRef<HTMLDivElement>,
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
  panel?: string;
  /**
   * @ignore
   */
  separator?: boolean;

  splitCol?: SplitContextProps;
}

export interface FixedLayoutState {
  position: 'absolute' | null;
  top: number;
  width: string;
}

export interface FixedLayoutContext {
  document: Requireable<{}>;
}

class FixedLayout extends React.Component<FixedLayoutProps, FixedLayoutState> {
  state: FixedLayoutState = {
    position: 'absolute',
    top: null,
    width: '',
  };

  el: HTMLDivElement;

  static contextTypes: FixedLayoutContext = {
    document: PropTypes.any,
  };

  private onMountResizeTimeout: number;

  get document() {
    return this.context.document || document;
  }

  componentDidMount() {
    this.onMountResizeTimeout = setTimeout(() => this.doResize());
    window.addEventListener('resize', this.doResize);

    this.document.addEventListener(transitionStartEventName, this.onViewTransitionStart);
    this.document.addEventListener(transitionEndEventName, this.onViewTransitionEnd);
  }

  componentWillUnmount() {
    clearInterval(this.onMountResizeTimeout);
    window.removeEventListener('resize', this.doResize);

    this.document.removeEventListener(transitionStartEventName, this.onViewTransitionStart);
    this.document.removeEventListener(transitionEndEventName, this.onViewTransitionEnd);
  }

  onViewTransitionStart: EventListener = (e: CustomEvent<TransitionStartEventDetail>) => {
    let panelScroll = e.detail.scrolls[this.props.panel] || 0;
    this.setState({
      position: 'absolute',
      top: this.el.offsetTop + panelScroll,
      width: '',
    });
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

    const getRootRef = this.props.getRootRef;
    if (getRootRef) {
      if (typeof getRootRef === 'function') {
        getRootRef(element);
      } else {
        getRootRef.current = element;
      }
    }
  };

  render() {
    const { className, children, style, vertical, getRootRef, platform, filled, separator, splitCol, ...restProps } = this.props;

    return (
      <div
        {...restProps}
        ref={this.getRef}
        className={classNames(getClassName('FixedLayout', platform), {
          'FixedLayout--filled': filled,
        }, `FixedLayout--${vertical}`, className)}
        style={{ ...style, ...this.state }}
      >
        <div className="FixedLayout__in">{children}</div>
      </div>
    );
  }
}

export default withContext(
  withPlatform(withPanelContext(FixedLayout)),
  SplitContext,
  'splitCol',
);
