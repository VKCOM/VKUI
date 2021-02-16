import { Component, HTMLAttributes, ReactNode } from 'react';
import { classNames } from '../../lib/classNames';
import { HasPlatform, HasRootRef } from '../../types';
import { withAdaptivity, ViewWidth, AdaptivityProps } from '../../hoc/withAdaptivity';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import { DOMProps, withDOM } from '../../lib/dom';

export interface PopoutRootProps extends HTMLAttributes<HTMLDivElement>, HasPlatform, AdaptivityProps, HasRootRef<HTMLDivElement> {
  popout?: ReactNode;
  modal?: ReactNode;
}

class PopoutRoot extends Component<PopoutRootProps & DOMProps> {
  static defaultProps: Partial<PopoutRootProps> = {
    popout: null,
  };

  get document() {
    return this.props.document;
  }

  get window() {
    return this.props.window;
  }

  componentDidUpdate(prevProps: PopoutRootProps) {
    if (this.props.popout && !prevProps.popout) {
      this.blurActiveElement();
    }
  }

  blurActiveElement() {
    if (typeof this.window !== 'undefined' && this.document.activeElement) {
      (this.document.activeElement as HTMLElement).blur();
    }
  }

  render() {
    const { popout, modal, viewWidth, children, className, getRootRef, window, document, ...restProps } = this.props;
    const isDesktop = viewWidth >= ViewWidth.TABLET;

    return (
      <div
        {...restProps}
        className={classNames('PopoutRoot', className)}
        ref={getRootRef}
      >
        {children}
        <AppRootPortal>
          {!!popout && <div className={isDesktop ? 'PopoutRoot--absolute' : 'PopoutRoot__popout'}>{popout}</div>}
          {!!modal && <div className="PopoutRoot__modal">{modal}</div>}
        </AppRootPortal>
      </div>
    );
  }
}

export default withAdaptivity(withDOM<PopoutRootProps>(PopoutRoot), {
  viewWidth: true,
});
