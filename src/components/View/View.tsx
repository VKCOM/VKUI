import * as React from "react";
import { classNames } from "../../lib/classNames";
import { transitionEvent, animationEvent } from "../../lib/supportEvents";
import { getClassName } from "../../helpers/getClassName";
import { IOS, ANDROID, VKCOM } from "../../lib/platform";
import { Touch, TouchEvent } from "../Touch/Touch";
import { HasPlatform } from "../../types";
import { withPlatform } from "../../hoc/withPlatform";
import { withContext } from "../../hoc/withContext";
import {
  ConfigProviderContext,
  ConfigProviderContextInterface,
} from "../ConfigProvider/ConfigProviderContext";
import { SplitColContext, SplitColContextProps } from "../SplitCol/SplitCol";
import { AppRootPortal } from "../AppRoot/AppRootPortal";
import { canUseDOM, withDOM, DOMProps } from "../../lib/dom";
import {
  ScrollContext,
  ScrollContextInterface,
} from "../AppRoot/ScrollContext";
import { NavTransitionProvider } from "../NavTransitionContext/NavTransitionContext";
import { getNavId, NavIdProps } from "../../lib/getNavId";
import { warnOnce } from "../../lib/warnOnce";
import { swipeBackExcluded } from "./utils";
import "./View.css";

enum SwipeBackResults {
  fail = 1,
  success,
}

interface Scrolls {
  [index: string]: number | undefined;
}

interface ViewsScrolls {
  [index: string]: Scrolls;
}

type TransitionEventHandler = (e?: TransitionEvent) => void;

export let scrollsCache: ViewsScrolls = {};

export interface ViewProps
  extends React.HTMLAttributes<HTMLElement>,
    HasPlatform,
    NavIdProps {
  activePanel: string;
  /**
   * @deprecated будет удалено в 5.0.0. Используйте одноименное свойство у `SplitLayout`.
   *
   * Свойство для отрисовки `Alert`, `ActionSheet` и `ScreenSpinner`.
   */
  popout?: React.ReactNode;
  /**
   * @deprecated будет удалено в 5.0.0. Используйте одноименное свойство у `SplitLayout`.
   *
   * Свойство для отрисовки `ModalRoot`.
   */
  modal?: React.ReactNode;
  onTransition?(params: { isBack: boolean; from: string; to: string }): void;
  /**
   * callback свайпа назад
   */
  onSwipeBack?(): void;
  /**
   * callback начала анимации свайпа назад.
   */
  onSwipeBackStart?(): void;
  /**
   * callback завершения анимации отмененного пользователем свайпа
   */
  onSwipeBackCancel?(): void;
  history?: string[];
  /**
   * @ignore
   */
  splitCol?: SplitColContextProps;
  /**
   * @ignore
   */
  configProvider?: ConfigProviderContextInterface;
  /**
   * @ignore
   */
  scroll?: ScrollContextInterface;
}

export interface ViewState {
  animated: boolean;

  visiblePanels: string[];
  activePanel: string | null;
  isBack: boolean | undefined;
  prevPanel: string | null;
  nextPanel: string | null;

  swipingBack: boolean;
  swipebackStartX: number;
  swipeBackShift: number;
  swipeBackNextPanel: string | null;
  swipeBackPrevPanel: string | null;
  swipeBackResult: SwipeBackResults | null;

  browserSwipe: boolean;
}

const warn = warnOnce("View");
class View extends React.Component<ViewProps & DOMProps, ViewState> {
  constructor(props: ViewProps) {
    super(props);

    this.state = {
      animated: false,

      visiblePanels: [props.activePanel],
      activePanel: props.activePanel,
      isBack: undefined,
      prevPanel: null,
      nextPanel: null,

      swipingBack: false,
      swipebackStartX: 0,
      swipeBackShift: 0,
      swipeBackNextPanel: null,
      swipeBackPrevPanel: null,
      swipeBackResult: null,

      browserSwipe: false,
    };
  }

