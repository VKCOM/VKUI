import React, { HTMLAttributes, ReactNode } from 'react';
import SideEffectComponent from '../SideEffectComponent/SideEffectComponent';
import classNames from '../../lib/classNames';
import { HasPlatform } from '../../types';
import withAdaptivity, { ViewWidth, AdaptivityProps } from '../../hoc/withAdaptivity';

export interface PopoutRootProps extends HTMLAttributes<HTMLDivElement>, HasPlatform, AdaptivityProps {
  popout?: ReactNode;
  modal?: ReactNode;
}

class PopoutRoot extends SideEffectComponent<PopoutRootProps> {
  static defaultProps: Partial<PopoutRootProps> = {
    popout: null,
  };

  componentDidUpdate(prevProps: PopoutRootProps) {
    if (this.props.popout && !prevProps.popout) {
      this.blurActiveElement();
    }
  }

  blurActiveElement() {
    if (typeof this.window !== 'undefined' && this.document.activeElement instanceof HTMLElement) {
      this.document.activeElement.blur();
    }
  }

  render() {
    const { popout, modal, viewWidth, children } = this.props;
    const isDesktop = viewWidth >= ViewWidth.TABLET;

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
  viewWidth: true,
});

