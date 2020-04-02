import React, { Component, HTMLAttributes, ReactNode } from 'react';
import PropTypes, { Requireable } from 'prop-types';
import classNames from '../../lib/classNames';
import { HasPlatform } from '../../types';

export interface PopoutRootProps extends HTMLAttributes<HTMLDivElement>, HasPlatform {
  popout?: ReactNode;
  modal?: ReactNode;
}

export interface PopoutRootContext {
  document: Requireable<object>;
  window: Requireable<object>;
}

export default class PopoutRoot extends Component<PopoutRootProps> {
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
    const { popout, modal, children } = this.props;

    return (
      <div className={classNames('PopoutRoot', this.props.className)}>
        {children}
        {!!popout && <div className="PopoutRoot__popout">{popout}</div>}
        {!!modal && <div className="PopoutRoot__modal">{modal}</div>}
      </div>
    );
  }
}

