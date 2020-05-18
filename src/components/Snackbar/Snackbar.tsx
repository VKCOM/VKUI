import React, { HTMLAttributes, PureComponent, MouseEvent } from 'react';
import PropTypes from 'prop-types';
import withPlatform from '../../hoc/withPlatform';
import FixedLayout from '../FixedLayout/FixedLayout';
import Touch, { TouchEvent } from '../Touch/Touch';
import classNames from '../../lib/classNames';
import { HasPlatform } from '../../types';
import getClassname from '../../helpers/getClassName';
import { canUseDOM } from '../../lib/dom';
import transitionEvents from '../../lib/transitionEvents';
import { ANDROID } from '../../lib/platform';
import { rubber } from '../../lib/touch';

export interface SnackbarProps extends HTMLAttributes<HTMLElement>, HasPlatform {
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

  static defaultProps = {
    duration: 4000,
  };

  static contextTypes = {
    window: PropTypes.any,
    document: PropTypes.any,
  };

  private innerEl: HTMLDivElement;
  private readonly bodyElRef: React.RefObject<HTMLDivElement>;
  private closeTimeout: number;

  private shiftXPercent: number;
  private shiftXCurrent: number;
  private touchStartTime: Date;
  private animationFrame: number;

  componentDidMount() {
    this.setCloseTimeout();
  }

  componentWillUnmount() {
    this.clearCloseTimeout();
  }

  get window() {
    return this.context.window || window;
  }

  setCloseTimeout = () => {
    if (canUseDOM) {
      this.closeTimeout = window.setTimeout(() => {
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
      const eventName = transitionEvents.transitionEndEventName;

      element.removeEventListener(eventName, eventHandler);
      element.addEventListener(eventName, eventHandler);
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

    this.shiftXPercent = shiftX / this.window.innerWidth * 100;
    this.shiftXCurrent = rubber(this.shiftXPercent, 72, 1.2, this.props.platform === ANDROID);
    this.touchStartTime = startT;

    this.setBodyTransform(this.shiftXCurrent);
  };

  onTouchEnd = () => {
    const newState = {
      touched: false,
    };

    let callback;

    if (this.state.touched) {
      let shiftXReal = this.shiftXCurrent;
      const expectTranslateY = shiftXReal / (Date.now() - this.touchStartTime.getTime()) * 240 * 0.6 * (this.shiftXPercent < 0 ? -1 : 1);
      shiftXReal = shiftXReal + expectTranslateY;

      if (shiftXReal >= 50) {
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

  render() {
    const {
      children,
      className,
      platform,
      layout,
      action,
      before,
      after,
    } = this.props;

    const resolvedLayout = after ? 'vertical' : layout;

    return (
      <FixedLayout
        vertical="bottom"
        className={classNames(getClassname('Snackbar', platform), className, `Snackbar--l-${resolvedLayout}`, {
          'Snackbar--closing': this.state.closing,
          'Snackbar--touched': this.state.touched,
        })}
      >
        <Touch
          className="Snackbar__in"
          getRootRef={this.getInnerRef}
          onStart={this.onTouchStart}
          onMoveX={this.onTouchMoveX}
          onEnd={this.onTouchEnd}
        >
          <div className="Snackbar__body" ref={this.bodyElRef}>
            {before &&
            <div className="Snackbar__before">
              {before}
            </div>}

            <div className="Snackbar__content">
              <div className="Snackbar__content-text">{children}</div>

              {action &&
              <button className="Snackbar__action" onClick={this.onActionClick}>
                <div className="Snackbar__action-self">{action}</div>
              </button>}
            </div>

            {after &&
            <div className="Snackbar__after">
              {after}
            </div>}
          </div>
        </Touch>
      </FixedLayout>
    );
  }
}

export default withPlatform(Snackbar);
