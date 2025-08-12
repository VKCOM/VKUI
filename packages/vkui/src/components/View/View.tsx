'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { usePrevious } from '../../hooks/usePrevious';
import { millisecondsInSecond } from '../../lib/date';
import { blurActiveElement, useDOM } from '../../lib/dom';
import { getNavId, type NavIdProps } from '../../lib/getNavId';
import { warnOnce } from '../../lib/warnOnce';
import type { HTMLAttributesWithRootRef } from '../../types';
import { useScroll } from '../AppRoot/ScrollContext';
import { useConfigProvider } from '../ConfigProvider/ConfigProviderContext';
import { NavViewIdContext } from '../NavIdContext/NavIdContext';
import { NavTransitionProvider } from '../NavTransitionContext/NavTransitionContext';
import { NavTransitionDirectionProvider } from '../NavTransitionDirectionContext/NavTransitionDirectionContext';
import { useSplitCol } from '../SplitCol/SplitColContext';
import { type CustomTouchEvent, Touch } from '../Touch/Touch';
import { useLayoutEffectCall } from './useLayoutEffectCall';
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
  /**
   * `id` активной панели.
   */
  activePanel: string;
  /**
   * Обработчик, который вызывается при завершении анимации смены активной панели.
   */
  onTransition?: (params: { isBack: boolean; from: string; to: string }) => void;
  /**
   * Обработчик свайпа назад.
   */
  onSwipeBack?: () => void;
  /**
   * Обработчик начала анимации свайпа назад.
   *
   * Чтобы остановить свайп назад, возвращайте `"prevent"`.
   */
  onSwipeBackStart?: (activePanel: string | null) => void | 'prevent';
  /**
   * Обработчик завершения анимации отмененного пользователем свайпа.
   */
  onSwipeBackCancel?: () => void;
  /**
   * Массив из id панелей в порядке открытия.
   */
  history?: string[];
  /**
   * Коллекция Panel. У каждой Panel должен быть уникальный `id`.
   */
  children: React.ReactElement | Iterable<React.ReactElement>;
}

const warn = warnOnce('View');

