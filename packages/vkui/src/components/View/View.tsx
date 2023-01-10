import * as React from 'react';
import { classNames, noop } from '@vkontakte/vkjs';
import { animationEvent } from '../../lib/supportEvents';
import { Platform } from '../../lib/platform';
import { Touch, TouchEvent } from '../Touch/Touch';
import { useConfigProvider } from '../ConfigProvider/ConfigProviderContext';
import { useSplitCol } from '../SplitCol/SplitCol';
import { canUseDOM, useDOM, blurActiveElement } from '../../lib/dom';
import { useScroll } from '../AppRoot/ScrollContext';
import { NavTransitionProvider } from '../NavTransitionContext/NavTransitionContext';
import { getNavId, NavIdProps } from '../../lib/getNavId';
import { warnOnce } from '../../lib/warnOnce';
import { usePlatform } from '../../hooks/usePlatform';
import { swipeBackExcluded } from './utils';
import { useWaitTransitionFinish } from '../../hooks/useWaitTransitionFinish';
import { useTimeout } from '../../hooks/useTimeout';
import { usePrevious } from '../../hooks/usePrevious';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import styles from './View.module.css';
import iosStyles from './ViewIOS.module.css';

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

export let scrollsCache: ViewsScrolls = {};

export interface ViewProps extends React.HTMLAttributes<HTMLElement>, NavIdProps {
  activePanel: string;
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
}

export interface ViewState {
  animated: boolean;

  visiblePanels: string[];
  activePanel: string | null;
  isBack: boolean | undefined;
  prevPanel: string | null;
  nextPanel: string | null;

  swipingBack: boolean;
  swipeBackStartX: number;
  swipeBackShift: number;
  swipeBackNextPanel: string | null;
  swipeBackPrevPanel: string | null;
  swipeBackResult: SwipeBackResults | null;

  browserSwipe: boolean;
}

const warn = warnOnce('View');

/**
 * @see https://vkcom.github.io/VKUI/#/View
 */
