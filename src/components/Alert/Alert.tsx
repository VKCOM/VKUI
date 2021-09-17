import * as React from 'react';
import Tappable from '../Tappable/Tappable';
import { PopoutWrapper } from '../PopoutWrapper/PopoutWrapper';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { transitionEvent } from '../../lib/supportEvents';
import { ANDROID, VKCOM, IOS } from '../../lib/platform';
import { HasPlatform } from '../../types';
import { withPlatform } from '../../hoc/withPlatform';
import { withAdaptivity, AdaptivityProps, ViewWidth } from '../../hoc/withAdaptivity';
import Button, { ButtonProps } from '../Button/Button';
import { hasReactNode } from '../../lib/utils';
import Headline from '../Typography/Headline/Headline';
import Title from '../Typography/Title/Title';
import Caption from '../Typography/Caption/Caption';
import ModalDismissButton from '../ModalDismissButton/ModalDismissButton';
import './Alert.css';

export type AlertActionInterface = AlertProps['actions'][0] & React.AnchorHTMLAttributes<HTMLElement>;

export interface AlertAction extends Pick<ButtonProps, 'Component' | 'href'> {
  title: string;
  action?: VoidFunction;
  autoclose?: boolean;
  mode: 'cancel' | 'destructive' | 'default';
}

export interface AlertProps extends React.HTMLAttributes<HTMLElement>, HasPlatform, AdaptivityProps {
  actionsLayout?: 'vertical' | 'horizontal';
  actions?: AlertAction[];
  header?: React.ReactNode;
  text?: React.ReactNode;
  onClose?: VoidFunction;
}

export interface AlertState {
  closing: boolean;
}

type TransitionEndHandler = (e?: TransitionEvent) => void;

type ItemClickHander = (item: AlertActionInterface) => () => void;

class Alert extends React.Component<AlertProps, AlertState> {
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

  onItemClick: ItemClickHander = (item: AlertActionInterface) => () => {
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

  stopPropagation: React.MouseEventHandler = (e: React.SyntheticEvent) => {
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

  renderHeader(header: React.ReactNode) {
    switch (this.props.platform) {
      case VKCOM:
        return <Headline vkuiClass="Alert__header" weight="medium">{header}</Headline>;
      case IOS:
        return <Title vkuiClass="Alert__header" weight="semibold" level="3">{header}</Title>;
      case ANDROID:
        return <Title vkuiClass="Alert__header" weight="medium" level="2">{header}</Title>;
    }
  }

  renderText(text: React.ReactNode) {
    switch (this.props.platform) {
      case VKCOM:
        return <Caption vkuiClass="Alert__text" level="1" weight="regular">{text}</Caption>;
      case IOS:
        return <Caption vkuiClass="Alert__text" level="2" weight="regular">{text}</Caption>;
      case ANDROID:
        return <Headline vkuiClass="Alert__text" weight="regular">{text}</Headline>;
    }
  }

  renderAction = (action: AlertActionInterface, i: number) => {
    const { platform } = this.props;

    if (platform === IOS) {
      const { Component = 'button' } = action;
      return (
        <Tappable
          Component={action.href ? 'a' : Component}
          vkuiClass={classNames('Alert__action', `Alert__action--${action.mode}`)}
          onClick={this.onItemClick(action)}
          href={action.href}
          key={`alert-action-${i}`}
          target={action.target}
        >
          {action.title}
        </Tappable>
      );
    }

    let mode: ButtonProps['mode'] = action.mode === 'cancel' ? 'secondary' : 'primary';

    if (platform === ANDROID) {
      mode = 'tertiary';

      if (this.props.viewWidth === ViewWidth.DESKTOP && action.mode === 'destructive') {
        mode = 'destructive';
      }
    }

    return (
      <Button
        vkuiClass={classNames('Alert__button', `Alert__button--${action.mode}`)}
        mode={mode}
        size="m"
        onClick={this.onItemClick(action)}
        Component={action.Component}
        href={action.href}
        key={`alert-action-${i}`}
        target={action.target}
      >
        {action.title}
      </Button>
    );
  };

  render() {
    const { actions, actionsLayout, children, className, style, platform, viewWidth, text, header, ...restProps } = this.props;
    const { closing } = this.state;

    const resolvedActionsLayout: AlertProps['actionsLayout'] = platform === VKCOM ? 'horizontal' : actionsLayout;
    const canShowCloseButton = platform === VKCOM || platform === ANDROID && viewWidth >= ViewWidth.SMALL_TABLET;
    const isDesktop = viewWidth >= ViewWidth.SMALL_TABLET;

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
          vkuiClass={classNames(getClassName('Alert', platform), {
            'Alert--v': resolvedActionsLayout === 'vertical',
            'Alert--h': resolvedActionsLayout === 'horizontal',
            'Alert--closing': closing,
            'Alert--desktop': isDesktop,
          })}
        >
          {canShowCloseButton && <ModalDismissButton onClick={this.onClose} />}
          <div vkuiClass="Alert__content">
            {hasReactNode(header) && this.renderHeader(header)}
            {hasReactNode(text) && this.renderText(text)}
            {children}
          </div>
          <footer vkuiClass="Alert__actions">
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