  static defaultProps: Partial<ViewProps> = {
    history: [],
  };

  private readonly scrolls = scrollsCache[getNavId(this.props) as string] || {};
  private transitionFinishTimeout: number | undefined = undefined;
  private animationFinishTimeout: number | undefined = undefined;

  get document() {
    return this.props.document;
  }

  get window() {
    return this.props.window;
  }

  get panels() {
    return React.Children.toArray(this.props.children) as React.ReactElement[];
  }

  panelNodes: { [id: string]: HTMLDivElement | null } = {};

  componentDidMount() {
    if (process.env.NODE_ENV === "development") {
      const { popout, modal } = this.props;
      popout &&
        warn(
          "Свойство popout устарело и будет удалено в 5.0.0. Используйте одноименное свойство у SplitLayout."
        );
      modal &&
        warn(
          "Свойство modal устарело и будет удалено в 5.0.0. Используйте одноименное свойство у SplitLayout."
        );
    }
  }

  componentWillUnmount() {
    const id = getNavId(this.props);
    if (id) {
      scrollsCache[id] = this.scrolls;
    }
  }

  componentDidUpdate(prevProps: ViewProps, prevState: ViewState) {
    this.props.popout && !prevProps.popout && this.blurActiveElement();
    this.props.modal && !prevProps.modal && this.blurActiveElement();

    // Нужен переход
    if (
      prevProps.activePanel !== this.props.activePanel &&
      !prevState.swipingBack &&
      !prevState.browserSwipe
    ) {
      const firstLayerId = this.panels
        .map((panel) => getNavId(panel.props, warn))
        .find(
          (id) => id === prevProps.activePanel || id === this.props.activePanel
        );

      const isBack = firstLayerId === this.props.activePanel;
      this.scrolls[prevProps.activePanel] = this.props.scroll?.getScroll().y;

      if (this.shouldDisableTransitionMotion()) {
        this.flushTransition(prevProps.activePanel, isBack);
      } else {
        this.blurActiveElement();

        this.setState({
          visiblePanels: [prevProps.activePanel, this.props.activePanel],
          prevPanel: prevProps.activePanel,
          nextPanel: this.props.activePanel,
          activePanel: null,
          animated: true,
          isBack,
        });

        // Фолбек анимации перехода
        if (!animationEvent.supported) {
          if (this.animationFinishTimeout) {
            clearTimeout(this.animationFinishTimeout);
          }
          this.animationFinishTimeout = setTimeout(
            this.transitionEndHandler,
            this.props.platform === ANDROID || this.props.platform === VKCOM
              ? 300
              : 600
          );
        }
      }
    }

    // Закончилась анимация свайпа назад
    if (
      prevProps.activePanel !== this.props.activePanel &&
      prevState.swipingBack
    ) {
      const nextPanel = this.props.activePanel;
      const prevPanel = prevProps.activePanel;
      if (prevState.swipeBackPrevPanel !== null) {
        this.scrolls[prevState.swipeBackPrevPanel] = 0;
      }
      this.setState(
        {
          swipeBackPrevPanel: null,
          swipeBackNextPanel: null,
          swipingBack: false,
          swipeBackResult: null,
          swipebackStartX: 0,
          swipeBackShift: 0,
          activePanel: nextPanel,
          visiblePanels: [nextPanel],
        },
        () => {
          if (this.state.activePanel !== null) {
            this.props.scroll?.scrollTo(
              0,
              this.scrolls[this.state.activePanel]
            );
          }
          prevProps.onTransition &&
            prevProps.onTransition({
              isBack: true,
              from: prevPanel,
              to: nextPanel,
            });
        }
      );
    }

    // Начался свайп назад
    if (!prevState.swipingBack && this.state.swipingBack) {
      this.props.onSwipeBackStart && this.props.onSwipeBackStart();
    }

    // Началась анимация завершения свайпа назад.
    if (!prevState.swipeBackResult && this.state.swipeBackResult) {
      this.waitTransitionFinish(
        this.pickPanel(this.state.swipeBackNextPanel),
        this.swipingBackTransitionEndHandler
      );
    }

    // Если свайп назад отменился (когда пользователь недостаточно сильно свайпнул)
    if (
      prevState.swipeBackResult === SwipeBackResults.fail &&
      !this.state.swipeBackResult &&
      this.state.activePanel !== null
    ) {
      this.props.scroll?.scrollTo(0, this.scrolls[this.state.activePanel]);
    }

    // Закончился Safari свайп
    if (
      prevProps.activePanel !== this.props.activePanel &&
      this.state.browserSwipe
    ) {
      this.setState({
        browserSwipe: false,
        nextPanel: null,
        prevPanel: null,
        animated: false,
        visiblePanels: [this.props.activePanel],
        activePanel: this.props.activePanel,
      });
    }
  }

