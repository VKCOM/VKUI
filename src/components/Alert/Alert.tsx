import React, { Component, HTMLAttributes, MouseEventHandler, ReactNode, SyntheticEvent } from 'react';
import Tappable from '../Tappable/Tappable';
import PopoutWrapper from '../PopoutWrapper/PopoutWrapper';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { transitionEvent } from '../../lib/supportEvents';
import { ANDROID, VKCOM, IOS } from '../../lib/platform';
import { HasPlatform } from '../../types';
import withPlatform from '../../hoc/withPlatform';
import withAdaptivity, { AdaptivityProps, ViewWidth } from '../../hoc/withAdaptivity';
import Button from '../Button/Button';
import { hasReactNode } from '../../lib/utils';
import Headline from '../Typography/Headline/Headline';
import Title from '../Typography/Title/Title';
import Caption from '../Typography/Caption/Caption';

export interface AlertActionInterface {
  title: string;
  action?(): void;
  autoclose?: boolean;
  mode: 'cancel' | 'destructive' | 'default';
}

export interface AlertProps extends HTMLAttributes<HTMLElement>, HasPlatform, AdaptivityProps {
  actionsLayout?: 'vertical' | 'horizontal';
  actions?: AlertActionInterface[];
  header?: ReactNode;
  text?: ReactNode;
  onClose?(): void;
}

export interface AlertState {
  closing: boolean;
}

type TransitionEndHandler = (e?: TransitionEvent) => void;

type ItemClickHander = (item: AlertActionInterface) => () => void;

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

  get isDesktop() {
    return this.props.viewWidth >= ViewWidth.SMALL_TABLET;
  }

  renderHeader(header: ReactNode) {
    switch (this.props.platform) {
      case VKCOM:
        return this.isDesktop ?
          <Headline className="Alert__header" weight="medium">{header}</Headline> :
          <Title className="Alert__header" weight="medium" level="2">{header}</Title>;
      case IOS:
        return <Title className="Alert__header" weight="semibold" level="3">{header}</Title>;
      case ANDROID:
        return <Title className="Alert__header" weight="medium" level="2">{header}</Title>;
    }
  }

  renderText(text: ReactNode) {
    switch (this.props.platform) {
      case VKCOM:
        return this.isDesktop ?
          <Caption className="Alert__text" level="1" weight="regular">{text}</Caption> :
          <Headline className="Alert__text" weight="regular">{text}</Headline>;
      case IOS:
        return <Caption className="Alert__text" level="2" weight="regular">{text}</Caption>;
      case ANDROID:
        return <Headline className="Alert__text" weight="regular">{text}</Headline>;
    }
  }

  renderAction = (action: AlertActionInterface, i: number) => {
    const { platform } = this.props;
    switch (platform) {
      case ANDROID:
        return <Button mode="tertiary" size="m">{action.title}</Button>;
      case VKCOM:
        return this.isDesktop ?
          <Button size="m" mode={action.mode === 'cancel' ? 'secondary' : 'primary'}>{action.title}</Button> :
          <Button mode="tertiary" size="m">{action.title}</Button>;
      default:
        return (
          <Tappable
            Component="button"
            className={classNames('Alert__btn', `Alert__btn--${action.mode}`)}
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
            'Alert--desktop': this.isDesktop,
          })}
        >
          <div className="Alert__content">
            {hasReactNode(header) && this.renderHeader(header)}
            {hasReactNode(text) && this.renderText(text)}
            {children}
          </div>
          <footer className="Alert__footer">
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
