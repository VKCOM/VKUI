import React, { Component, HTMLAttributes, MouseEventHandler, ReactNode, SyntheticEvent } from 'react';
import Tappable from '../Tappable/Tappable';
import PopoutWrapper from '../PopoutWrapper/PopoutWrapper';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { transitionEvent } from '../../lib/supportEvents';
import { ANDROID, VKCOM, IOS } from '../../lib/platform';
import { HasPlatform } from '../../types';
import { withPlatform } from '../../hoc/withPlatform';
import { withAdaptivity, AdaptivityProps, ViewWidth } from '../../hoc/withAdaptivity';
import Button from '../Button/Button';
import { hasReactNode } from '../../lib/utils';
import Headline from '../Typography/Headline/Headline';
import Title from '../Typography/Title/Title';
import Caption from '../Typography/Caption/Caption';
import ModalDismissButton from '../ModalDismissButton/ModalDismissButton';

export interface AlertProps extends HTMLAttributes<HTMLElement>, HasPlatform, AdaptivityProps {
  actionsLayout?: 'vertical' | 'horizontal';
  actions?: Array<{
    title: string;
    action?: VoidFunction;
    autoclose?: boolean;
    mode: 'cancel' | 'destructive' | 'default';
  }>;
  header?: ReactNode;
  text?: ReactNode;
  onClose?: VoidFunction;
}

export interface AlertState {
  closing: boolean;
}

type TransitionEndHandler = (e?: TransitionEvent) => void;

type ItemClickHander = (item: AlertProps['actions'][0]) => () => void;

class Alert extends Component<AlertProps, AlertState> {
  constructor(props: AlertProps) {
    super(props);
    this.element = React.createRef();
    this.state = {
      closing: false,
    };
  }

  element: React.RefObject<HTMLDivElement>;

  private transitionFinishTimeout: ReturnType<typeof setTimeout>;

  static defaultProps: AlertProps = {
    actionsLayout: 'horizontal',
    actions: [],
  };

  onItemClick: ItemClickHander = (item: AlertProps['actions'][0]) => () => {
    const { action, autoclose } = item;

    if (autoclose) {
      this.setState({ closing: true });
      this.waitTransitionFinish((e?: TransitionEvent) => {
        if (!e || e.propertyName === 'opacity') {
          autoclose && this.props.onClose();
          action && action();
        }
      });
    } else {
      action && action();
    }
  };

  onClose: VoidFunction = () => {
    this.setState({ closing: true });
    this.waitTransitionFinish((e?: TransitionEvent) => {
      if (!e || e.propertyName === 'opacity') {
        this.props.onClose();
      }
    });
  };

  stopPropagation: MouseEventHandler = (e: SyntheticEvent) => {
    e.stopPropagation();
  };

  waitTransitionFinish(eventHandler: TransitionEndHandler) {
    if (transitionEvent.supported) {
      this.element.current.removeEventListener(transitionEvent.name, eventHandler);
      this.element.current.addEventListener(transitionEvent.name, eventHandler);
    } else {
      clearTimeout(this.transitionFinishTimeout);
      this.transitionFinishTimeout = setTimeout(eventHandler.bind(this), this.props.platform === ANDROID || this.props.platform === VKCOM ? 200 : 300);
    }
  }

  renderHeader(header: ReactNode) {
    switch (this.props.platform) {
      case VKCOM:
        return <Headline className="Alert__header" weight="medium">{header}</Headline>;
      case IOS:
        return <Title className="Alert__header" weight="semibold" level="3">{header}</Title>;
      case ANDROID:
        return <Title className="Alert__header" weight="medium" level="2">{header}</Title>;
    }
  }

  renderText(text: ReactNode) {
    switch (this.props.platform) {
      case VKCOM:
        return <Caption className="Alert__text" level="1" weight="regular">{text}</Caption>;
      case IOS:
        return <Caption className="Alert__text" level="2" weight="regular">{text}</Caption>;
      case ANDROID:
        return <Headline className="Alert__text" weight="regular">{text}</Headline>;
    }
  }

  renderAction = (action: AlertProps['actions'][0], i: number) => {
    const { platform } = this.props;
    switch (platform) {
      case ANDROID:
        return (
          <Button
            className={classNames('Alert__button', `Alert__button--${action.mode}`)}
            mode="tertiary"
            size="m"
            onClick={this.onItemClick(action)}
            key={`alert-action-${i}`}
          >
            {action.title}
          </Button>
        );
      case VKCOM:
        return (
          <Button
            className={classNames('Alert__button', `Alert__button--${action.mode}`)}
            size="m"
            mode={action.mode === 'cancel' ? 'secondary' : 'primary'}
            onClick={this.onItemClick(action)}
            key={`alert-action-${i}`}
          >
            {action.title}
          </Button>
        );
      default:
        return (
          <Tappable
            Component="button"
            className={classNames('Alert__action', `Alert__action--${action.mode}`)}
            onClick={this.onItemClick(action)}
            key={`alert-action-${i}`}
          >
            {action.title}
          </Tappable>
        );
    }
  };

  render() {
    const { actions, actionsLayout, children, className, style, platform, viewWidth, text, header, ...restProps } = this.props;
    const { closing } = this.state;

    const resolvedActionsLayout: AlertProps['actionsLayout'] = platform === VKCOM ? 'horizontal' : actionsLayout;
    const canShowCloseButton = platform === VKCOM || platform === ANDROID && viewWidth >= ViewWidth.SMALL_TABLET;

    return (
      <PopoutWrapper
        className={className}
        closing={closing}
        style={style}
        onClick={this.onClose}
      >
        <div
          {...restProps}
          ref={this.element}
          onClick={this.stopPropagation}
          className={classNames(getClassName('Alert', platform), {
            'Alert--v': resolvedActionsLayout === 'vertical',
            'Alert--h': resolvedActionsLayout === 'horizontal',
            'Alert--closing': closing,
          })}
        >
          {canShowCloseButton && <ModalDismissButton onClick={this.onClose} />}
          <div className="Alert__content">
            {hasReactNode(header) && this.renderHeader(header)}
            {hasReactNode(text) && this.renderText(text)}
            {children}
          </div>
          <footer className="Alert__actions">
            {actions.map(this.renderAction)}
          </footer>
        </div>
      </PopoutWrapper>
    );
  }
}

export default withPlatform(withAdaptivity(Alert, {
  viewWidth: true,
}));
