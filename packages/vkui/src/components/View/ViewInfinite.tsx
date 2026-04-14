'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { useWaitTransitionFinish } from '../../hooks/useWaitTransitionFinish';
import { millisecondsInSecond } from '../../lib/date';
import { canUseDOM, useDOM } from '../../lib/dom';
import { LockFloatingPositionContext } from '../../lib/floating/LockFloatingPosition/LockFloatingPosition';
import { getNavId, type NavIdProps } from '../../lib/getNavId';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { warnOnce } from '../../lib/warnOnce';
import type { HasPlatform, HTMLAttributesWithRootRef } from '../../types';
import { type ScrollContextInterface, useScroll } from '../AppRoot/ScrollContext';
import {
  type ConfigProviderContextInterface,
  useConfigProvider,
} from '../ConfigProvider/ConfigProviderContext';
import { NavViewIdContext } from '../NavIdContext/NavIdContext';
import { NavTransitionProvider } from '../NavTransitionContext/NavTransitionContext';
import { NavTransitionDirectionProvider } from '../NavTransitionDirectionContext/NavTransitionDirectionContext';
import { type SplitColContextProps, useSplitCol } from '../SplitCol/SplitColContext';
import { type CustomTouchEvent, Touch } from '../Touch/Touch';
import { useLayoutEffectCall } from './useLayoutEffectCall';
import {
  getSwipeBackPredicates,
  hasHorizontalScrollableElementWithScrolledToLeft,
  swipeBackExcluded,
} from './utils';
import styles from './View.module.css';

const warn = warnOnce('ViewInfinite');

type TransitionEventHandler = (e?: TransitionEvent) => void;

export let scrollsCache = new Map<string, Map<string, Array<number | undefined>>>();

// eslint-disable-next-line jsdoc/require-jsdoc
export type TransitionParams = { from: string | null; to: string | null };

export interface ViewInfiniteProps
  extends HTMLAttributesWithRootRef<HTMLElement>,
    HasPlatform,
    NavIdProps {
  /**
   * `id` активной панели.
   */
  activePanel: string;
  /**
   * Обработчик, который вызывается при завершении анимации смены активной панели.
   */
  onTransition?: ((params: TransitionParams & { isBack: boolean }) => void) | undefined;
  /**
   * Обработчик свайпа назад.
   */
  onSwipeBack?: (() => void) | undefined;
  /**
   * Обработчик начала анимации свайпа назад.
   */
  onSwipeBackStart?: ((activePanel: string | null) => void | 'prevent') | undefined;
  /**
   * Обработчик завершения анимации отмененного пользователем свайпа.
   */
  onSwipeBackCancel?: (() => void) | undefined;
  /**
   * Массив из id панелей в порядке открытия.
   */
  history?: string[] | undefined;
  /**
   * Функция проверки перехода назад.
   */
  isBackCheck?: ((params: TransitionParams) => boolean) | undefined;
  /**
   * @ignore
   */
  splitCol?: SplitColContextProps | undefined;
  /**
   * @ignore
   */
  configProvider?: ConfigProviderContextInterface | undefined;
  /**
   * @ignore
   */
  scroll?: ScrollContextInterface | undefined;
}

/* eslint-disable jsdoc/require-jsdoc */
export interface ViewInfiniteState {
  animated: boolean;

  visiblePanels: Array<string | null>;
  activePanel: string | null;
  isBack?: boolean | undefined;
  prevPanel: string | null;
  nextPanel: string | null;

  swipingBack?: boolean | undefined;
  swipeBackStartX: number;
  swipeBackShift: number;
  swipeBackNextPanel: string | null;
  swipeBackPrevPanel: string | null;
  swipeBackResult: 'success' | 'fail' | null;

  browserSwipe: boolean;
}
/* eslint-enable jsdoc/require-jsdoc */

