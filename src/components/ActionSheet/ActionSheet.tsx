import React, { Component, HTMLAttributes } from 'react';
import PopoutWrapper from '../PopoutWrapper/PopoutWrapper';
import { transitionEvent } from '../../lib/supportEvents';
import withPlatform from '../../hoc/withPlatform';
import withAdaptivity, { AdaptivityProps, ViewWidth } from '../../hoc/withAdaptivity';
import { HasPlatform } from '../../types';
import { ANDROID, IOS, VKCOM } from '../../lib/platform';
import ActionSheetDropdownDesktop from './ActionSheetDropdownDesktop';
import ActionSheetDropdown from './ActionSheetDropdown';
import { hasReactNode } from '../../lib/utils';
import { ActionSheetContext, ItemClickHandler } from './ActionSheetContext';
import Caption from '../Typography/Caption/Caption';

export interface ActionSheetProps extends HTMLAttributes<HTMLDivElement>, HasPlatform, AdaptivityProps {
  header?: React.ReactNode;
  text?: React.ReactNode;
  onClose(): void;
  /**
   * Desktop only
   */
  toggleRef: Element;
  iosCloseItem: React.ReactNode;
}

export interface ActionSheetState {
  closing: boolean;
}

export type CloseCallback = () => void;

export type AnimationEndCallback = (e?: AnimationEvent) => void;

class ActionSheet extends Component<ActionSheetProps, ActionSheetState> {
  constructor(props: ActionSheetProps) {
    super(props);
    this.elRef = React.createRef();
  }

  state: ActionSheetState = {
    closing: false,
  };

  elRef: React.RefObject<HTMLDivElement>;

  private transitionFinishTimeout: ReturnType<typeof setTimeout>;

  onClose: CloseCallback = () => {
    this.setState({ closing: true });
    this.waitTransitionFinish(this.props.onClose);
  };

  onItemClick: ItemClickHandler = (action, autoclose) => (event) => {
    event.persist();

    if (autoclose) {
      this.setState({ closing: true });
      this.waitTransitionFinish(() => {
        this.props.onClose();
        action && action(event);
      });
    } else {
      action && action(event);
    }
  };

  waitTransitionFinish(eventHandler: AnimationEndCallback) {
    if (this.props.viewWidth >= ViewWidth.TABLET) {
      eventHandler();
    }

    if (transitionEvent.supported) {
      this.elRef.current.removeEventListener(transitionEvent.name, eventHandler);
      this.elRef.current.addEventListener(transitionEvent.name, eventHandler);
    } else {
      clearTimeout(this.transitionFinishTimeout);
      this.transitionFinishTimeout = setTimeout(eventHandler, this.props.platform === ANDROID || this.props.platform === VKCOM ? 200 : 300);
    }
  }

  render() {
    const {
      children,
      className,
      header,
      text,
      style,
      platform,
      viewWidth,
      iosCloseItem,
      ...restProps
    } = this.props;

    const isDesktop = viewWidth >= ViewWidth.TABLET;

    const DropdownComponent = isDesktop
      ? ActionSheetDropdownDesktop
      : ActionSheetDropdown;

    return (
      <PopoutWrapper
        closing={this.state.closing}
        alignY="bottom"
        className={className}
        style={style}
        onClick={this.onClose}
        hasMask={!isDesktop}
      >
        <ActionSheetContext.Provider
          value={{
            onItemClick: this.onItemClick,
            isDesktop,
          }}>
          <DropdownComponent
            closing={this.state.closing}
            onClose={this.onClose}
            elementRef={this.elRef}
            {...restProps}
          >
            {(hasReactNode(header) || hasReactNode(text)) &&
              <header className="ActionSheet__header">
                {hasReactNode(header) &&
                  <Caption level="1" weight={platform === IOS ? 'semibold' : 'medium'} className="ActionSheet__title">
                    {header}
                  </Caption>
                }
                {hasReactNode(text) && <Caption level="1" weight="regular" className="ActionSheet__text">{text}</Caption>}
              </header>
            }
            {children}
            {platform === IOS && !isDesktop && iosCloseItem}
          </DropdownComponent>
        </ActionSheetContext.Provider>
      </PopoutWrapper>
    );
  }
}

export default withAdaptivity(withPlatform(ActionSheet), {
  viewWidth: true,
});
