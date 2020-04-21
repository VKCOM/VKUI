import React, { Component, HTMLAttributes, ReactNode } from 'react';
import PropTypes, { Requireable } from 'prop-types';
import classNames from '../../lib/classNames';
import { HasPlatform } from '../../types';
import withAdaptivity, { ViewMode, AdaptivityProps } from '../../hoc/withAdaptivity';

export interface PopoutRootProps extends HTMLAttributes<HTMLDivElement>, HasPlatform, AdaptivityProps {
  popout?: ReactNode;
  modal?: ReactNode;
}

export interface PopoutRootContext {
  document: Requireable<object>;
  window: Requireable<object>;
}

class PopoutRoot extends Component<PopoutRootProps> {
  static defaultProps: Partial<PopoutRootProps> = {
    popout: null,
  };

  static contextTypes: PopoutRootContext = {
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
    const { popout, modal, viewMode, children } = this.props;
    const isDesktop = viewMode >= ViewMode.TABLET;

    return (
      <div className={classNames('PopoutRoot', this.props.className)}>
        {children}
        {!!popout && <div className={isDesktop ? 'PopoutRoot--absolute' : 'PopoutRoot__popout'}>{popout}</div>}
        {!!modal && <div className="PopoutRoot__modal">{modal}</div>}
      </div>
    );
  }
}

export default withAdaptivity(PopoutRoot, {
  viewMode: true,
});