  shouldDisableTransitionMotion(): boolean {
    return (
      this.props.configProvider?.transitionMotionEnabled === false ||
      !this.props.splitCol?.animate
    );
  }

  waitTransitionFinish(
    elem: HTMLElement | null | undefined,
    eventHandler: TransitionEventHandler
  ): void {
    if (transitionEvent.supported && transitionEvent.name && elem) {
      elem.removeEventListener(
        transitionEvent.name as keyof HTMLElementEventMap,
        eventHandler as EventListener
      );
      elem.addEventListener(
        transitionEvent.name as keyof HTMLElementEventMap,
        eventHandler as EventListener
      );
    } else {
      if (this.transitionFinishTimeout) {
        clearTimeout(this.transitionFinishTimeout);
      }
      this.transitionFinishTimeout = setTimeout(
        eventHandler,
        this.props.platform === ANDROID || this.props.platform === VKCOM
          ? 300
          : 600
      );
    }
  }

  blurActiveElement(): void {
    if (typeof this.window !== "undefined" && this.document?.activeElement) {
      (this.document.activeElement as HTMLElement).blur();
    }
  }

  pickPanel(id: string | null) {
    if (id === null) {
      return undefined;
    }
    return this.panelNodes[id];
  }

  flushTransition(prevPanel: string, isBack: boolean) {
    const activePanel = this.props.activePanel;
    if (isBack) {
      this.scrolls[prevPanel] = 0;
    }
    this.setState(
      {
        prevPanel: null,
        nextPanel: null,
        visiblePanels: [activePanel],
        activePanel,
        animated: false,
        isBack: undefined,
      },
      () => {
        this.props.scroll?.scrollTo(0, isBack ? this.scrolls[activePanel] : 0);
        this.props.onTransition &&
          this.props.onTransition({ isBack, from: prevPanel, to: activePanel });
      }
    );
  }

  transitionEndHandler = (e?: React.AnimationEvent): void => {
    if (
      (!e ||
        [
          "vkui-animation-ios-next-forward",
          "vkui-animation-ios-prev-back",
          "vkui-animation-view-next-forward",
          "vkui-animation-view-prev-back",
        ].includes(e.animationName)) &&
      this.state.prevPanel !== null
    ) {
      this.flushTransition(this.state.prevPanel, Boolean(this.state.isBack));
    }
  };

  swipingBackTransitionEndHandler = (e?: TransitionEvent): void => {
    // indexOf because of vendor prefixes in old browsers
    if (
      !e ||
      (e?.propertyName.includes("transform") &&
        e?.target === this.pickPanel(this.state.swipeBackNextPanel))
    ) {
      switch (this.state.swipeBackResult) {
        case SwipeBackResults.fail:
          this.onSwipeBackCancel();
          break;
        case SwipeBackResults.success:
          this.onSwipeBackSuccess();
      }
    }
  };

  onSwipeBackSuccess(): void {
    this.props.onSwipeBack && this.props.onSwipeBack();
  }

