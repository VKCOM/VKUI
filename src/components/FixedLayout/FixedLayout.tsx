import React, { createRef, HTMLAttributes, RefCallback } from 'react';
import getClassName from '../../helpers/getClassName';
import PropTypes, { Requireable } from 'prop-types';
import classNames from '../../lib/classNames';
import { transitionEndEventName, transitionStartEventName } from '../View/View';
import { tabbarHeight } from '../../appearance/constants';
import withInsets from '../../hoc/withInsets';
import { isNumeric } from '../../lib/utils';
import { HasInsets, HasPlatform, HasRootRef } from '../../types';
import withPlatform from '../../hoc/withPlatform';
import withPanelContext from '../Panel/withPanelContext';
import { withScrolls } from '../../hoc/withScrolls';
import { ScrollsContextConsumer } from '../../lib/ScrollContext';

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

  contentRef = createRef<HTMLDivElement>();

  componentDidMount() {
    this.document.addEventListener(transitionStartEventName, this.onViewTransitionStart);
    this.document.addEventListener(transitionEndEventName, this.onViewTransitionEnd);
  }

  componentWillUnmount() {
    this.document.removeEventListener(transitionStartEventName, this.onViewTransitionStart);
    this.document.removeEventListener(transitionEndEventName, this.onViewTransitionEnd);
  }

  onViewTransitionStart: EventListener = () => {
    this.setState({
      position: 'absolute',
    });
  };

  onViewTransitionEnd: VoidFunction = () => {
    this.setState({
      position: undefined,
    });
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
    const { className, children, style, vertical, getRootRef, insets, platform, filled, separator, ...restProps } = this.props;
    const tabbarPadding = this.context.hasTabbar ? tabbarHeight : 0;
    const paddingBottom = vertical === 'bottom' && isNumeric(insets.bottom) ? insets.bottom + tabbarPadding : null;
    const { position } = this.state;

    return (
      <ScrollsContextConsumer>
        {({ scrolls }) => {
          const scroll = scrolls[this.props.panel] || 0;
          const elHeight = this.contentRef.current?.clientHeight || 0;
          const top = vertical === 'bottom' ? `calc(${scroll - elHeight}px + 100vh)` : scroll;

          return <div
            {...restProps}
            ref={this.getRef}
            className={classNames(getClassName('FixedLayout', platform), {
              'FixedLayout--filled': filled,
            }, `FixedLayout--${vertical}`, className)}
            style={{
              ...style,
              paddingBottom,
              position,
              top: position === 'absolute' ? top : undefined,
            }}
          >
            <div className="FixedLayout__in" ref={this.contentRef}>{children}</div>
          </div>;
        }
        }
      </ScrollsContextConsumer>
    );
  }
}

export default withScrolls(withPlatform(withInsets(withPanelContext(FixedLayout))));
