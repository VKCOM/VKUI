import * as React from 'react';
import Touch, { TouchProps, TouchEvent } from '../Touch/Touch';
import TouchRootContext from '../Touch/TouchContext';
import FixedLayout from '../FixedLayout/FixedLayout';
import { classNames } from '../../lib/classNames';
import { IOS, ANDROID, VKCOM } from '../../lib/platform';
import { getClassName } from '../../helpers/getClassName';
import PullToRefreshSpinner from './PullToRefreshSpinner';
import { withPlatform } from '../../hoc/withPlatform';
import { AnyFunction, HasPlatform } from '../../types';
import { canUseDOM, DOMProps, withDOM } from '../../lib/dom';
import { runTapticImpactOccurred } from '../../lib/taptic';
import { withContext } from '../../hoc/withContext';
import { ScrollContext, ScrollContextInterface } from '../AppRoot/ScrollContext';
import './PullToRefresh.css';

export interface PullToRefreshProps extends TouchProps, HasPlatform {
  /**
   * Будет вызвана для обновления контента
   */
  onRefresh: AnyFunction;
  /**
   * Определяет, выполняется ли обновление. Для скрытия спиннера после получения контента необходимо передать `false`
   */
  isFetching?: boolean;
  /** @ignore */
  scroll?: ScrollContextInterface;
}

export interface PullToRefreshState {
  watching: boolean;
  refreshing: boolean;
  canRefresh: boolean;

  touchDown: boolean;
  refreshingFinished: boolean;

  touchY: number;
  spinnerY: PullToRefreshParams['start'];
  spinnerProgress: number;
  contentShift: number;
}

export interface PullToRefreshParams {
  start: number;
  max: number;
  maxY: number;
  refreshing: number;
  positionMultiplier: number;
}

export type TouchEventHandler = (event: TouchEvent) => void;

function cancelEvent(event: any) {
  if (!event) {
    return false;
  }
  while (event.originalEvent) {
    event = event.originalEvent;
  }
  if (event.preventDefault && event.cancelable) {
    event.preventDefault();
  }
  if (event.stopPropagation) {
    event.stopPropagation();
  }
  return false;
}

class PullToRefresh extends React.PureComponent<PullToRefreshProps & DOMProps, PullToRefreshState> {
  constructor(props: PullToRefreshProps) {
    super(props);

    this.params = {
      start: props.platform === ANDROID || props.platform === VKCOM ? -45 : -10,
      max: props.platform === ANDROID || props.platform === VKCOM ? 80 : 50,
      maxY: props.platform === ANDROID || props.platform === VKCOM ? 80 : 400,
      refreshing: props.platform === ANDROID || props.platform === VKCOM ? 50 : 36,

      positionMultiplier: props.platform === ANDROID || props.platform === VKCOM ? 1 : 0.21,
    };

    this.state = {
      watching: false,
      refreshing: false,
      canRefresh: false,

      touchDown: false,
      refreshingFinished: false,

      touchY: 0,
      spinnerY: this.params.start,
      spinnerProgress: 0,
      contentShift: 0,
    };

    this.contentRef = React.createRef();
  }

  params: PullToRefreshParams;

  contentRef: React.RefObject<HTMLDivElement>;

  get document() {
    return this.props.document;
  }

  componentDidMount() {
    if (canUseDOM) {
      this.document.addEventListener('touchmove', this.onWindowTouchMove, {
        // @ts-ignore
        cancelable: true,
        passive: false,
      });
    }
  }

  componentWillUnmount() {
    // Здесь нужен последний аргумент с такими же параметрами, потому что
    // некоторые браузеры на странных вендорах типа Meizu не удаляют обработчик.
    // https://github.com/VKCOM/VKUI/issues/444
    if (canUseDOM) {
      this.document.removeEventListener('touchmove', this.onWindowTouchMove, {
        // @ts-ignore
        cancelable: true,
        passive: false,
      });
    }
  }

  componentDidUpdate(prevProps: PullToRefreshProps) {
    if (prevProps.isFetching && !this.props.isFetching) {
      this.onRefreshingFinish();
    }
  }

  onTouchStart: TouchEventHandler = (e: TouchEvent) => {
    if (this.state.refreshing) {
      cancelEvent(e);
    }
    this.setState({ touchDown: true });
  };