  onSwipeBackCancel(): void {
    this.props.onSwipeBackCancel && this.props.onSwipeBackCancel();
    this.setState({
      swipeBackPrevPanel: null,
      swipeBackNextPanel: null,
      swipingBack: false,
      swipeBackResult: null,
      swipebackStartX: 0,
      swipeBackShift: 0,
    });
  }

  onMoveX = (e: TouchEvent): void => {
    if (swipeBackExcluded(e)) {
      return;
    }

    const { platform, configProvider } = this.props;

    if (
      platform === IOS &&
      !configProvider?.isWebView &&
      (e.startX <= 70 || e.startX >= this.window!.innerWidth - 70) &&
      !this.state.browserSwipe
    ) {
      this.setState({ browserSwipe: true });
    }

    if (
      platform === IOS &&
      configProvider?.isWebView &&
      this.props.onSwipeBack
    ) {
      if ((this.state.animated && e.startX <= 70) || !this.window) {
        return;
      }

      if (
        e.startX <= 70 &&
        !this.state.swipingBack &&
        (this.props.history?.length ?? 0) > 1
      ) {
        if (this.state.activePanel !== null) {
          this.scrolls[this.state.activePanel] =
            this.props.scroll?.getScroll().y;
        }
        this.setState({
          swipingBack: true,
          swipebackStartX: e.startX,
          swipeBackPrevPanel: this.state.activePanel,
          swipeBackNextPanel: this.props.history!.slice(-2)[0],
        });
      }
      if (this.state.swipingBack) {
        let swipeBackShift = 0;
        if (e.shiftX < 0) {
          swipeBackShift = 0;
        } else if (
          e.shiftX >
          this.window.innerWidth - this.state.swipebackStartX
        ) {
          swipeBackShift = this.window?.innerWidth;
        } else {
          swipeBackShift = e.shiftX;
        }
        this.setState({ swipeBackShift });
      }
    }
  };

  onEnd = (e: TouchEvent): void => {
    if (this.state.swipingBack && this.window) {
      const speed = (this.state.swipeBackShift / e.duration) * 1000;
      if (this.state.swipeBackShift === 0) {
        this.onSwipeBackCancel();
      } else if (this.state.swipeBackShift >= (this.window?.innerWidth ?? 0)) {
        this.onSwipeBackSuccess();
      } else if (
        speed > 250 ||
        this.state.swipebackStartX + this.state.swipeBackShift >
          this.window.innerWidth / 2
      ) {
        this.setState({ swipeBackResult: SwipeBackResults.success });
      } else {
        this.setState({ swipeBackResult: SwipeBackResults.fail });
      }
    }
  };

  calcPanelSwipeStyles(panelId: string | undefined): React.CSSProperties {
    if (!canUseDOM || !this.window) {
      return {};
    }

    const isPrev = panelId === this.state.swipeBackPrevPanel;
    const isNext = panelId === this.state.swipeBackNextPanel;

    if ((!isPrev && !isNext) || this.state.swipeBackResult) {
      return {};
    }

    let prevPanelTranslate = `${this.state.swipeBackShift}px`;
    let nextPanelTranslate = `${
      -50 + (this.state.swipeBackShift * 100) / this.window.innerWidth / 2
    }%`;
    let prevPanelShadow =
      (0.3 * (this.window.innerWidth - this.state.swipeBackShift)) /
      this.window.innerWidth;

    if (this.state.swipeBackResult) {
      return isPrev
        ? { boxShadow: `-2px 0 12px rgba(0, 0, 0, ${prevPanelShadow})` }
        : {};
    }

    if (isNext) {
      return {
        transform: `translate3d(${nextPanelTranslate}, 0, 0)`,
        WebkitTransform: `translate3d(${nextPanelTranslate}, 0, 0)`,
      };
    }
    if (isPrev) {
      return {
        transform: `translate3d(${prevPanelTranslate}, 0, 0)`,
        WebkitTransform: `translate3d(${prevPanelTranslate}, 0, 0)`,
        boxShadow: `-2px 0 12px rgba(0, 0, 0, ${prevPanelShadow})`,
      };
    }

    return {};
  }

