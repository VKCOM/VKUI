import * as React from "react";
import { Touch, TouchProps, TouchEvent } from "../Touch/Touch";
import TouchRootContext from "../Touch/TouchContext";
import FixedLayout from "../FixedLayout/FixedLayout";
import { classNames } from "../../lib/classNames";
import { IOS, ANDROID, VKCOM } from "../../lib/platform";
import { getClassName } from "../../helpers/getClassName";
import PullToRefreshSpinner from "./PullToRefreshSpinner";
import { withPlatform } from "../../hoc/withPlatform";
import { AnyFunction, HasPlatform } from "../../types";
import { canUseDOM, DOMProps, withDOM } from "../../lib/dom";
import { runTapticImpactOccurred } from "../../lib/taptic";
import { withContext } from "../../hoc/withContext";
import {
  ScrollContext,
  ScrollContextInterface,
} from "../AppRoot/ScrollContext";
import "./PullToRefresh.css";

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

  touchY: number;
  spinnerY: PullToRefreshParams["start"];
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

class PullToRefresh extends React.PureComponent<
  PullToRefreshProps & DOMProps,
  PullToRefreshState
> {
  constructor(props: PullToRefreshProps) {
    super(props);

    this.params = {
      start: props.platform === ANDROID || props.platform === VKCOM ? -45 : -10,
      max: props.platform === ANDROID || props.platform === VKCOM ? 80 : 50,
      maxY: props.platform === ANDROID || props.platform === VKCOM ? 80 : 400,
      refreshing:
        props.platform === ANDROID || props.platform === VKCOM ? 50 : 36,

      positionMultiplier:
        props.platform === ANDROID || props.platform === VKCOM ? 1 : 0.21,
    };

    this.state = {
      watching: false,
      refreshing: false,
      canRefresh: false,

      touchDown: false,

      touchY: 0,
      spinnerY: this.params.start,
      spinnerProgress: 0,
      contentShift: 0,
    };

    this.contentRef = React.createRef();
  }

  params: PullToRefreshParams;
  contentRef: React.RefObject<HTMLDivElement>;
  waitFetchingTimeout: ReturnType<typeof setTimeout> | undefined = undefined;

  get document() {
    return this.props.document;
  }

  componentDidMount() {
    if (canUseDOM) {
      this.document!.addEventListener("touchmove", this.onWindowTouchMove, {
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
      this.document!.removeEventListener("touchmove", this.onWindowTouchMove, {
        // @ts-ignore
        cancelable: true,
        passive: false,
      });
    }
    if (this.waitFetchingTimeout) {
      clearTimeout(this.waitFetchingTimeout);
    }
  }

  componentDidUpdate(
    prevProps: PullToRefreshProps,
    prevState: PullToRefreshState
  ) {
    if (prevProps.isFetching && !this.props.isFetching) {
      this.onRefreshingFinish();
    }
    if (
      !prevProps.isFetching &&
      this.props.isFetching &&
      this.waitFetchingTimeout
    ) {
      clearTimeout(this.waitFetchingTimeout);
    }

    if (prevState.touchDown && !this.state.touchDown) {
      const { refreshing, canRefresh } = this.state;
      if (!refreshing && canRefresh) {
        this.runRefreshing();
      } else if (refreshing && !this.props.isFetching) {
        // only iOS can start refresh before gesture end
        this.resetRefreshingState();
      } else {
        // refreshing && isFetching: refresh in progress
        // OR !refreshing && !canRefresh: pull was not strong enough
        this.setState({
          spinnerY: refreshing ? this.params.refreshing : this.params.start,
          spinnerProgress: 0,
          contentShift: 0,
        });
      }
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
    const pageYOffset = this.props.scroll?.getScroll().y;

    const { refreshing, watching, touchDown } = this.state;

    if (watching && touchDown) {
      cancelEvent(e);

      const { positionMultiplier } = this.params;

      const shift = Math.max(0, shiftY - this.state.touchY);

      const currentY = Math.max(
        start,
        Math.min(this.params.maxY, start + shift * positionMultiplier)
      );
      const progress =
        currentY > -10 ? Math.abs((currentY + 10) / max) * 80 : 0;

      this.setState({
        spinnerY: currentY,
        spinnerProgress: Math.min(80, Math.max(0, progress)),
        canRefresh: progress > 80,
        contentShift: (currentY + 10) * 2.3,
      });

      if (progress > 85 && !refreshing && this.props.platform === IOS) {
        this.runRefreshing();
      }
    } else if (
      isY &&
      pageYOffset === 0 &&
      shiftY > 0 &&
      !refreshing &&
      touchDown
    ) {
      cancelEvent(e);

      this.setState({
        watching: true,
        touchY: shiftY,
        spinnerY: start,
        spinnerProgress: 0,
      });
    }
  };

  onTouchEnd = () => {
    this.setState({
      watching: false,
      touchDown: false,
    });
  };

  runRefreshing() {
    if (!this.state.refreshing && this.props.onRefresh) {
      // cleanup if the consumer does not start fetching in 1s
      this.waitFetchingTimeout = setTimeout(this.onRefreshingFinish, 1000);
      this.setState({
        refreshing: true,
        spinnerY:
          this.props.platform === ANDROID || this.props.platform === VKCOM
            ? this.params.refreshing
            : this.state.spinnerY,
      });

      this.props.onRefresh();
      runTapticImpactOccurred("light");
    }
  }

  onRefreshingFinish: VoidFunction = () => {
    if (!this.state.touchDown) {
      this.resetRefreshingState();
    }
  };

  resetRefreshingState() {
    this.setState({
      watching: false,
      canRefresh: false,
      refreshing: false,
      spinnerY: this.params.start,
      spinnerProgress: 0,
      contentShift: 0,
    });
  }

  render() {
    const {
      children,
      onRefresh,
      isFetching,
      platform,
      window,
      document,
      scroll,
      ...restProps
    } = this.props;
    const {
      watching,
      refreshing,
      spinnerY,
      spinnerProgress,
      canRefresh,
      touchDown,
      contentShift,
    } = this.state;

    const spinnerTransform = `translate3d(0, ${spinnerY}px, 0)`;
    let contentTransform = "";

    if (platform === IOS && refreshing && !touchDown) {
      contentTransform = "translate3d(0, 100px, 0)";
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
          vkuiClass={classNames(getClassName("PullToRefresh", platform), {
            "PullToRefresh--watching": watching,
            "PullToRefresh--refreshing": refreshing,
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
              progress={refreshing ? undefined : spinnerProgress}
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

// eslint-disable-next-line import/no-default-export
export default withContext(
  withPlatform(withDOM<PullToRefreshProps>(PullToRefresh)),
  ScrollContext,
  "scroll"
);
