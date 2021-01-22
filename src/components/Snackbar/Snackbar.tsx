import React, { HTMLAttributes, MouseEvent, PureComponent } from 'react';
import { withPlatform } from '../../hoc/withPlatform';
import Touch, { TouchEvent } from '../Touch/Touch';
import { classNames } from '../../lib/classNames';
import { HasPlatform } from '../../types';
import { getClassName } from '../../helpers/getClassName';
import { canUseDOM } from '../../lib/dom';
import { transitionEvent } from '../../lib/supportEvents';
import { ANDROID, VKCOM } from '../../lib/platform';
import { rubber } from '../../lib/touch';
import { withAdaptivity, AdaptivityProps, ViewWidth } from '../../hoc/withAdaptivity';
import Text from '../Typography/Text/Text';
import Button from '../Button/Button';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import './Snackbar.css';

export interface SnackbarProps extends HTMLAttributes<HTMLElement>, HasPlatform, AdaptivityProps {
  /**
   * Название кнопки действия в уведомлении
   */
  action?: string | React.ComponentType;

  /**
   * Будет вызвано при клике на кнопку действия
   */
  onActionClick?: (e: React.MouseEvent) => void;

  /**
   * Цветная иконка 24x24 пикселя
   */
  before?: React.ReactNode;
  /**
   * Контент в правой части, может быть `<Avatar size={32} />`
   */
  after?: React.ReactNode;
  /**
   * Варианты расположения кнопки
   */
  layout?: 'vertical' | 'horizontal';
  /**
   * Время в миллисекундах, через которое плашка скроется
   */
  duration?: number;
  /**
   * Обработчик закрытия уведомления
   */
  onClose: () => void;
}

export interface SnackbarState {
  closing: boolean;
  touched: boolean;
}

class Snackbar extends PureComponent<SnackbarProps, SnackbarState> {
  constructor(props: SnackbarProps) {
    super(props);

    this.state = {
      closing: false,
      touched: false,
    };

    this.bodyElRef = React.createRef();

    this.shiftXPercent = 0;
    this.shiftXCurrent = 0;
  }

  static defaultProps: Partial<SnackbarProps> = {
    duration: 4000,
    layout: 'horizontal',
  };

  private innerEl: HTMLDivElement;
  private readonly bodyElRef: React.RefObject<HTMLDivElement>;

  private shiftXPercent: number;
  private shiftXCurrent: number;
  private touchStartTime: Date;
  private animationFrame: number;

  private closeTimeout: ReturnType<typeof setTimeout>;
  private transitionFinishTimeout: ReturnType<typeof setTimeout>;

  componentDidMount() {
    this.setCloseTimeout();
  }

  componentWillUnmount() {
    this.clearCloseTimeout();
  }

  setCloseTimeout = () => {
    if (canUseDOM) {
      this.closeTimeout = setTimeout(() => {
        this.close();
      }, this.props.duration);
    }
  };

  clearCloseTimeout = () => {
    clearTimeout(this.closeTimeout);
  };

  private readonly onActionClick = (e: MouseEvent) => {
    this.close();

    if (this.props.action && typeof this.props.onActionClick === 'function') {
      this.props.onActionClick(e);
    }
  };

  close() {
    this.setState({ closing: true });
    this.waitTransitionFinish(this.innerEl, () => {
      this.props.onClose();
    });
  }

  waitTransitionFinish(element: HTMLElement, eventHandler: VoidFunction) {
    if (element) {
      if (transitionEvent.supported) {
        element.removeEventListener(transitionEvent.name, eventHandler);
        element.addEventListener(transitionEvent.name, eventHandler);
      } else {
        clearTimeout(this.transitionFinishTimeout);
        this.transitionFinishTimeout = setTimeout(eventHandler, this.props.platform === ANDROID || this.props.platform === VKCOM ? 400 : 320);
      }
    }
  }

  getInnerRef = (el: HTMLDivElement) => this.innerEl = el;

  onTouchStart = () => {
    this.clearCloseTimeout();
  };

  onTouchMoveX = (event: TouchEvent) => {
    const { shiftX, startT, originalEvent } = event;
    originalEvent.preventDefault();

    if (!this.state.touched) {
      this.setState({ touched: true });
    }

    this.shiftXPercent = shiftX / this.bodyElRef.current.offsetWidth * 100;
    this.shiftXCurrent = rubber(this.shiftXPercent, 72, 1.2, this.props.platform === ANDROID || this.props.platform === VKCOM);
    this.touchStartTime = startT;

    this.setBodyTransform(this.shiftXCurrent);
  };

  onTouchEnd = () => {
    const newState = {
      touched: false,
    };

    let callback;

    if (this.state.touched) {
      let shiftXCurrent = this.shiftXCurrent;
      const expectTranslateY = shiftXCurrent / (Date.now() - this.touchStartTime.getTime()) * 240 * 0.6;
      shiftXCurrent = shiftXCurrent + expectTranslateY;

      if (this.isDesktop && shiftXCurrent <= -50) {
        this.clearCloseTimeout();
        this.waitTransitionFinish(this.bodyElRef.current, () => {
          this.props.onClose();
        });
        this.setBodyTransform(-120);
      } else if (!this.isDesktop && shiftXCurrent >= 50) {
        this.clearCloseTimeout();
        this.waitTransitionFinish(this.bodyElRef.current, () => {
          this.props.onClose();
        });
        this.setBodyTransform(120);
      } else {
        callback = () => {
          this.setCloseTimeout();
          this.setBodyTransform(0);
        };
      }
    } else {
      this.setCloseTimeout();
    }

    this.setState(newState, callback);
  };

  setBodyTransform(percent: number) {
    cancelAnimationFrame(this.animationFrame);
    this.animationFrame = requestAnimationFrame(() => {
      this.bodyElRef.current.style.transform = `translate3d(${percent}%, 0, 0)`;
    });
  }

  get isDesktop() {
    return this.props.viewWidth >= ViewWidth.SMALL_TABLET;
  }

  render() {
    const {
      children,
      platform,
      layout,
      action,
      before,
      after,
      viewWidth,
      duration,
      onActionClick,
      onClose,
      ...restProps
    } = this.props;
    const resolvedLayout = after || this.isDesktop ? 'vertical' : layout;

    return (
      <AppRootPortal>
        <div
          {...restProps}
          vkuiClass={classNames(getClassName('Snackbar', platform), `Snackbar--l-${resolvedLayout}`, {
            'Snackbar--closing': this.state.closing,
            'Snackbar--touched': this.state.touched,
            'Snackbar--desktop': this.isDesktop,
          })}
        >
          <Touch
            vkuiClass="Snackbar__in"
            getRootRef={this.getInnerRef}
            onStart={this.onTouchStart}
            onMoveX={this.onTouchMoveX}
            onEnd={this.onTouchEnd}
          >
            <div vkuiClass="Snackbar__body" ref={this.bodyElRef}>
              {before &&
              <div vkuiClass="Snackbar__before">
                {before}
              </div>}

              <div vkuiClass="Snackbar__content">
                <Text weight="regular" vkuiClass="Snackbar__content-text">{children}</Text>

                {action &&
                <Button align="left" hasHover={false} mode="tertiary" size="s" vkuiClass="Snackbar__action" onClick={this.onActionClick}>
                  {action}
                </Button>}
              </div>

              {after &&
              <div vkuiClass="Snackbar__after">
                {after}
              </div>}
            </div>
          </Touch>
        </div>
      </AppRootPortal>
    );
  }
}

export default withPlatform(withAdaptivity(Snackbar, {
  viewWidth: true,
}));