/**
 * @see https://vkui.io/components/view
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
}: ViewProps): React.ReactNode => {
  const id = getNavId({ nav, id: restProps.id });
  const scrolls = React.useRef(scrollsCache[id as string] || {});
  const layoutEffectCall = useLayoutEffectCall();

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

  const panels = (React.Children.toArray(children) as Array<React.ReactElement<NavIdProps>>).filter(
    (panel) => {
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

      layoutEffectCall(() => {
        scroll?.scrollTo(0, isBackTransition ? scrolls.current[activePanelProp] : 0);
        onTransition &&
          onTransition({
            isBack: isBackTransition,
            from: prevPanel,
            to: activePanelProp,
          });
      });
    },
    [activePanelProp, layoutEffectCall, onTransition, scroll],
  );

  const handleAnimatedTargetAnimationEnd = () => {
    if (prevPanel !== null) {
      flushTransition(prevPanel, Boolean(isBack));
    }
  };

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

  const swipingBackTransitionEndHandler = React.useCallback(() => {
    switch (swipeBackResult) {
      case 'fail':
        onSwipeBackCancel();
        break;
      case 'success':
        onSwipeBackSuccess();
    }
  }, [onSwipeBackCancel, onSwipeBackSuccess, swipeBackResult]);

  const handleTouchMoveXForNativeIOSSwipeBackOrSwipeNext = (event: CustomTouchEvent) => {
    if (browserSwipe) {
      return;
    }
    const { swipeBackTriggered, viewportStartEdgeTouched, viewportEndEdgeTouched } =
      getSwipeBackPredicates(event.startX, event.shiftX, window!.innerWidth);

    if ((viewportStartEdgeTouched || viewportEndEdgeTouched) && swipeBackTriggered) {
      setBrowserSwipe(true);
    }
  };

  const handleTouchMoveXForIOSSwipeBackSimulation = (event: CustomTouchEvent) => {
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

  const handleTouchEndForIOSSwipeBackSimulation = (event: CustomTouchEvent) => {
    swipeBackPrevented.current = false;
    if (swipingBack) {
      const speed = (swipeBackShift / event.duration) * millisecondsInSecond;
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

  const calcPanelSwipeStyles = (isPrev: boolean, isNext: boolean): React.CSSProperties => {
    if ((!isPrev && !isNext) || swipeBackResult) {
      return {};
    }

    if (isNext) {
      return window
        ? {
            transform: `translate3d(${-50 + (swipeBackShift * 100) / window.innerWidth / 2}%, 0, 0)`,
          }
        : {};
    }

    if (isPrev) {
      return { transform: `translate3d(${swipeBackShift}px, 0, 0)` };
    }

    return {};
  };

  const calcPanelSwipeBackOverlayStyles = (isNext: boolean): React.CSSProperties => {
    if (!window || !isNext) {
      return {};
    }
    const opacityOnSwipeEnd =
      swipeBackResult === 'success' ? 0 : swipeBackResult === 'fail' ? 1 : null;

    return {
      display: 'block',
      opacity:
        opacityOnSwipeEnd === null ? 1 - swipeBackShift / window.innerWidth : opacityOnSwipeEnd,
    };
  };

  const handleSwipeBackTargetTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
    if (event.propertyName.includes('transform')) {
      swipingBackTransitionEndHandler();
    }
  };

  React.useEffect(() => {
    // Нужен переход
    if (
      prevActivePanel &&
      prevActivePanel !== activePanelProp &&
      !prevSwipingBack &&
      !prevBrowserSwipe
    ) {
      const firstLayerId = (
        React.Children.toArray(children) as Array<React.ReactElement<NavIdProps>>
      )
        .map((panel) => getNavId(panel.props, warn))
        .find((id) => id === prevActivePanel || id === activePanelProp);

      const isBackTransition = firstLayerId === activePanelProp;
      scrolls.current[prevActivePanel] = scroll?.getScroll({ compensateKeyboardHeight: false }).y;

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

      layoutEffectCall(() => {
        if (nextPanel !== null) {
          scroll?.scrollTo(0, scrolls.current[nextPanel]);
        }
        prevOnTransition &&
          prevOnTransition({
            isBack: true,
            from: prevPanel,
            to: nextPanel,
          });
      });
    }

    // Началась анимация завершения свайпа назад.
    // см. `onTransitionEnd()`

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
    browserSwipe,
    children,
    disableAnimation,
    document,
    flushTransition,
    prevActivePanel,
    prevBrowserSwipe,
    prevOnTransition,
    prevSwipeBackPrevPanel,
    prevSwipeBackResult,
    prevSwipingBack,
    scroll,
    swipeBackNextPanel,
    swipeBackResult,
    layoutEffectCall,
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
          styles.host,
          platform === 'ios' && classNames(styles.ios, 'vkuiInternalView--ios'),
          !disableAnimation && animated && styles.animated,
          !disableAnimation && swipingBack && styles.swipingBack,
          disableAnimation && styles.noMotion,
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
        <div className={styles.panels}>
          {panels.map((panel) => {
            const panelId = getNavId(panel.props, warn);

            const isPanelActive = panelId === activePanel;
            const isPanelPrev = panelId === prevPanel;
            const isPanelNext = panelId === nextPanel;
            const isAnimatedTarget = animated && (isBack ? isPanelPrev : isPanelNext);

            const isSwipeBackPrev = panelId === swipeBackPrevPanel;
            const isSwipeBackNext = panelId === swipeBackNextPanel;
            const isSwipeBackTarget = swipeBackResult && isSwipeBackPrev;

            let scrollCompensateStyle: React.CSSProperties | undefined = undefined;

            if (isPanelPrev || (isPanelNext && isBack) || isSwipeBackPrev || isSwipeBackNext) {
              const marginTop = scrolls.current[panelId];
              if (marginTop !== undefined) {
                scrollCompensateStyle = { marginTop: -1 * marginTop };
              }
            }

            return (
              <div
                className={classNames(
                  styles.panel,

                  isPanelActive && styles.panelActive,
                  isPanelPrev && styles.panelPrev,
                  isPanelNext && styles.panelNext,

                  isSwipeBackPrev && styles.panelSwipeBackPrev,
                  isSwipeBackNext && styles.panelSwipeBackNext,
                  swipeBackResult === 'success' && styles.panelSwipeBackSuccess,
                  swipeBackResult === 'fail' && styles.panelSwipeBackFailed,
                )}
                onTransitionEnd={isSwipeBackTarget ? handleSwipeBackTargetTransitionEnd : undefined}
                onAnimationEnd={isAnimatedTarget ? handleAnimatedTargetAnimationEnd : undefined}
                ref={(el) => {
                  panelId !== undefined && (panelNodes.current[panelId] = el);
                }}
                style={calcPanelSwipeStyles(isSwipeBackPrev, isSwipeBackNext)}
                key={panelId}
              >
                {platform === 'ios' && (
                  <div
                    className={styles.panelOverlay}
                    style={calcPanelSwipeBackOverlayStyles(isSwipeBackNext)}
                  />
                )}
                <div className={styles.panelIn} style={scrollCompensateStyle}>
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