export const View = ({
  activePanel: activePanelProp,
  history,
  nav,
  onTransition,
  onSwipeBack,
  onSwipeBackStart,
  onSwipeBackCancel: onSwipeBackCancelProp,
  children,
  className,
  ...restProps
}: ViewProps) => {
  const scrolls = React.useRef(scrollsCache[getNavId({ nav, id: restProps.id }) as string] || {});
  const afterTransition = React.useRef(noop);

  React.useEffect(() => () => {
    const id = getNavId({ nav, id: restProps.id });
    if (id) {
      scrollsCache[id] = scrolls.current;
    }
  });

  const panelNodes = React.useRef<{ [id: string]: HTMLDivElement | null }>({});

  const { window, document } = useDOM();
  const scroll = useScroll();
  const configProvider = useConfigProvider();
  const splitCol = useSplitCol();
  const platform = usePlatform();

  const [animated, setAnimated] = React.useState(false);

  const [visiblePanels, setVisiblePanels] = React.useState([activePanelProp]);
  const [activePanel, setActivePanel] = React.useState<string | null>(activePanelProp);
  const [isBack, setIsBack] = React.useState<boolean | undefined>(undefined);
  const [prevPanel, setPrevPanel] = React.useState<string | null>(null);
  const [nextPanel, setNextPanel] = React.useState<string | null>(null);

  const [swipingBack, setSwipingBack] = React.useState<boolean>(false);
  const [swipeBackStartX, setSwipeBackStartX] = React.useState<number>(0);
  const [swipeBackShift, setSwipeBackShift] = React.useState<number>(0);
  const [swipeBackNextPanel, setSwipeBackNextPanel] = React.useState<string | null>(null);
  const [swipeBackPrevPanel, setSwipeBackPrevPanel] = React.useState<string | null>(null);
  const [swipeBackResult, setSwipeBackResult] = React.useState<SwipeBackResults | null>(null);

  const [browserSwipe, setBrowserSwipe] = React.useState(false);

  const prevActivePanel = usePrevious(activePanelProp);
  const prevSwipingBack = usePrevious(swipingBack);
  const prevBrowserSwipe = usePrevious(browserSwipe);
  const prevSwipeBackResult = usePrevious(swipeBackResult);
  const prevSwipeBackPrevPanel = usePrevious(swipeBackPrevPanel);
  const prevOnTransition = usePrevious(onTransition);

  const panels = (React.Children.toArray(children) as React.ReactElement[]).filter(
    (panel: React.ReactElement) => {
      const panelId = getNavId(panel.props, warn);

      return (
        (panelId !== undefined && visiblePanels.includes(panelId)) ||
        panelId === swipeBackPrevPanel ||
        panelId === swipeBackNextPanel
      );
    },
  );

  const disableAnimation = configProvider?.transitionMotionEnabled === false || !splitCol?.animate;

  const pickPanel = (id: string | null) => {
    if (id === null) {
      return null;
    }
    return panelNodes.current[id];
  };

  const flushTransition = React.useCallback(
    (prevPanel: string, isBackTransition: boolean) => {
      if (isBackTransition) {
        scrolls.current[prevPanel] = 0;
      }
      setPrevPanel(null);
      setNextPanel(null);
      setVisiblePanels([activePanelProp]);
      setActivePanel(activePanelProp);
      setAnimated(false);
      setIsBack(undefined);

      afterTransition.current = () => {
        scroll?.scrollTo(0, isBackTransition ? scrolls.current[activePanelProp] : 0);
        onTransition &&
          onTransition({
            isBack: isBackTransition,
            from: prevPanel,
            to: activePanelProp,
          });
      };
    },
    [activePanelProp, onTransition, scroll],
  );

  useIsomorphicLayoutEffect(() => {
    afterTransition.current();
    afterTransition.current = noop;
  }, [afterTransition.current]);

  const transitionEndHandler = React.useCallback(
    (e?: React.AnimationEvent): void => {
      if (
        (!e ||
          [
            'vkui-animation-ios-next-forward',
            'vkui-animation-ios-prev-back',
            'vkui-animation-view-next-forward',
            'vkui-animation-view-prev-back',
          ].includes(e.animationName)) &&
        prevPanel !== null
      ) {
        flushTransition(prevPanel, Boolean(isBack));
      }
    },
    [flushTransition, isBack, prevPanel],
  );

  const { waitTransitionFinish } = useWaitTransitionFinish();
  const animationFinishTimeout = useTimeout(
    transitionEndHandler,
    platform === Platform.IOS ? 600 : 300,
  );

  const onSwipeBackSuccess = React.useCallback(() => {
    onSwipeBack && onSwipeBack();
  }, [onSwipeBack]);

  const onSwipeBackCancel = React.useCallback(() => {
    onSwipeBackCancelProp && onSwipeBackCancelProp();
    setSwipeBackPrevPanel(null);
    setSwipeBackNextPanel(null);
    setSwipingBack(false);
    setSwipeBackResult(null);
    setSwipeBackStartX(0);
    setSwipeBackShift(0);
  }, [onSwipeBackCancelProp]);

  const swipingBackTransitionEndHandler = React.useCallback(
    (e?: TransitionEvent): void => {
      // indexOf because of vendor prefixes in old browsers
      if (
        !e ||
        (e?.propertyName.includes('transform') && e?.target === pickPanel(swipeBackNextPanel))
      ) {
        switch (swipeBackResult) {
          case SwipeBackResults.fail:
            onSwipeBackCancel();
            break;
          case SwipeBackResults.success:
            onSwipeBackSuccess();
        }
      }
    },
    [onSwipeBackCancel, onSwipeBackSuccess, swipeBackNextPanel, swipeBackResult],
  );

  const onMoveX = (e: TouchEvent): void => {
    if (swipeBackExcluded(e)) {
      return;
    }

    if (
      platform === Platform.IOS &&
      !configProvider?.isWebView &&
      (e.startX <= 70 || e.startX >= window!.innerWidth - 70) &&
      !browserSwipe
    ) {
      setBrowserSwipe(true);
    }

    if (platform === Platform.IOS && configProvider?.isWebView && onSwipeBack) {
      if ((animated && e.startX <= 70) || !window) {
        return;
      }

      if (e.startX <= 70 && !swipingBack && history && history.length > 1) {
        if (activePanel !== null) {
          // Note: вызываем закрытие клавиатуры. В iOS это нативное поведение при свайпе.
          blurActiveElement(document);
          scrolls.current[activePanel] = scroll?.getScroll().y;
        }

        setSwipingBack(true);
        setSwipeBackStartX(e.startX);
        setSwipeBackPrevPanel(activePanel);
        setSwipeBackNextPanel(history.slice(-2)[0]);
      }
      if (swipingBack) {
        let swipeBackShift = 0;
        if (e.shiftX < 0) {
          swipeBackShift = 0;
        } else if (e.shiftX > window.innerWidth - swipeBackStartX) {
          swipeBackShift = window?.innerWidth;
        } else {
          swipeBackShift = e.shiftX;
        }
        setSwipeBackShift(swipeBackShift);
      }
    }
  };

  const onEnd = React.useCallback(
    (e: TouchEvent): void => {
      if (swipingBack && window) {
        const speed = (swipeBackShift / e.duration) * 1000;
        if (swipeBackShift === 0) {
          onSwipeBackCancel();
        } else if (swipeBackShift >= (window?.innerWidth ?? 0)) {
          onSwipeBackSuccess();
        } else if (speed > 250 || swipeBackStartX + swipeBackShift > window.innerWidth / 2) {
          setSwipeBackResult(SwipeBackResults.success);
        } else {
          setSwipeBackResult(SwipeBackResults.fail);
        }
      }
    },
    [onSwipeBackCancel, onSwipeBackSuccess, swipeBackShift, swipeBackStartX, swipingBack, window],
  );

  const calcPanelSwipeStyles = (panelId: string | undefined): React.CSSProperties => {
    if (!canUseDOM || !window) {
      return {};
    }

    const isPrev = panelId === swipeBackPrevPanel;
    const isNext = panelId === swipeBackNextPanel;

    if ((!isPrev && !isNext) || swipeBackResult) {
      return {};
    }

    let prevPanelTranslate = `${swipeBackShift}px`;
    let nextPanelTranslate = `${-50 + (swipeBackShift * 100) / window.innerWidth / 2}%`;
    let prevPanelShadow = (0.3 * (window.innerWidth - swipeBackShift)) / window.innerWidth;

    if (swipeBackResult) {
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
  };

  React.useEffect(() => {
    // Нужен переход
    if (
      prevActivePanel &&
      prevActivePanel !== activePanelProp &&
      !prevSwipingBack &&
      !prevBrowserSwipe
    ) {
      const firstLayerId = (React.Children.toArray(children) as React.ReactElement[])
        .map((panel) => getNavId(panel.props, warn))
        .find((id) => id === prevActivePanel || id === activePanelProp);

      const isBackTransition = firstLayerId === activePanelProp;
      scrolls.current[prevActivePanel] = scroll?.getScroll().y;

      if (disableAnimation) {
        flushTransition(prevActivePanel, isBackTransition);
      } else {
        blurActiveElement(document);

        setVisiblePanels([prevActivePanel, activePanelProp]);
        setPrevPanel(prevActivePanel);
        setNextPanel(activePanelProp);
        setActivePanel(null);
        setAnimated(true);
        setIsBack(isBackTransition);

        // Фолбек анимации перехода
        if (!animationEvent.supported) {
          animationFinishTimeout.set();
        }
      }
    }

    // Закончилась анимация свайпа назад
    if (prevActivePanel && prevActivePanel !== activePanelProp && prevSwipingBack) {
      const nextPanel = activePanelProp;
      const prevPanel = prevActivePanel;
      if (prevSwipeBackPrevPanel) {
        scrolls.current[prevSwipeBackPrevPanel] = 0;
      }

      setSwipeBackPrevPanel(null);
      setSwipeBackNextPanel(null);
      setSwipingBack(false);
      setSwipeBackResult(null);
      setSwipeBackStartX(0);
      setSwipeBackShift(0);
      setActivePanel(nextPanel);
      setVisiblePanels([nextPanel]);

      afterTransition.current = () => {
        if (nextPanel !== null) {
          scroll?.scrollTo(0, scrolls.current[nextPanel]);
        }
        prevOnTransition &&
          prevOnTransition({
            isBack: true,
            from: prevPanel,
            to: nextPanel,
          });
      };
    }

    // Начался свайп назад
    if (!prevSwipingBack && swipingBack) {
      onSwipeBackStart && onSwipeBackStart();
    }

    // Началась анимация завершения свайпа назад.
    if (!prevSwipeBackResult && swipeBackResult) {
      waitTransitionFinish(
        pickPanel(swipeBackNextPanel),
        swipingBackTransitionEndHandler,
        platform === Platform.IOS ? 600 : 300,
      );
    }

    // Если свайп назад отменился (когда пользователь недостаточно сильно свайпнул)
    if (prevSwipeBackResult === SwipeBackResults.fail && !swipeBackResult && activePanel !== null) {
      scroll?.scrollTo(0, scrolls.current[activePanel]);
    }

    // Закончился Safari свайп
    if (prevActivePanel !== activePanelProp && browserSwipe) {
      setBrowserSwipe(false);
      setNextPanel(null);
      setPrevPanel(null);
      setAnimated(false);
      setVisiblePanels([activePanelProp]);
      setActivePanel(activePanelProp);
    }
  }, [
    activePanelProp,
    activePanel,
    animationFinishTimeout,
    browserSwipe,
    children,
    disableAnimation,
    document,
    flushTransition,
    onSwipeBackStart,
    panels,
    platform,
    prevActivePanel,
    prevBrowserSwipe,
    prevOnTransition,
    prevSwipeBackPrevPanel,
    prevSwipeBackResult,
    prevSwipingBack,
    scroll,
    swipeBackNextPanel,
    swipeBackResult,
    swipingBack,
    swipingBackTransitionEndHandler,
    waitTransitionFinish,
  ]);

  return (
    <Touch
      Component="section"
      {...restProps}
      className={classNames(
        styles['View'],
        platform === Platform.IOS && iosStyles['View--ios'],
        !disableAnimation && animated && styles['View--animated'],
        !disableAnimation && swipingBack && styles['View--swiping-back'],
        disableAnimation && styles['View--no-motion'],
        className,
      )}
      onMoveX={onMoveX}
      onEnd={onEnd}
    >
      <div className={styles['View__panels']}>
        {panels.map((panel: React.ReactElement) => {
          const panelId = getNavId(panel.props, warn);
          const isPrev = panelId === prevPanel || panelId === swipeBackPrevPanel;
          const isTransitionTarget = animated && panelId === (isBack ? prevPanel : nextPanel);
          const compensateScroll =
            isPrev || panelId === swipeBackNextPanel || (panelId === nextPanel && isBack);

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
              onAnimationEnd={isTransitionTarget ? transitionEndHandler : undefined}
              ref={(el) => panelId !== undefined && (panelNodes.current[panelId] = el)}
              style={calcPanelSwipeStyles(panelId)}
              key={panelId}
            >
              <div
                className={styles['View__panel-in']}
                style={{
                  marginTop: compensateScroll ? -(scrolls.current[panelId] ?? 0) : undefined,
                }}
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
};