export const ViewInfinite = ({
  activePanel: activePanelProp,
  history = [],
  id,
  nav,
  isBackCheck,
  onTransition,
  onSwipeBack,
  onSwipeBackStart,
  onSwipeBackCancel: onSwipeBackCancelProp,
  className,
  children,
  ...restProps
}: ViewInfiniteProps): React.ReactNode => {
  const { window, document } = useDOM();
  const platform = usePlatform();
  const splitCol = useSplitCol();
  const configProvider = useConfigProvider();
  const scroll = useScroll();
  const layoutEffectCall = useLayoutEffectCall();

  const [state, setState] = React.useState<ViewInfiniteState>(() => ({
    animated: false,
    visiblePanels: [activePanelProp],
    activePanel: activePanelProp,
    isBack: undefined,
    prevPanel: null,
    nextPanel: null,
    swipingBack: undefined,
    swipeBackStartX: 0,
    swipeBackShift: 0,
    swipeBackNextPanel: null,
    swipeBackPrevPanel: null,
    swipeBackResult: null,
    browserSwipe: false,
  }));

  const currentNavId = getNavId({ id, nav }, warn);
  const [scrolls] = React.useState<Map<string, Array<number | undefined>>>(
    () => scrollsCache.get(currentNavId as string) || new Map(),
  );

  const navIdRef = React.useRef(currentNavId);
  const stateRef = React.useRef(state);

  const prevPropsRef = React.useRef<{
    activePanel: string;
    onTransition: ViewInfiniteProps['onTransition'];
  }>({ activePanel: activePanelProp, onTransition });
  const prevStateRef = React.useRef<ViewInfiniteState>(state);

  const panelNodes = React.useRef<{ [id: string]: HTMLDivElement | null }>({});
  const swipeBackPrevented = React.useRef(false);
  const waitTransitionFinishBase = useWaitTransitionFinish();

  const allPanels = React.Children.toArray(children) as Array<React.ReactElement<NavIdProps>>;

  useIsomorphicLayoutEffect(() => {
    navIdRef.current = currentNavId;
  }, [currentNavId]);

  useIsomorphicLayoutEffect(() => {
    stateRef.current = state;
  }, [state]);

  const shouldDisableTransitionMotion = React.useCallback((): boolean => {
    return (
      configProvider.transitionMotionEnabled === false || !splitCol.animate || platform === 'vkcom'
    );
  }, [configProvider.transitionMotionEnabled, platform, splitCol.animate]);

  const waitTransitionFinish = React.useCallback(
    (elem: HTMLElement | null | undefined, eventHandler: TransitionEventHandler): void => {
      waitTransitionFinishBase({
        element: elem,
        eventHandler,
        durationFallback: platform === 'android' || platform === 'vkcom' ? 300 : 600,
        isMotionDisabled: shouldDisableTransitionMotion(),
      });
    },
    [platform, shouldDisableTransitionMotion, waitTransitionFinishBase],
  );

  const blurActive = React.useCallback(() => {
    if (typeof window !== 'undefined' && document?.activeElement) {
      (document.activeElement as HTMLElement).blur();
    }
  }, [document, window]);

  const pickPanel = React.useCallback((panelId: string | null) => {
    if (panelId === null) {
      return undefined;
    }
    return panelNodes.current[panelId];
  }, []);

  const flushTransition = React.useCallback(
    (prevPanel: string, isBack: boolean) => {
      const activePanel = activePanelProp;

      const prevPanelScrolls = [...(scrolls.get(prevPanel) || [])].slice(0, -1);
      const newPanelScrolls = [...(scrolls.get(activePanel) || [])];
      const scrollPosition = isBack ? newPanelScrolls.pop() : 0;

      if (isBack) {
        scrolls.set(prevPanel, prevPanelScrolls);
        scrolls.set(activePanel, newPanelScrolls);
      }

      setState((prev) => ({
        ...prev,
        prevPanel: null,
        nextPanel: null,
        visiblePanels: [activePanel],
        activePanel,
        animated: false,
        isBack,
      }));

      layoutEffectCall(() => {
        scroll.scrollTo(0, isBack ? scrollPosition : 0);
        onTransition && onTransition({ isBack, from: prevPanel, to: activePanel });
      });
    },
    [activePanelProp, layoutEffectCall, onTransition, scroll, scrolls],
  );

  const onSwipeBackSuccess = React.useCallback((): void => {
    onSwipeBack && onSwipeBack();
  }, [onSwipeBack]);

  const onSwipeBackCancel = React.useCallback((): void => {
    onSwipeBackCancelProp && onSwipeBackCancelProp();
    setState((prev) => ({
      ...prev,
      swipeBackPrevPanel: null,
      swipeBackNextPanel: null,
      swipingBack: false,
      swipeBackResult: null,
      swipeBackStartX: 0,
      swipeBackShift: 0,
    }));
  }, [onSwipeBackCancelProp]);

  const swipingBackTransitionEndHandler = React.useCallback(
    (e?: TransitionEvent): void => {
      const currentState = stateRef.current;
      if (
        !e ||
        (e.propertyName.includes('transform') &&
          e.target === pickPanel(currentState.swipeBackNextPanel))
      ) {
        switch (currentState.swipeBackResult) {
          case 'fail':
            onSwipeBackCancel();
            break;
          case 'success':
            onSwipeBackSuccess();
        }
      }
    },
    [onSwipeBackCancel, onSwipeBackSuccess, pickPanel],
  );

  const transitionEndHandler = React.useCallback<React.AnimationEventHandler<HTMLDivElement>>(
    (e): void => {
      if (e.target !== e.currentTarget) {
        return;
      }
      const currentState = stateRef.current;
      if (currentState.prevPanel !== null) {
        flushTransition(currentState.prevPanel, Boolean(currentState.isBack));
      }
    },
    [flushTransition],
  );

  const handleTouchMoveXForNativeIOSSwipeBackOrSwipeNext = React.useCallback(
    (event: CustomTouchEvent) => {
      if (stateRef.current.browserSwipe || !window) {
        return;
      }
      const { swipeBackTriggered, viewportStartEdgeTouched, viewportEndEdgeTouched } =
        getSwipeBackPredicates(event.startX, event.shiftX, window.innerWidth);

      if ((viewportStartEdgeTouched || viewportEndEdgeTouched) && swipeBackTriggered) {
        setState((prev) => ({ ...prev, browserSwipe: true }));
      }
    },
    [window],
  );

  const handleTouchMoveXForIOSSwipeBackSimulation = React.useCallback(
    (event: CustomTouchEvent) => {
      const currentState = stateRef.current;

      if (swipeBackPrevented.current || swipeBackExcluded(event) || !window) {
        return;
      }

      const { swipedToOpposite, swipeBackTriggered, viewportStartEdgeTouched } =
        getSwipeBackPredicates(event.startX, event.shiftX, window.innerWidth);

      if (currentState.animated && swipeBackTriggered) {
        return;
      }

      if (!currentState.swipingBack && history.length > 1) {
        if (swipedToOpposite) {
          swipeBackPrevented.current = true;
          return;
        }

        if (!swipeBackTriggered) {
          return;
        }

        if (
          !viewportStartEdgeTouched &&
          hasHorizontalScrollableElementWithScrolledToLeft(
            event.originalEvent.target as HTMLElement,
          )
        ) {
          swipeBackPrevented.current = true;
          return;
        }
        if (onSwipeBackStart) {
          const payload = onSwipeBackStart(currentState.activePanel);
          if (payload === 'prevent') {
            swipeBackPrevented.current = true;
            return;
          }
        }

        if (currentState.activePanel !== null) {
          // Note: вызываем закрытие клавиатуры. В iOS это нативное поведение при свайпе.
          blurActive();
          const prevScrolls = scrolls.get(currentState.activePanel) || [];
          scrolls.set(currentState.activePanel, [...prevScrolls, scroll.getScroll().y]);
        }

        setState((prev) => ({
          ...prev,
          swipingBack: true,
          swipeBackStartX: event.startX,
          swipeBackPrevPanel: currentState.activePanel,
          swipeBackNextPanel: history.slice(-2)[0],
        }));
      }

      const latestState = stateRef.current;
      if (latestState.swipingBack) {
        if (event.shiftX < 0) {
          setState((prev) => ({ ...prev, swipeBackShift: 0 }));
        } else if (event.shiftX > window.innerWidth - latestState.swipeBackStartX) {
          setState((prev) => ({ ...prev, swipeBackShift: window.innerWidth }));
        } else {
          setState((prev) => ({ ...prev, swipeBackShift: event.shiftX }));
        }
      }
    },
    [blurActive, history, onSwipeBackStart, scroll, scrolls, window],
  );

  const handleTouchEndForIOSSwipeBackSimulation = React.useCallback(
    (event: CustomTouchEvent) => {
      swipeBackPrevented.current = false;
      const currentState = stateRef.current;

      if (currentState.swipingBack && window) {
        const speed = (currentState.swipeBackShift / event.duration) * millisecondsInSecond;
        if (currentState.swipeBackShift === 0) {
          onSwipeBackCancel();
        } else if (currentState.swipeBackShift >= window.innerWidth) {
          onSwipeBackSuccess();
        } else if (speed > 250 || currentState.swipeBackShift >= window.innerWidth / 2) {
          setState((prev) => ({ ...prev, swipeBackResult: 'success' }));
        } else {
          setState((prev) => ({ ...prev, swipeBackResult: 'fail' }));
        }
      }
    },
    [onSwipeBackCancel, onSwipeBackSuccess, window],
  );

  const calcPanelSwipeStyles = React.useCallback(
    (panelId: string | undefined): React.CSSProperties => {
      if (!canUseDOM || !window) {
        return {};
      }

      const isPrev = panelId === state.swipeBackPrevPanel;
      const isNext = panelId === state.swipeBackNextPanel;

      if ((!isPrev && !isNext) || state.swipeBackResult) {
        return {};
      }

      const prevPanelTranslate = `${state.swipeBackShift}px`;
      const nextPanelTranslate = `${-50 + (state.swipeBackShift * 100) / window.innerWidth / 2}%`;
      const prevPanelShadow =
        (0.3 * (window.innerWidth - state.swipeBackShift)) / window.innerWidth;

      if (state.swipeBackResult) {
        return isPrev ? { boxShadow: `-2px 0 12px rgba(0, 0, 0, ${prevPanelShadow})` } : {};
      }

      if (isNext) {
        return {
          transform: `translate3d(${nextPanelTranslate}, 0, 0)`,
        };
      }
      if (isPrev) {
        return {
          transform: `translate3d(${prevPanelTranslate}, 0, 0)`,
          boxShadow: `-2px 0 12px rgba(0, 0, 0, ${prevPanelShadow})`,
        };
      }

      return {};
    },
    [
      state.swipeBackNextPanel,
      state.swipeBackPrevPanel,
      state.swipeBackResult,
      state.swipeBackShift,
      window,
    ],
  );

  React.useEffect(() => {
    return () => {
      if (navIdRef.current) {
        scrollsCache.set(navIdRef.current, scrolls);
      }
    };
  }, [scrolls]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {
    const prevProps = prevPropsRef.current;
    const prevState = prevStateRef.current;

    if (
      prevProps.activePanel !== activePanelProp &&
      !prevState.swipingBack &&
      !prevState.browserSwipe
    ) {
      let isBack = false;

      if (isBackCheck) {
        isBack = isBackCheck({
          from: prevProps.activePanel,
          to: activePanelProp,
        });
      } else {
        const firstLayerId = allPanels
          .map((panel) => getNavId(panel.props, warn))
          .find((panelId) => panelId === prevProps.activePanel || panelId === activePanelProp);
        isBack = firstLayerId === activePanelProp;
      }

      blurActive();

      const prevScrolls = scrolls.get(prevProps.activePanel) || [];
      scrolls.set(prevProps.activePanel, [
        ...prevScrolls,
        scroll.getScroll({ compensateKeyboardHeight: false }).y,
      ]);

      if (shouldDisableTransitionMotion()) {
        flushTransition(prevProps.activePanel, isBack);
      } else {
        setState((prev) => ({
          ...prev,
          visiblePanels: [prevProps.activePanel, activePanelProp],
          prevPanel: prevProps.activePanel,
          nextPanel: activePanelProp,
          activePanel: null,
          animated: true,
          isBack,
        }));
      }
    }

    if (prevProps.activePanel !== activePanelProp && prevState.swipingBack) {
      const nextPanel = state.swipeBackNextPanel;
      const prevPanel = state.swipeBackPrevPanel;
      let scrollPosition: undefined | number = undefined;

      if (prevPanel !== null) {
        const prevPanelScrolls = [...(scrolls.get(prevPanel) || [])].slice(0, -1);
        scrolls.set(prevPanel, prevPanelScrolls);
      }
      if (nextPanel !== null) {
        const newPanelScrolls = [...(scrolls.get(nextPanel) || [])];
        scrollPosition = newPanelScrolls.pop();
        scrolls.set(nextPanel, newPanelScrolls);
      }

      setState((prev) => ({
        ...prev,
        swipeBackPrevPanel: null,
        swipeBackNextPanel: null,
        swipingBack: false,
        swipeBackResult: null,
        swipeBackStartX: 0,
        swipeBackShift: 0,
        activePanel: nextPanel,
        visiblePanels: [nextPanel],
      }));

      layoutEffectCall(() => {
        scroll.scrollTo(0, scrollPosition);
        prevProps.onTransition &&
          prevProps.onTransition({
            isBack: true,
            from: prevPanel,
            to: nextPanel,
          });
      });
    }

    if (!prevState.swipeBackResult && state.swipeBackResult) {
      waitTransitionFinish(pickPanel(state.swipeBackNextPanel), swipingBackTransitionEndHandler);
    }

    if (
      prevState.swipeBackResult === 'fail' &&
      !state.swipeBackResult &&
      state.activePanel !== null
    ) {
      const newPanelScrolls = [...(scrolls.get(state.activePanel) || [])];
      const scrollPosition = newPanelScrolls.pop();
      scrolls.set(state.activePanel, newPanelScrolls);

      scroll.scrollTo(0, scrollPosition);
    }

    if (prevProps.activePanel !== activePanelProp && state.browserSwipe) {
      setState((prev) => ({
        ...prev,
        browserSwipe: false,
        nextPanel: null,
        prevPanel: null,
        animated: false,
        visiblePanels: [activePanelProp],
        activePanel: activePanelProp,
      }));
    }
  });

  React.useEffect(() => {
    prevPropsRef.current = { activePanel: activePanelProp, onTransition };
    prevStateRef.current = state;
  });

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
    visiblePanels,
  } = state;

  const panels = allPanels
    .filter((panel) => {
      const panelId = getNavId(panel.props, warn);

      return (
        (panelId !== undefined && visiblePanels.includes(panelId)) ||
        panelId === swipeBackPrevPanel ||
        panelId === swipeBackNextPanel
      );
    })
    .sort((panel) => {
      const panelId = getNavId(panel.props, warn);
      const isPrevPanel = panelId === prevPanel || panelId === swipeBackPrevPanel;
      const isNextPanel = panelId === nextPanel || panelId === swipeBackNextPanel;

      if (isNextPanel) {
        return swipingBack || isBack ? -1 : 1;
      }

      if (isPrevPanel) {
        return swipingBack || isBack ? 1 : -1;
      }

      return 0;
    });

  const disableAnimation = shouldDisableTransitionMotion();
  const iOSSwipeBackSimulationEnabled =
    !disableAnimation && platform === 'ios' && configProvider.isWebView && Boolean(onSwipeBack);

  return (
    <NavViewIdContext.Provider value={id || nav}>
      <LockFloatingPositionContext.Provider value={swipingBack || animated}>
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
          onEnd={
            iOSSwipeBackSimulationEnabled ? handleTouchEndForIOSSwipeBackSimulation : undefined
          }
        >
          <div className={styles.panels}>
            {panels.map((panel) => {
              const panelId = getNavId(panel.props, warn);
              const isPrev = panelId === prevPanel || panelId === swipeBackPrevPanel;
              const compensateScroll =
                isPrev || panelId === swipeBackNextPanel || (panelId === nextPanel && isBack);
              const isTransitionTarget = animated && panelId === (isBack ? prevPanel : nextPanel);
              const scrollList = (panelId && scrolls.get(panelId)) || [];
              const panelScroll = scrollList[scrollList.length - 1] || 0;

              return (
                <div
                  className={classNames(
                    styles.panel,
                    panelId === activePanel && styles.panelActive,
                    panelId === prevPanel && styles.panelPrev,
                    panelId === nextPanel && styles.panelNext,
                    panelId === swipeBackPrevPanel && styles.panelSwipeBackPrev,
                    panelId === swipeBackNextPanel && styles.panelSwipeBackNext,
                    swipeBackResult === 'success' && styles.panelSwipeBackSuccess,
                    swipeBackResult === 'fail' && styles.panelSwipeBackFailed,
                  )}
                  onAnimationEnd={isTransitionTarget ? transitionEndHandler : undefined}
                  ref={(el) => {
                    panelId !== undefined && (panelNodes.current[panelId] = el);
                  }}
                  style={calcPanelSwipeStyles(panelId)}
                  key={panelId}
                >
                  <div
                    className={styles.panelIn}
                    style={{ marginTop: compensateScroll ? -panelScroll : undefined }}
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
      </LockFloatingPositionContext.Provider>
    </NavViewIdContext.Provider>
  );
};
