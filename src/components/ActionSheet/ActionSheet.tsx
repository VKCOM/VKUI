import React, { Component, HTMLAttributes } from 'react';
import PopoutWrapper from '../PopoutWrapper/PopoutWrapper';
import { transitionEvent } from '../../lib/supportEvents';
import { withPlatform } from '../../hoc/withPlatform';
import { withAdaptivity, AdaptivityProps, ViewWidth, ViewHeight } from '../../hoc/withAdaptivity';
import { HasPlatform } from '../../types';
import { ANDROID, IOS, VKCOM } from '../../lib/platform';
import ActionSheetDropdownDesktop from './ActionSheetDropdownDesktop';
import ActionSheetDropdown from './ActionSheetDropdown';
import { hasReactNode } from '../../lib/utils';
import { ActionSheetContext, ItemClickHandler } from './ActionSheetContext';
import Caption from '../Typography/Caption/Caption';

export type PopupDirectionFunction = (elRef: React.RefObject<HTMLDivElement>) => 'top' | 'bottom';

export interface ActionSheetProps extends HTMLAttributes<HTMLDivElement>, HasPlatform, AdaptivityProps {
  header?: React.ReactNode;
  text?: React.ReactNode;
  onClose?: VoidFunction;
  /**
   * Desktop only
   */
  toggleRef: Element;
  /**
   * Desktop only
   */
  popupDirection?: 'top' | 'bottom' | PopupDirectionFunction;
  /**
   * iOS only
   */
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

  static defaultProps: Partial<ActionSheetProps> = {
    popupDirection: 'bottom',
  };

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

  get isDesktop() {
    const { viewWidth, viewHeight, hasMouse } = this.props;
    return viewWidth >= ViewWidth.SMALL_TABLET && (hasMouse || viewHeight >= ViewHeight.MEDIUM);
  }

  waitTransitionFinish(eventHandler: AnimationEndCallback) {
    if (this.isDesktop) {
      return eventHandler();
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
      viewHeight,
      hasMouse,
      iosCloseItem,
      ...restProps
    } = this.props;

    const isDesktop = this.isDesktop;

    const DropdownComponent = isDesktop
      ? ActionSheetDropdownDesktop
      : ActionSheetDropdown;

    return (
      <PopoutWrapper
        closing={this.state.closing}
        alignY="bottom"
        className={className}
        style={style}
        onClick={!isDesktop ? this.onClose : null}
        hasMask={!isDesktop}
        fixed={!isDesktop}
      >
        <ActionSheetContext.Provider
          value={{
            onItemClick: this.onItemClick,
            isDesktop,
          }}
        >
          <DropdownComponent
            closing={this.state.closing}
            onClose={this.onClose}
            elementRef={this.elRef}
            {...restProps}
          >
            {(hasReactNode(header) || hasReactNode(text)) &&
              <header vkuiClass="ActionSheet__header">
                {hasReactNode(header) &&
                  <Caption level="1" weight={platform === IOS ? 'semibold' : 'medium'} vkuiClass="ActionSheet__title">
                    {header}
                  </Caption>
                }
                {hasReactNode(text) && <Caption level="1" weight="regular" vkuiClass="ActionSheet__text">{text}</Caption>}
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
  viewHeight: true,
  hasMouse: true,
});
