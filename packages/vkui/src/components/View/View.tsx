import * as React from 'react';
import { classNames, noop } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { usePrevious } from '../../hooks/usePrevious';
import { useTimeout } from '../../hooks/useTimeout';
import { useWaitTransitionFinish } from '../../hooks/useWaitTransitionFinish';
import { blurActiveElement, canUseDOM, useDOM } from '../../lib/dom';
import { getNavId, NavIdProps } from '../../lib/getNavId';
import { animationEvent } from '../../lib/supportEvents';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { warnOnce } from '../../lib/warnOnce';
import { HTMLAttributesWithRootRef } from '../../types';
import { useScroll } from '../AppRoot/ScrollContext';
import { useConfigProvider } from '../ConfigProvider/ConfigProviderContext';
import { NavViewIdContext } from '../NavIdContext/NavIdContext';
import { NavTransitionProvider } from '../NavTransitionContext/NavTransitionContext';
import { NavTransitionDirectionProvider } from '../NavTransitionDirectionContext/NavTransitionDirectionContext';
import { useSplitCol } from '../SplitCol/SplitColContext';
import { Touch, TouchEvent } from '../Touch/Touch';
import {
  getSwipeBackPredicates,
  hasHorizontalScrollableElementWithScrolledToLeft,
  swipeBackExcluded,
} from './utils';
import styles from './View.module.css';

interface Scrolls {
  [index: string]: number | undefined;
}

interface ViewsScrolls {
  [index: string]: Scrolls;
}

export let scrollsCache: ViewsScrolls = {};

export interface ViewProps extends HTMLAttributesWithRootRef<HTMLElement>, NavIdProps {
  activePanel: string;
  onTransition?(params: { isBack: boolean; from: string; to: string }): void;
  /**
   * callback свайпа назад
   */
  onSwipeBack?(): void;
  /**
   * callback начала анимации свайпа назад.
   *
   * Чтобы остановить свайп назад, возвращайте `"prevent"`.
   */
  onSwipeBackStart?(activePanel: string | null): void | 'prevent';
  /**
   * callback завершения анимации отмененного пользователем свайпа
   */
  onSwipeBackCancel?(): void;
  history?: string[];

  children: React.ReactElement | Iterable<React.ReactElement>;
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
  const id = getNavId({ nav, id: restProps.id });
  const scrolls = React.useRef(scrollsCache[id as string] || {});
  const afterTransition = React.useRef(noop);