  onWindowTouchMove: EventListener = (event: Event) => {
    if (this.state.refreshing) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  onTouchMove: TouchEventHandler = (e: TouchEvent) => {
    const { isY, shiftY } = e;
    const { start, max } = this.params;
    const pageYOffset = this.props.scroll.getScroll().y;

    const { refreshing, watching, touchDown } = this.state;

    if (watching && touchDown) {
      cancelEvent(e);

      const { positionMultiplier } = this.params;

      const shift = Math.max(0, shiftY - this.state.touchY);

      const currentY = Math.max(start, Math.min(this.params.maxY, start + shift * positionMultiplier));
      const progress = currentY > -10 ? Math.abs((currentY + 10) / max) * 80 : 0;

      this.setState({
        spinnerY: currentY,
        spinnerProgress: Math.min(80, Math.max(0, progress)),
        canRefresh: progress > 80,
        contentShift: (currentY + 10) * 2.3,
      });

      if (progress > 85 && !refreshing && this.props.platform === IOS) {
        this.runRefreshing();
      }
    } else if (isY && pageYOffset === 0 && shiftY > 0 && !refreshing && touchDown) {
      cancelEvent(e);

      this.setState({
        watching: true,
        touchY: shiftY,
        spinnerY: start,
        spinnerProgress: 0,
      });
    }
  };

  onTouchEnd: VoidFunction = () => {
    const { refreshing, canRefresh, refreshingFinished } = this.state;

    this.setState({
      watching: false,
      touchDown: false,
    }, () => {
      if (canRefresh && !refreshing) {
        this.runRefreshing();
      } else if (refreshing && refreshingFinished) {
        this.resetRefreshingState();
      } else {
        this.setState({
          spinnerY: refreshing ? this.params.refreshing : this.params.start,
          spinnerProgress: 0,
          contentShift: 0,
        });
      }
    });
  };

  runRefreshing() {
    if (!this.state.refreshing && this.props.onRefresh) {
      this.setState({
        refreshing: true,
        spinnerY: this.props.platform === ANDROID || this.props.platform === VKCOM ? this.params.refreshing : this.state.spinnerY,
      });

      this.props.onRefresh();
      runTapticImpactOccurred('light');
    }
  }

  onRefreshingFinish: VoidFunction = () => {
    this.setState({
      refreshingFinished: true,
    }, () => {
      !this.state.touchDown && this.resetRefreshingState();
    });
  };

  resetRefreshingState() {
    this.setState({
      watching: false,
      canRefresh: false,
      refreshing: false,
      refreshingFinished: false,
      spinnerY: this.params.start,
      spinnerProgress: 0,
      contentShift: 0,
    });
  }

  render() {
    const { children, onRefresh, isFetching, platform, window, document, scroll, ...restProps } = this.props;
    const { watching, refreshing, spinnerY, spinnerProgress, canRefresh, touchDown, contentShift } = this.state;

    const spinnerTransform = `translate3d(0, ${spinnerY}px, 0)`;
    let contentTransform = '';

    if (platform === IOS && refreshing && !touchDown) {
      contentTransform = 'translate3d(0, 100px, 0)';
    } else if (platform === IOS && (contentShift || refreshing)) {
      contentTransform = `translate3d(0, ${contentShift}px, 0)`;
    }

    return (
      <TouchRootContext.Provider value={true}>
        <Touch
          {...restProps}
          onStart={this.onTouchStart}
          onMove={this.onTouchMove}
          onEnd={this.onTouchEnd}
          vkuiClass={classNames(getClassName('PullToRefresh', platform), {
            'PullToRefresh--watching': watching,
            'PullToRefresh--refreshing': refreshing,
          })}
        >
          <FixedLayout vkuiClass="PullToRefresh__controls">
            <PullToRefreshSpinner
              style={{
                transform: spinnerTransform,
                WebkitTransform: spinnerTransform,
                opacity: watching || refreshing || canRefresh ? 1 : 0,
              }}
              on={refreshing}
              progress={refreshing ? null : spinnerProgress}
            />
          </FixedLayout>

          <div
            vkuiClass="PullToRefresh__content"
            ref={this.contentRef}
            style={{
              transform: contentTransform,
              WebkitTransform: contentTransform,
            }}
          >
            {children}
          </div>
        </Touch>
      </TouchRootContext.Provider>
    );
  }
}

export default withContext(
  withPlatform(withDOM<PullToRefreshProps>(PullToRefresh)),
  ScrollContext, 'scroll');
