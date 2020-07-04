import React, { Children, Component, HTMLAttributes } from 'react';
import PopoutWrapper from '../PopoutWrapper/PopoutWrapper';
import { transitionEvent } from '../../lib/supportEvents';
import withPlatform from '../../hoc/withPlatform';
import withAdaptivity, { AdaptivityProps, ViewWidth } from '../../hoc/withAdaptivity';
import { HasPlatform } from '../../types';
import { ANDROID, IOS } from '../../lib/platform';
import ActionSheetDropdownDesktop from './ActionSheetDropdownDesktop';
import ActionSheetDropdown from './ActionSheetDropdown';

export interface ActionSheetProps extends HTMLAttributes<HTMLDivElement>, HasPlatform, AdaptivityProps {
  /**
   * iOS only
   */
  header?: React.ReactNode;
  /**
   * iOS only
   */
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

export type ClickHandler = (event: React.MouseEvent<HTMLDivElement>) => void;

export type ActionType = (event: React.MouseEvent) => void;

export type ItemClickHandler = (action: ActionType, autoclose: boolean) => (event: React.MouseEvent) => void;

export type AnimationEndCallback = (e?: AnimationEvent) => void;

export type IsItemLast = (index: number) => boolean;

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

  onItemClick: ItemClickHandler = (action: ActionType, autoclose: boolean) => (event: React.MouseEvent) => {
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
      this.transitionFinishTimeout = setTimeout(eventHandler, this.props.platform === ANDROID ? 200 : 300);
    }
  }

  isItemLast: IsItemLast = (index: number) => {
    const childrenArray = Children.toArray(this.props.children);

    return index === childrenArray.length - 1;
  };

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

    const items = Children.toArray(children);

    if (platform === IOS && !isDesktop) {
      items.push(iosCloseItem);
    }

    return (
      <PopoutWrapper
        closing={this.state.closing}
        alignY="bottom"
        className={className}
        style={style}
        onClick={this.onClose}
        hasMask={!isDesktop}
      >
        <DropdownComponent
          closing={this.state.closing}
          onClose={this.onClose}
          elementRef={this.elRef}
          {...restProps}
        >
          {platform === IOS &&
            <header className="ActionSheet__header">
              {header && <div className="ActionSheet__title">{header}</div>}
              {text && <div className="ActionSheet__text">{text}</div>}
            </header>
          }
          {items.map((child: React.ReactElement, index: number) =>
            child && React.cloneElement(child, {
              key: index,
              onClick: this.onItemClick(child.props.onClick, child.props.autoclose),
              isLast: this.isItemLast(index),
              href: child.props.href,
              target: child.props.target,
            }),
          )}
        </DropdownComponent>
      </PopoutWrapper>
    );
  }
}

export default withAdaptivity(withPlatform(ActionSheet), {
  viewWidth: true,
});