  React.useEffect(() => () => {
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

  const swipeBackPrevented = React.useRef<boolean>(false);
  const [swipingBack, setSwipingBack] = React.useState<boolean | undefined>(undefined);
  const [swipeBackStartX, setSwipeBackStartX] = React.useState<number>(0);
  const [swipeBackShift, setSwipeBackShift] = React.useState<number>(0);
  const [swipeBackNextPanel, setSwipeBackNextPanel] = React.useState<string | null>(null);
  const [swipeBackPrevPanel, setSwipeBackPrevPanel] = React.useState<string | null>(null);
  const [swipeBackResult, setSwipeBackResult] = React.useState<'success' | 'fail' | null>(null);

  const [browserSwipe, setBrowserSwipe] = React.useState(false);

  const prevActivePanel = usePrevious(activePanelProp);
  const prevSwipingBack = usePrevious(swipingBack);
  const prevBrowserSwipe = usePrevious(browserSwipe);
  const prevSwipeBackResult = usePrevious(swipeBackResult);
  const prevSwipeBackShift = usePrevious(swipeBackShift);
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

  const disableAnimation =
    !configProvider.transitionMotionEnabled || !splitCol.animate || platform === 'vkcom';
  const iOSSwipeBackSimulationEnabled =
    !disableAnimation && platform === 'ios' && configProvider.isWebView && Boolean(onSwipeBack);

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
      setIsBack(isBackTransition);

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
            styles['animation-ios-next-forward'],
            styles['animation-ios-prev-back'],
            styles['animation-view-next-forward'],
            styles['animation-view-prev-back'],
          ].includes(e.animationName)) &&
        prevPanel !== null
      ) {
        flushTransition(prevPanel, Boolean(isBack));
      }
    },
    [flushTransition, isBack, prevPanel],
  );

  const { waitTransitionFinish } = useWaitTransitionFinish();
  const animationFinishTimeout = useTimeout(transitionEndHandler, platform === 'ios' ? 600 : 300);

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
          case 'fail':
            onSwipeBackCancel();
            break;
          case 'success':
            onSwipeBackSuccess();
        }
      }
    },
    [onSwipeBackCancel, onSwipeBackSuccess, swipeBackNextPanel, swipeBackResult],
  );

  const handleTouchMoveXForNativeIOSSwipeBackOrSwipeNext = (event: TouchEvent) => {
    if (browserSwipe) {
      return;
    }
    const { swipeBackTriggered, viewportStartEdgeTouched, viewportEndEdgeTouched } =
      getSwipeBackPredicates(event.startX, event.shiftX, window!.innerWidth);

    if ((viewportStartEdgeTouched || viewportEndEdgeTouched) && swipeBackTriggered) {
      setBrowserSwipe(true);
    }
  };

  const handleTouchMoveXForIOSSwipeBackSimulation = (event: TouchEvent) => {
    if (swipeBackPrevented.current || swipeBackExcluded(event)) {
      return;
    }

    const { swipedToOpposite, swipeBackTriggered, viewportStartEdgeTouched } =
      getSwipeBackPredicates(event.startX, event.shiftX, window!.innerWidth);

    if (animated && swipeBackTriggered) {
      return;
    }

    if (!swipingBack && history && history.length > 1) {
      if (swipedToOpposite) {
        swipeBackPrevented.current = true;
        return;
      }

      if (!swipeBackTriggered) {
        return;
      }

      if (
        !viewportStartEdgeTouched &&
        hasHorizontalScrollableElementWithScrolledToLeft(event.originalEvent.target as HTMLElement)
      ) {
        swipeBackPrevented.current = true;
        return;
      }
      // Начался свайп назад
      if (onSwipeBackStart) {
        const payload = onSwipeBackStart(activePanel);
        if (payload === 'prevent') {
          swipeBackPrevented.current = true;
          return;
        }
      }

      if (activePanel !== null) {
        // Note: вызываем закрытие клавиатуры. В iOS это нативное поведение при свайпе.
        blurActiveElement(document);
        scrolls.current[activePanel] = scroll?.getScroll().y;
      }

      setSwipingBack(true);
      setSwipeBackStartX(event.startX);
      setSwipeBackPrevPanel(activePanel);
      setSwipeBackNextPanel(history.slice(-2)[0]);
    }

    if (swipingBack) {
      if (event.shiftX < 0) {
        setSwipeBackShift(0);
      } else if (event.shiftX > window!.innerWidth - swipeBackStartX) {
        setSwipeBackShift(window!.innerWidth);
      } else {
        setSwipeBackShift(event.shiftX);
      }
    }
  };

  const handleTouchEndForIOSSwipeBackSimulation = (event: TouchEvent) => {
    swipeBackPrevented.current = false;

    if (swipingBack) {
      const speed = (swipeBackShift / event.duration) * 1000;
      if (swipeBackShift === 0) {
        onSwipeBackCancel();
      } else if (swipeBackShift >= (window!.innerWidth ?? 0)) {
        onSwipeBackSuccess();
      } else if (speed > 250 || swipeBackShift >= window!.innerWidth / 2) {
        setSwipeBackResult('success');
      } else {
        setSwipeBackResult('fail');
      }
    }
  };

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
      };
    }

    return {};
  };

  const calcPanelSwipeBackOverlayStyles = (panelId?: string): React.CSSProperties => {
    if (!canUseDOM || !window) {
      return {};
    }

    const isNext = panelId === swipeBackNextPanel;
    if (!isNext) {
      return {};
    }

    const calculatedOpacity = 1 - swipeBackShift / window.innerWidth;
    const opacityOnSwipeEnd =
      swipeBackResult === 'success' ? 0 : swipeBackResult === 'fail' ? 1 : null;

    return {
      display: 'block',
      opacity: opacityOnSwipeEnd === null ? calculatedOpacity : opacityOnSwipeEnd,
    };
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
      setIsBack(true);

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

    // Началась анимация завершения свайпа назад.
    if (!prevSwipeBackResult && swipeBackResult) {
      waitTransitionFinish(
        pickPanel(swipeBackNextPanel),
        swipingBackTransitionEndHandler,
        platform === 'ios' ? 600 : 300,
      );
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
    swipingBackTransitionEndHandler,
    waitTransitionFinish,
  ]);

  React.useEffect(
    function restoreScrollPositionWhenSwipeBackIsCancelled() {
      // Если свайп назад отменился (когда пользователь недостаточно сильно свайпнул)
      const swipeBackCancelledInTheMiddleOfAction =
        prevSwipeBackResult === 'fail' && !swipeBackResult;
      const swipeBackCancelledByMovingPanelBackToInitialPoint =
        prevSwipingBack && !swipingBack && prevSwipeBackShift === 0;

      if (
        (swipeBackCancelledInTheMiddleOfAction ||
          swipeBackCancelledByMovingPanelBackToInitialPoint) &&
        activePanel !== null
      ) {
        scroll?.scrollTo(0, scrolls.current[activePanel]);
      }
    },
    [
      prevSwipeBackResult,
      swipeBackResult,
      prevSwipingBack,
      swipingBack,
      prevSwipeBackShift,
      activePanel,
      scroll,
    ],
  );

  return (
    <NavViewIdContext.Provider value={id}>
      <Touch
        Component="section"
        {...restProps}
        className={classNames(
          styles['View'],
          platform === 'ios' && classNames(styles['View--ios'], 'vkuiInternalView--ios'),
          !disableAnimation && animated && styles['View--animated'],
          !disableAnimation && swipingBack && styles['View--swiping-back'],
          disableAnimation && styles['View--no-motion'],
          className,
        )}
        onMoveX={
          iOSSwipeBackSimulationEnabled
            ? handleTouchMoveXForIOSSwipeBackSimulation
            : platform === 'ios'
            ? handleTouchMoveXForNativeIOSSwipeBackOrSwipeNext
            : undefined
        }
        onEnd={iOSSwipeBackSimulationEnabled ? handleTouchEndForIOSSwipeBackSimulation : undefined}
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
                  panelId === activePanel && styles['View__panel--active'],
                  panelId === prevPanel && styles['View__panel--prev'],
                  panelId === nextPanel && styles['View__panel--next'],
                  panelId === swipeBackPrevPanel && styles['View__panel--swipe-back-prev'],
                  panelId === swipeBackNextPanel && styles['View__panel--swipe-back-next'],
                  swipeBackResult === 'success' && styles['View__panel--swipe-back-success'],
                  swipeBackResult === 'fail' && styles['View__panel--swipe-back-failed'],
                )}
                onAnimationEnd={isTransitionTarget ? transitionEndHandler : undefined}
                ref={(el) => panelId !== undefined && (panelNodes.current[panelId] = el)}
                style={calcPanelSwipeStyles(panelId)}
                key={panelId}
              >
                {platform === 'ios' && (
                  <div
                    className={styles['View__panel-overlay']}
                    style={calcPanelSwipeBackOverlayStyles(panelId)}
                  />
                )}
                <div
                  className={styles['View__panel-in']}
                  style={{
                    marginTop: compensateScroll ? -(scrolls.current[panelId] ?? 0) : undefined,
                  }}
                >
                  <NavTransitionDirectionProvider isBack={swipingBack || isBack}>
                    <NavTransitionProvider
                      entering={panelId === nextPanel || panelId === swipeBackNextPanel}
                    >
                      {panel}
                    </NavTransitionProvider>
                  </NavTransitionDirectionProvider>
                </div>
              </div>
            );
          })}
        </div>
      </Touch>
    </NavViewIdContext.Provider>
  );
};
