import React, { Component, HTMLAttributes, RefObject } from 'react';
import FixedLayout from '../FixedLayout/FixedLayout';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import { animationEvent } from '../../lib/supportEvents';
import { withAdaptivity, AdaptivityProps, ViewWidth } from '../../hoc/withAdaptivity';
import { DOMProps, withDOM } from '../../lib/dom';
import { withPlatform } from '../../hoc/withPlatform';
import { HasPlatform } from '../../types';

export interface PanelHeaderContextProps extends HTMLAttributes<HTMLDivElement>, HasPlatform, AdaptivityProps {
  opened: boolean;
  onClose: VoidFunction;
}

export interface PanelHeaderContextState {
  closing: boolean;
}

export class PanelHeaderContext extends Component<PanelHeaderContextProps & DOMProps, PanelHeaderContextState> {
  static defaultProps: Partial<PanelHeaderContextProps> = {
    opened: false,
  };

  state: PanelHeaderContextState = {
    closing: false,
  };

  elementRef: RefObject<HTMLDivElement> = React.createRef();

  private animationFinishTimeout: ReturnType<typeof setTimeout>;

  get isDesktop(): boolean {
    return this.props.viewWidth >= ViewWidth.SMALL_TABLET;
  }

  startClosing = (event: Event) => {
    if (this.elementRef && this.elementRef.current && !this.elementRef.current.contains(event.target as Node)) {
      this.props.onClose();
      this.props.document.removeEventListener('click', this.startClosing);
    }
  };

  componentDidMount() {
    if (this.props.opened && this.isDesktop) {
      this.props.document.addEventListener('click', this.startClosing);
    }
  }

  componentDidUpdate(prevProps: PanelHeaderContextProps) {
    if (this.props.opened !== prevProps.opened || this.props.viewWidth !== prevProps.viewWidth) {
      if (this.props.opened === false && !this.state.closing) {
        this.setState({ closing: true });
        this.waitAnimationFinish(this.onAnimationFinish);
      }

      if (this.isDesktop && this.props.opened) {
        this.props.document.addEventListener('click', this.startClosing);
      } else {
        this.props.document.removeEventListener('click', this.startClosing);
      }
    }
  }

  componentWillUnmount() {
    if (this.isDesktop) {
      this.props.document.removeEventListener('click', this.startClosing);
    }
  }

  waitAnimationFinish(eventHandler: VoidFunction) {
    if (this.elementRef.current) {
      if (animationEvent.supported) {
        this.elementRef.current.removeEventListener(animationEvent.name, eventHandler);
        this.elementRef.current.addEventListener(animationEvent.name, eventHandler);
      } else {
        clearTimeout(this.animationFinishTimeout);
        this.animationFinishTimeout = setTimeout(eventHandler, 200);
      }
    }
  }

  onAnimationFinish: VoidFunction = () => {
    this.setState({ closing: false });
  };

  render() {
    const { children, opened, onClose, platform, viewWidth, hasMouse, window, document, ...restProps } = this.props;
    const { closing } = this.state;
    const baseClassNames = getClassName('PanelHeaderContext', platform);

    return (
      <FixedLayout {...restProps} vkuiClass={classNames(baseClassNames, {
        'PanelHeaderContext--opened': opened,
        'PanelHeaderContext--closing': closing,
        'PanelHeaderContext--desktop': this.isDesktop,
      })} vertical="top">
        <div vkuiClass="PanelHeaderContext__in" ref={this.elementRef}>
          <div vkuiClass="PanelHeaderContext__content">
            {(opened || closing) && children}
          </div>
        </div>
        {!this.isDesktop && (opened || closing) && <div onClick={onClose} vkuiClass="PanelHeaderContext__fade" />}
      </FixedLayout>
    );
  }
}

export default withAdaptivity(withPlatform(withDOM(PanelHeaderContext)), {
  viewWidth: true,
  hasMouse: true,
});