  render() {
    const {
      popout,
      modal,
      platform,
      activePanel: _1,
      splitCol,
      configProvider,
      history,
      nav,
      onTransition,
      onSwipeBack,
      onSwipeBackStart,
      onSwipeBackCancel,
      window,
      document,
      scroll,
      ...restProps
    } = this.props;
    const {
      prevPanel,
      nextPanel,
      activePanel,
      swipeBackPrevPanel,
      swipeBackNextPanel,
      swipeBackResult,
      isBack,
      animated,
    } = this.state;

    const hasPopout = !!popout;
    const hasModal = !!modal;

    const panels = this.panels.filter((panel: React.ReactElement) => {
      const panelId = getNavId(panel.props, warn);

      return (
        (panelId !== undefined && this.state.visiblePanels.includes(panelId)) ||
        panelId === swipeBackPrevPanel ||
        panelId === swipeBackNextPanel
      );
    });

    const disableAnimation = this.shouldDisableTransitionMotion();

    const modifiers = {
      "View--animated": !disableAnimation && animated,
      "View--swiping-back": !disableAnimation && this.state.swipingBack,
      "View--no-motion": disableAnimation,
    };

    return (
      <Touch
        Component="section"
        {...restProps}
        vkuiClass={classNames(getClassName("View", platform), modifiers)}
        onMoveX={this.onMoveX}
        onEnd={this.onEnd}
      >
        <div vkuiClass="View__panels">
          {panels.map((panel: React.ReactElement) => {
            const panelId = getNavId(panel.props, warn);
            const isPrev =
              panelId === prevPanel || panelId === swipeBackPrevPanel;
            const isTransitionTarget =
              animated && panelId === (isBack ? prevPanel : nextPanel);
            const compensateScroll =
              isPrev ||
              panelId === swipeBackNextPanel ||
              (panelId === nextPanel && isBack);

            return (
              <div
                vkuiClass={classNames("View__panel", {
                  "View__panel--active": panelId === activePanel,
                  "View__panel--prev": panelId === prevPanel,
                  "View__panel--next": panelId === nextPanel,
                  "View__panel--swipe-back-prev":
                    panelId === swipeBackPrevPanel,
                  "View__panel--swipe-back-next":
                    panelId === swipeBackNextPanel,
                  "View__panel--swipe-back-success":
                    swipeBackResult === SwipeBackResults.success,
                  "View__panel--swipe-back-failed":
                    swipeBackResult === SwipeBackResults.fail,
                })}
                onAnimationEnd={
                  isTransitionTarget ? this.transitionEndHandler : undefined
                }
                ref={(el) =>
                  panelId !== undefined && (this.panelNodes[panelId] = el)
                }
                style={this.calcPanelSwipeStyles(panelId)}
                key={panelId}
              >
                <div
                  vkuiClass="View__panel-in"
                  style={{
                    marginTop: compensateScroll
                      ? -(this.scrolls[panelId as string] ?? 0)
                      : undefined,
                  }}
                >
                  <NavTransitionProvider
                    entering={
                      panelId === nextPanel || panelId === swipeBackNextPanel
                    }
                  >
                    {panel}
                  </NavTransitionProvider>
                </div>
              </div>
            );
          })}
        </div>
        <AppRootPortal>
          {hasPopout && <div vkuiClass="View__popout">{popout}</div>}
          {hasModal && <div vkuiClass="View__modal">{modal}</div>}
        </AppRootPortal>
      </Touch>
    );
  }
}

// eslint-disable-next-line import/no-default-export
export default withContext(
  withContext(
    withContext(
      withPlatform(withDOM<ViewProps>(View)),
      SplitColContext,
      "splitCol"
    ),
    ConfigProviderContext,
    "configProvider"
  ),
  ScrollContext,
  "scroll"
);
