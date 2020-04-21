import React, { HTMLAttributes } from 'react';
import getClassName from '../../helpers/getClassName';
import PropTypes, { Requireable } from 'prop-types';
import classNames from '../../lib/classNames';
import { transitionEndEventName, TransitionStartEventDetail, transitionStartEventName } from '../View/View';
import { tabbarHeight } from '../../appearance/constants';
import withInsets from '../../hoc/withInsets';
import { isNumeric } from '../../lib/utils';
import { HasInsets, HasPlatform, HasRootRef, OldRef } from '../../types';
import withPlatform from '../../hoc/withPlatform';
import withPanelContext from '../Panel/withPanelContext';

export interface FixedLayoutProps extends
  HTMLAttributes<HTMLDivElement>,
  HasRootRef<HTMLDivElement>,
  HasInsets,
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
}

export interface FixedLayoutState {
  position: 'absolute' | null;
  top: number;
}

export interface FixedLayoutContext {
  document: Requireable<{}>;
  hasTabbar: Requireable<boolean>;
}

class FixedLayout extends React.Component<FixedLayoutProps, FixedLayoutState> {
  state: FixedLayoutState = {
    position: null,
    top: null,
  };

  el: HTMLDivElement;

  static contextTypes: FixedLayoutContext = {
    document: PropTypes.any,
    hasTabbar: PropTypes.bool,
  };

  get document() {
    return this.context.document || document;
  }

  componentDidMount() {
    this.document.addEventListener(transitionStartEventName, this.onViewTransitionStart);
    this.document.addEventListener(transitionEndEventName, this.onViewTransitionEnd);
  }

  componentWillUnmount() {
    this.document.removeEventListener(transitionStartEventName, this.onViewTransitionStart);
    this.document.removeEventListener(transitionEndEventName, this.onViewTransitionEnd);
  }

  onViewTransitionStart: EventListener = (e: CustomEvent<TransitionStartEventDetail>) => {
    let panelScroll = e.detail.scrolls[this.props.panel] || 0;
    this.setState({
      position: 'absolute',
      top: this.el.offsetTop + panelScroll,
    });
  };

  onViewTransitionEnd: VoidFunction = () => {
    this.setState({
      position: null,
      top: null,
    });
  };

  getRef: OldRef<HTMLDivElement> = (element: HTMLDivElement) => {
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
    const { className, children, style, vertical, getRootRef, insets, platform, filled, separator, ...restProps } = this.props;
    const tabbarPadding = this.context.hasTabbar ? tabbarHeight : 0;
    const paddingBottom = vertical === 'bottom' && isNumeric(insets.bottom) ? insets.bottom + tabbarPadding : null;

    return (
      <div
        {...restProps}
        ref={this.getRef}
        className={classNames(getClassName('FixedLayout', platform), {
          'FixedLayout--filled': filled,
        }, `FixedLayout--${vertical}`, className)}
        style={{ ...style, ...this.state, paddingBottom }}
      >
        <div className="FixedLayout__in">{children}</div>
      </div>
    );
  }
}

export default withPlatform(withInsets(withPanelContext(FixedLayout)));
