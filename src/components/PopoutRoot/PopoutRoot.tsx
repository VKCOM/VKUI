import React, { Component, HTMLAttributes, ReactNode } from 'react';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';
import { HasPlatform, HasRootRef } from '../../types';
import withAdaptivity, { ViewWidth, AdaptivityProps } from '../../hoc/withAdaptivity';
import { AppRootPortal } from '../AppRoot/AppRootPortal';

export interface PopoutRootProps extends HTMLAttributes<HTMLDivElement>, HasPlatform, AdaptivityProps, HasRootRef<HTMLDivElement> {
  popout?: ReactNode;
  modal?: ReactNode;
}

class PopoutRoot extends Component<PopoutRootProps> {
  static defaultProps: Partial<PopoutRootProps> = {
    popout: null,
  };

  static contextTypes = {
    window: PropTypes.any,
    document: PropTypes.any,
  };

  get document() {
    return this.context.document || document;
  }

  get window() {
    return this.context.window || window;
  }

  componentDidUpdate(prevProps: PopoutRootProps) {
    if (this.props.popout && !prevProps.popout) {
      this.blurActiveElement();
    }
  }

  blurActiveElement() {
    if (typeof this.window !== 'undefined' && this.document.activeElement) {
      this.document.activeElement.blur();
    }
  }

  render() {
    const { popout, modal, viewWidth, children, className, getRootRef, ...restProps } = this.props;
    const isDesktop = viewWidth >= ViewWidth.TABLET;

    return (
      <div
        {...restProps}
        className={classNames('PopoutRoot', className)}
        ref={getRootRef}
      >
        {children}
        <AppRootPortal className="PopoutRoot__portal">
          {!!popout && <div className={isDesktop ? 'PopoutRoot--absolute' : 'PopoutRoot__popout'}>{popout}</div>}
          {!!modal && <div className="PopoutRoot__modal">{modal}</div>}
        </AppRootPortal>
      </div>
    );
  }
}

export default withAdaptivity(PopoutRoot, {
  viewWidth: true,
});
