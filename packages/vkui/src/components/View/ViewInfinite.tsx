import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { withContext } from '../../hoc/withContext';
import { withPlatform } from '../../hoc/withPlatform';
import { canUseDOM, DOMProps, withDOM } from '../../lib/dom';
import { getNavId, NavIdProps } from '../../lib/getNavId';
import { Platform } from '../../lib/platform';
import { animationEvent, transitionEvent } from '../../lib/supportEvents';
import { warnOnce } from '../../lib/warnOnce';
import { HasPlatform } from '../../types';
import { ScrollContext, ScrollContextInterface } from '../AppRoot/ScrollContext';
import {
  ConfigProviderContext,
  ConfigProviderContextInterface,
} from '../ConfigProvider/ConfigProviderContext';
import { NavTransitionProvider } from '../NavTransitionContext/NavTransitionContext';
import { SplitColContext, SplitColContextProps } from '../SplitCol/SplitColContext';
import { Touch, TouchEvent } from '../Touch/Touch';
import { swipeBackExcluded } from './utils';
import styles from './View.module.css';
import iosStyles from './ViewIOS.module.css';

const warn = warnOnce('ViewInfinite');

enum SwipeBackResults {
  fail = 1,
  success,
}

interface Scrolls {
  [index: string]: Array<number | undefined>;
}

interface ViewsScrolls {
  [index: string]: Scrolls;
}

type TransitionEventHandler = (e?: TransitionEvent) => void;

let scrollsCache: ViewsScrolls = {};

export type TransitionParams = { from: string | null; to: string | null };

