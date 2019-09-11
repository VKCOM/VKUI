import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withPlatform from '../../hoc/withPlatform';
import FixedLayout from '../FixedLayout/FixedLayout';
import Touch from '../Touch/Touch';
import classNames from '../../lib/classNames';
import { HasChildren, HasClassName, HasPlatform } from '../../types/props';
import getClassname from '../../helpers/getClassName';
import { canUseDOM } from '../../lib/dom';
import transitionEvents from '../../lib/transitionEvents';
import { ANDROID } from '../../lib/platform';
import { rubber } from '../../lib/touch';

export interface SnackbarAction {
  title: string | React.ComponentType,
  onClick: (e: Event) => {};
}

export interface SnackbarProps extends HasChildren, HasClassName, HasPlatform {
  action?: SnackbarAction,
  before?: React.ComponentType,
  after?: React.ComponentType,
  layout?: 'vertical' | 'horizontal',
  /**
   * Время в миллисекундах, через которое плашка скроется
   */
  duration?: number,
  onClose: () => {}
}

export interface SnackbarState {
  open: boolean,
  touched: boolean
}

export class Snackbar extends PureComponent<SnackbarProps, SnackbarState> {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      touched: false
    };

    this.bodyElRef = React.createRef();

    this.shiftXPercent = 0;
    this.shiftXCurrent = 0;
    this.touchStartTime = 0;
  }

  static defaultProps = {
    duration: 3000000
  };

  static contextTypes = {
    window: PropTypes.any,
    document: PropTypes.any
  };

  private innerEl: HTMLDivElement;
  private bodyElRef: React.RefObject<HTMLDivElement>;
  private closeTimeout: number;

  private shiftXPercent: number;
  private shiftXCurrent: number;
  private touchStartTime: number;
  private animationFrame: number;

  componentDidMount() {
    if (canUseDOM) {
      window.requestAnimationFrame(() => this.setState({ open: true }));
    }

    this.setTimeout();
  }

  componentWillUnmount() {
    this.clearTimeout();
  }

  get window () {
    return this.context.window || window;
  }

  setTimeout = () => {
    if (canUseDOM) {
      this.closeTimeout = window.setTimeout(() => {
        this.close();
      }, this.props.duration);
    }
  };

  clearTimeout = () => {
    clearTimeout(this.closeTimeout);
  };

  onActionClick = (e) => {
    this.close();
    if (this.props.action && typeof this.props.action.onClick === 'function') {
      this.props.action.onClick(e);
    }
  };

  close() {
    this.setState({ open: false });
    this.waitTransitionFinish(this.innerEl, () => {
      this.props.onClose();
    });
  }

  waitTransitionFinish(element: HTMLElement, eventHandler) {
    if (element) {
      const eventName = transitionEvents.transitionEndEventName;

      element.removeEventListener(eventName, eventHandler);
      element.addEventListener(eventName, eventHandler);
    }
  }

  getInnerRef = (el) => this.innerEl = el;

  onTouchStart = () => {
    this.clearTimeout();
  };

  onTouchMoveX = (event) => {
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
      touched: false
    };

    let callback;

    if (this.state.touched) {
      let shiftXReal = this.shiftXCurrent;
      const expectTranslateY = (shiftXReal / (Date.now() - this.touchStartTime) * 240 * 0.6) * (this.shiftXPercent < 0 ? -1 : 1);
      shiftXReal = shiftXReal + expectTranslateY;

      if (shiftXReal >= 50) {
        this.clearTimeout();
        this.waitTransitionFinish(this.bodyElRef.current, () => {
          this.props.onClose();
        });
        this.setBodyTransform(120);
      } else {
        callback = () => {
          this.setTimeout();
          this.setBodyTransform(0);
        };
      }
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
      after
    } = this.props;

    const forceVerticalLayout = !!after;

    return (
      <FixedLayout
        vertical="bottom"
        className={classNames(getClassname('Snackbar', platform), className, {
          'Snackbar--open': this.state.open,
          'Snackbar--touched': this.state.touched,
          'Snackbar--vertical-layout': forceVerticalLayout || layout === 'vertical'
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
                <div className="Snackbar__action-self">{action.title}</div>
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
