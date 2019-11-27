import React, { HTMLAttributes } from 'react';
import getClassName from '../../helpers/getClassName';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';
import { transitionEndEventName, transitionStartEventName } from '../View/View';
import { tabbarHeight } from '../../appearance/constants';
import withInsets from '../../hoc/withInsets';
import { isNumeric } from '../../lib/utils';
import { HasChildren, HasInsets, HasPlatform, HasRootRef } from '../../types/props';
import withPlatform from '../../hoc/withPlatform';

export interface FixedLayoutProps extends
  HTMLAttributes<HTMLDivElement>,
  HasChildren,
  HasRootRef<HTMLDivElement>,
  HasInsets,
  HasPlatform
{
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
}

class FixedLayout extends React.Component<FixedLayoutProps, FixedLayoutState> {
  state = {
    position: null,
    top: null
  };

  el: HTMLDivElement

  static contextTypes = {
    panel: PropTypes.string,
    document: PropTypes.any,
    hasTabbar: PropTypes.bool
  };

  get document () {
    return this.context.document || document;
  }

  componentDidMount () {
    this.document.addEventListener(transitionStartEventName, this.onViewTransitionStart);
    this.document.addEventListener(transitionEndEventName, this.onViewTransitionEnd);
  }

  componentWillUnmount () {
    this.document.removeEventListener(transitionStartEventName, this.onViewTransitionStart);
    this.document.removeEventListener(transitionEndEventName, this.onViewTransitionEnd);
  }

  onViewTransitionStart = (e) => {
    let panelScroll = e.detail.scrolls[this.context.panel] || 0;
    this.setState({
      position: 'absolute',
      top: this.el.offsetTop + panelScroll
    });
  };

  onViewTransitionEnd = () => {
    this.setState({
      position: null,
      top: null
    });
  };

  getRef = (element) => {
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

  render () {
    const { className, children, style, vertical, getRootRef, insets, platform, filled, ...restProps } = this.props;
    const tabbarPadding = this.context.hasTabbar ? tabbarHeight : 0;
    const paddingBottom = vertical === 'bottom' && isNumeric(insets.bottom) ? insets.bottom + tabbarPadding : null;

    return (
      <div
        {...restProps}
        ref={this.getRef}
        className={classNames(getClassName('FixedLayout', platform), {
          'FixedLayout--filled': filled
        }, `FixedLayout--${vertical}`, className)}
        style={{ ...style, ...this.state, paddingBottom }}
      >
        <div className="FixedLayout__in">{children}</div>
      </div>
    );
  }
}

export default withPlatform(withInsets(FixedLayout));
