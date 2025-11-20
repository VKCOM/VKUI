'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { useDOM } from '../../lib/dom';
import { getNavId, type NavIdProps } from '../../lib/getNavId';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { warnOnce } from '../../lib/warnOnce';
import type { HTMLAttributesWithRootRef } from '../../types';
import { ScrollContext } from '../AppRoot/ScrollContext';
import { useConfigProvider } from '../ConfigProvider/ConfigProviderContext';
import { NavTransitionProvider } from '../NavTransitionContext/NavTransitionContext';
import { NavTransitionDirectionProvider } from '../NavTransitionDirectionContext/NavTransitionDirectionContext';
import { RootComponent } from '../RootComponent/RootComponent';
import { SplitColContext } from '../SplitCol/SplitColContext';
import styles from './Root.module.css';

export interface RootProps extends HTMLAttributesWithRootRef<HTMLDivElement>, NavIdProps {
  /**
   * `id` активной `View`.
   */
  activeView: string;
  /**
   * Обработчик, который вызывается при завершении анимации смены активной `View`.
   */
  onTransition?: (params: { isBack: boolean; from: string; to: string }) => void;
  /**
   * Коллекция `View`. У каждой `View` должен быть `id`.
   */
  children: React.ReactElement | Iterable<React.ReactElement>;
}

/* eslint-disable jsdoc/require-jsdoc */
export interface RootState {
  activeView: string;
  transition: boolean;
  isBack?: boolean;
  prevView?: string;
}
/* eslint-enable jsdoc/require-jsdoc */

const warn = warnOnce('Root');

/**
 * @see https://vkui.io/components/root
 */
export const Root = ({
  children,
  activeView: _activeView,
  onTransition,
  nav,
  ...restProps
}: RootProps): React.ReactNode => {
  const scroll = React.useContext(ScrollContext);
  const platform = usePlatform();
  const { document } = useDOM();
  const scrolls = React.useRef<Record<string, number>>({}).current;
  const viewNodes = React.useRef<Record<string, HTMLElement | null>>({}).current;

  const { transitionMotionEnabled = true } = useConfigProvider();
  const { animate } = React.useContext(SplitColContext);
  const disableAnimation = !transitionMotionEnabled || !animate;

  const views = React.Children.toArray(children) as Array<React.ReactElement<NavIdProps>>;

  const [{ prevView, activeView, transition, isBack }, _setState] = React.useState<RootState>({
    activeView: _activeView,
    transition: false,
  });
  const transitionTo = (panel: string) => {
    if (panel !== activeView) {
      const viewIds = views.map((view) => getNavId(view.props, warn));
      const isBack = viewIds.indexOf(panel) < viewIds.indexOf(activeView);
      scrolls[activeView] = scroll.getScroll().y;
      _setState({
        activeView: panel,
        prevView: activeView,
        transition: !disableAnimation,
        isBack,
      });
    }
  };
  const finishTransition = React.useCallback(
    () => _setState({ activeView, prevView, isBack, transition: false }),
    [activeView, isBack, prevView],
  );

  useIsomorphicLayoutEffect(() => {
    (document!.activeElement as HTMLElement).blur();
  }, [activeView]);

  // Нужен переход
  useIsomorphicLayoutEffect(() => transitionTo(_activeView), [_activeView]);
  useIsomorphicLayoutEffect(() => {
    if (!transition && prevView) {
      // Закончился переход
      scroll.scrollTo(0, isBack ? scrolls[activeView] : 0);
      onTransition &&
        onTransition({
          isBack: Boolean(isBack),
          from: prevView,
          to: activeView,
        });
    }
  }, [transition, prevView]);

  React.useEffect(
    function onAnimationEndFallback() {
      if (transition && disableAnimation) {
        finishTransition();
      }
    },
    [transition, disableAnimation, finishTransition],
  );

  const onAnimationEnd = () => {
    finishTransition();
  };

  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        styles.host,
        platform === 'ios' && styles.ios,
        transition && styles.transition,
      )}
    >
      {views.map((view) => {
        const viewId = getNavId(view.props, warn);
        if (viewId !== activeView && !(transition && viewId === prevView)) {
          return null;
        }
        const isTransitionTarget = transition && viewId === (isBack ? prevView : activeView);
        const compensateScroll =
          transition && (viewId === prevView || (isBack && viewId === activeView));
        return (
          <div
            key={viewId}
            ref={(e) => {
              viewId && (viewNodes[viewId] = e);
            }}
            onAnimationEnd={isTransitionTarget ? onAnimationEnd : undefined}
            className={classNames(
              styles.view,
              transition && viewId === prevView && isBack && styles.viewHideBack,
              transition && viewId === prevView && !isBack && styles.viewHideForward,
              transition && viewId === activeView && isBack && styles.viewShowBack,
              transition && viewId === activeView && !isBack && styles.viewShowForward,
            )}
          >
            <NavTransitionDirectionProvider isBack={isBack}>
              <NavTransitionProvider entering={transition && viewId === activeView}>
                <div
                  className={styles.scrollCompensation}
                  style={{
                    marginTop: compensateScroll ? viewId && -(scrolls[viewId] ?? 0) : undefined,
                  }}
                >
                  {view}
                </div>
              </NavTransitionProvider>
            </NavTransitionDirectionProvider>
          </div>
        );
      })}
    </RootComponent>
  );
};