export interface ViewInfiniteProps
  extends React.HTMLAttributes<HTMLElement>,
    HasPlatform,
    NavIdProps {
  activePanel: string;
  onTransition?(params: TransitionParams & { isBack: boolean }): void;
  /**
   * callback свайпа назад
   */
  onSwipeBack?(): void;
  /**
   * callback начала анимации свайпа назад.
   */
  onSwipeBackStart?(activePanel: string | null): void | 'prevent';
  /**
   * callback завершения анимации отмененного пользователем свайпа
   */
  onSwipeBackCancel?(): void;
  history?: string[];
  isBackCheck?(params: TransitionParams): boolean;
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

export interface ViewInfiniteState {
  animated: boolean;

  visiblePanels: Array<string | null>;
  activePanel: string | null;
  isBack?: boolean;
  prevPanel: string | null;
  nextPanel: string | null;

  swipingBack: boolean;
  swipeBackPrevented: boolean;
  swipeBackStartX: number;
  swipeBackShift: number;
  swipeBackNextPanel: string | null;
  swipeBackPrevPanel: string | null;
  swipeBackResult: SwipeBackResults | null;

  browserSwipe: boolean;
}

class ViewInfiniteComponent extends React.Component<
  ViewInfiniteProps & DOMProps,
  ViewInfiniteState
> {
  private static readonly SWIPE_BACK_AREA = 70;

  constructor(props: ViewInfiniteProps) {
    super(props);

    this.state = {
      animated: false,

      visiblePanels: [props.activePanel],
      activePanel: props.activePanel,
      isBack: undefined,
      prevPanel: null,
      nextPanel: null,

      swipingBack: false,
      swipeBackPrevented: false,
      swipeBackStartX: 0,
      swipeBackShift: 0,
      swipeBackNextPanel: null,
      swipeBackPrevPanel: null,
      swipeBackResult: null,

      browserSwipe: false,
    };
  }

  static defaultProps: Partial<ViewInfiniteProps> = {
    history: [],
  };

  private scrolls = scrollsCache[getNavId(this.props, warn) as string] || {};
  private transitionFinishTimeout: ReturnType<typeof setTimeout> | undefined = undefined;
  private animationFinishTimeout: ReturnType<typeof setTimeout> | undefined = undefined;

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

  componentWillUnmount() {
    const id = getNavId(this.props);
    if (id) {
      scrollsCache[id] = this.scrolls;
    }
    if (this.animationFinishTimeout) {
      clearTimeout(this.animationFinishTimeout);
    }
  }

  componentDidUpdate(prevProps: ViewInfiniteProps, prevState: ViewInfiniteState) {
    // Нужен переход
    if (
      prevProps.activePanel !== this.props.activePanel &&
      !prevState.swipingBack &&
      !prevState.browserSwipe
    ) {
      let isBack = false;

      if (this.props.isBackCheck) {
        isBack = this.props.isBackCheck({
          from: prevProps.activePanel,
          to: this.props.activePanel,
        });
      } else {
        const firstLayerId = this.panels
          .map((panel) => getNavId(panel.props, warn))
          .find((id) => id === prevProps.activePanel || id === this.props.activePanel);
        isBack = firstLayerId === this.props.activePanel;
      }

      this.blurActiveElement();

      const prevScrolls = this.scrolls[prevProps.activePanel] || [];
      const scrolls = {
        ...this.scrolls,
        [prevProps.activePanel]: [...prevScrolls, this.props.scroll?.getScroll().y],
      };
      this.scrolls = scrolls;

      if (this.shouldDisableTransitionMotion()) {
        this.flushTransition(prevProps.activePanel, isBack);
      } else {
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
            this.props.platform === Platform.ANDROID || this.props.platform === Platform.VKCOM
              ? 300
              : 600,
          );
        }
      }
    }

    // Закончилась анимация свайпа назад
    if (prevProps.activePanel !== this.props.activePanel && prevState.swipingBack) {
      const nextPanel = this.state.swipeBackNextPanel;
      const prevPanel = this.state.swipeBackPrevPanel;
      let scrollPosition: undefined | number = undefined;

      this.scrolls = {
        ...this.scrolls,
      };

      if (prevPanel !== null) {
        const prevPanelScrolls = [...(this.scrolls[prevPanel] || [])].slice(0, -1);
        this.scrolls[prevPanel] = prevPanelScrolls;
      }
      if (nextPanel !== null) {
        const newPanelScrolls = [...(this.scrolls[nextPanel] || [])];
        scrollPosition = newPanelScrolls.pop();
        this.scrolls[nextPanel] = newPanelScrolls;
      }

      this.setState(
        {
          swipeBackPrevPanel: null,
          swipeBackNextPanel: null,
          swipingBack: false,
          swipeBackResult: null,
          swipeBackStartX: 0,
          swipeBackShift: 0,
          activePanel: nextPanel,
          visiblePanels: [nextPanel],
        },
        () => {
          this.props.scroll?.scrollTo(0, scrollPosition);
          prevProps.onTransition &&
            prevProps.onTransition({
              isBack: true,
              from: prevPanel,
              to: nextPanel,
            });
        },
      );
    }

    // Началась анимация завершения свайпа назад.
    if (!prevState.swipeBackResult && this.state.swipeBackResult) {
      this.waitTransitionFinish(
        this.pickPanel(this.state.swipeBackNextPanel),
        this.swipingBackTransitionEndHandler,
      );
    }

    // Если свайп назад отменился (когда пользователь недостаточно сильно свайпнул)
    if (
      prevState.swipeBackResult === SwipeBackResults.fail &&
      !this.state.swipeBackResult &&
      this.state.activePanel !== null
    ) {
      const newPanelScrolls = [...(this.scrolls[this.state.activePanel] || [])];
      const scrollPosition = newPanelScrolls.pop();
      this.scrolls = {
        ...this.scrolls,
        [this.state.activePanel]: newPanelScrolls,
      };

      this.props.scroll?.scrollTo(0, scrollPosition);
    }

    // Закончился Safari свайп
    if (prevProps.activePanel !== this.props.activePanel && this.state.browserSwipe) {
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
      !this.props.splitCol?.animate ||
      this.props.platform === Platform.VKCOM
    );
  }

  waitTransitionFinish(
    elem: HTMLElement | null | undefined,
    eventHandler: TransitionEventHandler,
  ): void {
    if (transitionEvent.supported && transitionEvent.name && elem) {
      elem.removeEventListener(
        transitionEvent.name as keyof HTMLElementEventMap,
        eventHandler as EventListener,
      );
      elem.addEventListener(
        transitionEvent.name as keyof HTMLElementEventMap,
        eventHandler as EventListener,
      );
    } else {
      if (this.transitionFinishTimeout) {
        clearTimeout(this.transitionFinishTimeout);
      }

      this.transitionFinishTimeout = setTimeout(
        eventHandler,
        this.props.platform === Platform.ANDROID || this.props.platform === Platform.VKCOM
          ? 300
          : 600,
      );
    }
  }

  blurActiveElement(): void {
    if (typeof this.window !== 'undefined' && this.document?.activeElement) {
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

    const prevPanelScrolls = [...(this.scrolls[prevPanel] || [])].slice(0, -1);
    const newPanelScrolls = [...(this.scrolls[activePanel] || [])];
    const scrollPosition = isBack ? newPanelScrolls.pop() : 0;
    if (isBack) {
      this.scrolls = {
        ...this.scrolls,
        [prevPanel]: prevPanelScrolls,
        [activePanel]: newPanelScrolls,
      };
    }

    this.setState(
      {
        prevPanel: null,
        nextPanel: null,
        visiblePanels: [activePanel],
        activePanel: activePanel,
        animated: false,
        isBack: undefined,
      },
      () => {
        this.props.scroll?.scrollTo(0, isBack ? scrollPosition : 0);
        this.props.onTransition &&
          this.props.onTransition({ isBack, from: prevPanel, to: activePanel });
      },
    );
  }

  transitionEndHandler = (e?: React.AnimationEvent): void => {
    if (
      (!e ||
        [
          iosStyles['vkui-animation-ios-next-forward'],
          iosStyles['vkui-animation-ios-prev-back'],
          styles['vkui-animation-view-next-forward'],
          styles['vkui-animation-view-prev-back'],
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
      (e.propertyName.includes('transform') &&
        e.target === this.pickPanel(this.state.swipeBackNextPanel))
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
      swipeBackStartX: 0,
      swipeBackShift: 0,
    });
  }

  onMoveX = (event: TouchEvent): void => {
    if (
      !this.window ||
      this.props.platform !== Platform.IOS ||
      this.state.swipeBackPrevented ||
      swipeBackExcluded(event) ||
      this.shouldDisableTransitionMotion()
    ) {
      return;
    }

    if (!this.props.configProvider?.isWebView) {
      if (
        (event.startX <= ViewInfiniteComponent.SWIPE_BACK_AREA ||
          event.startX >= this.window.innerWidth - ViewInfiniteComponent.SWIPE_BACK_AREA) &&
        !this.state.browserSwipe
      ) {
        this.setState({ browserSwipe: true });
      }

      return;
    }

    if (
      !this.props.onSwipeBack ||
      (this.state.animated && event.startX <= ViewInfiniteComponent.SWIPE_BACK_AREA)
    ) {
      return;
    }

    if (
      !this.state.swipingBack &&
      event.startX <= ViewInfiniteComponent.SWIPE_BACK_AREA &&
      this.props.history &&
      this.props.history.length > 1
    ) {
      if (this.props.onSwipeBackStart) {
        const payload = this.props.onSwipeBackStart(this.state.activePanel);
        if (payload === 'prevent') {
          this.setState({ swipeBackPrevented: true });
          return;
        }
      }

      if (this.state.activePanel !== null) {
        // Note: вызываем закрытие клавиатуры. В iOS это нативное поведение при свайпе.
        this.blurActiveElement();
        const prevScrolls = this.scrolls[this.state.activePanel] || [];
        this.scrolls = {
          ...this.scrolls,
          [this.state.activePanel]: [...prevScrolls, this.props.scroll?.getScroll().y],
        };
      }

      this.setState({
        swipingBack: true,
        swipeBackStartX: event.startX,
        swipeBackPrevPanel: this.state.activePanel,
        swipeBackNextPanel: this.props.history.slice(-2)[0],
      });
    }

    if (this.state.swipingBack) {
      let swipeBackShift;
      if (event.shiftX < 0) {
        swipeBackShift = 0;
      } else if (event.shiftX > this.window.innerWidth - this.state.swipeBackStartX) {
        swipeBackShift = this.window.innerWidth;
      } else {
        swipeBackShift = event.shiftX;
      }
      this.setState({ swipeBackShift });
    }
  };

  onEnd = (event: TouchEvent): void => {
    if (this.state.swipingBack && this.window) {
      const speed = (this.state.swipeBackShift / event.duration) * 1000;
      if (this.state.swipeBackShift === 0) {
        this.onSwipeBackCancel();
      } else if (this.state.swipeBackShift >= this.window.innerWidth) {
        this.onSwipeBackSuccess();
      } else if (
        speed > 250 ||
        this.state.swipeBackStartX + this.state.swipeBackShift > this.window.innerWidth / 2
      ) {
        this.setState({ swipeBackResult: SwipeBackResults.success });
      } else {
        this.setState({ swipeBackResult: SwipeBackResults.fail });
      }
    }
    if (this.state.swipeBackPrevented) {
      this.setState({ swipeBackPrevented: false });
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
      (0.3 * (this.window.innerWidth - this.state.swipeBackShift)) / this.window.innerWidth;

    if (this.state.swipeBackResult) {
      return isPrev ? { boxShadow: `-2px 0 12px rgba(0, 0, 0, ${prevPanelShadow})` } : {};
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
      platform,
      activePanel: _1,
      splitCol,
      configProvider,
      history,
      id,
      nav,
      onTransition,
      onSwipeBack,
      onSwipeBackStart,
      onSwipeBackCancel,
      window,
      document,
      scroll,
      isBackCheck,
      className,
      ...restProps
    } = this.props;
    const {
      prevPanel,
      nextPanel,
      activePanel,
      isBack,
      animated,
      swipeBackPrevPanel,
      swipeBackNextPanel,
      swipeBackResult,
      swipingBack,
    } = this.state;

    const panels = this.panels
      .filter((panel) => {
        const panelId = getNavId(panel.props, warn);

        return (
          (panelId !== undefined && this.state.visiblePanels.includes(panelId)) ||
          panelId === swipeBackPrevPanel ||
          panelId === swipeBackNextPanel
        );
      })
      .sort((panel) => {
        const panelId = getNavId(panel.props, warn);
        const isPrevPanel = panelId === prevPanel || panelId === swipeBackPrevPanel;
        const isNextPanel = panelId === nextPanel || panelId === swipeBackNextPanel;

        if (isNextPanel) {
          return swipingBack || this.state.isBack ? -1 : 1;
        }

        if (isPrevPanel) {
          return swipingBack || this.state.isBack ? 1 : -1;
        }

        return 0;
      });

    const disableAnimation = this.shouldDisableTransitionMotion();

    return (
      <Touch
        Component="section"
        {...restProps}
        className={classNames(
          styles['View'],
          platform === Platform.IOS && iosStyles['View--ios'],
          !disableAnimation && this.state.animated && styles['View--animated'],
          !disableAnimation && this.state.swipingBack && styles['View--swiping-back'],
          disableAnimation && styles['View--no-motion'],
          className,
        )}
        onMoveX={this.onMoveX}
        onEnd={this.onEnd}
      >
        <div className={styles['View__panels']}>
          {panels.map((panel: React.ReactElement) => {
            const panelId = getNavId(panel.props, warn);
            const isPrev = panelId === prevPanel || panelId === swipeBackPrevPanel;
            const compensateScroll =
              isPrev || panelId === swipeBackNextPanel || (panelId === nextPanel && isBack);
            const isTransitionTarget = animated && panelId === (isBack ? prevPanel : nextPanel);
            const scrollList = (panelId && this.scrolls[panelId]) || [];
            const scroll = scrollList[scrollList.length - 1] || 0;

            return (
              <div
                className={classNames(
                  styles['View__panel'],
                  panelId === activePanel && iosStyles['View__panel--active'],
                  panelId === prevPanel && styles['View__panel--prev'],
                  panelId === nextPanel && styles['View__panel--next'],
                  panelId === swipeBackPrevPanel && iosStyles['View__panel--swipe-back-prev'],
                  panelId === swipeBackNextPanel && iosStyles['View__panel--swipe-back-next'],
                  swipeBackResult === SwipeBackResults.success &&
                    iosStyles['View__panel--swipe-back-success'],
                  swipeBackResult === SwipeBackResults.fail &&
                    iosStyles['View__panel--swipe-back-failed'],
                )}
                onAnimationEnd={isTransitionTarget ? this.transitionEndHandler : undefined}
                ref={(el) => panelId !== undefined && (this.panelNodes[panelId] = el)}
                style={this.calcPanelSwipeStyles(panelId)}
                key={panelId}
              >
                <div
                  className={styles['View__panel-in']}
                  style={{ marginTop: compensateScroll ? -scroll : undefined }}
                >
                  <NavTransitionProvider
                    entering={panelId === nextPanel || panelId === swipeBackNextPanel}
                  >
                    {panel}
                  </NavTransitionProvider>
                </div>
              </div>
            );
          })}
        </div>
      </Touch>
    );
  }
}

export const ViewInfinite = withContext(
  withContext(
    withContext(
      withPlatform(withDOM<ViewInfiniteProps>(ViewInfiniteComponent)),
      SplitColContext,
      'splitCol',
    ),
    ConfigProviderContext,
    'configProvider',
  ),
  ScrollContext,
  'scroll',
);
