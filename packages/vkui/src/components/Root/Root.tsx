import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { useTimeout } from '../../hooks/useTimeout';
import { useDOM } from '../../lib/dom';
import { getNavId, NavIdProps } from '../../lib/getNavId';
import { Platform } from '../../lib/platform';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { warnOnce } from '../../lib/warnOnce';
import { HTMLAttributesWithRootRef } from '../../types';
import { ScrollContext } from '../AppRoot/ScrollContext';
import { useConfigProvider } from '../ConfigProvider/ConfigProviderContext';
import { NavTransitionProvider } from '../NavTransitionContext/NavTransitionContext';
import { NavTransitionDirectionProvider } from '../NavTransitionDirectionContext/NavTransitionDirectionContext';
import { RootComponent } from '../RootComponent/RootComponent';
import { SplitColContext } from '../SplitCol/SplitColContext';
import styles from './Root.module.css';

export interface RootProps extends HTMLAttributesWithRootRef<HTMLDivElement>, NavIdProps {
  activeView: string;
  onTransition?(params: { isBack: boolean; from: string; to: string }): void;
  children: React.ReactElement | Iterable<React.ReactElement>;
}

export interface RootState {
  activeView: string;
  transition: boolean;
  isBack?: boolean;
  prevView?: string;
}

const warn = warnOnce('Root');

/**
 * @see https://vkcom.github.io/VKUI/#/Root
 */
export const Root = ({
  children,
  activeView: _activeView,
  onTransition,
  nav,
  ...restProps
}: RootProps) => {
  const scroll = React.useContext(ScrollContext);
  const platform = usePlatform();
  const { document } = useDOM();
  const scrolls = React.useRef<Record<string, number>>({}).current;
  const viewNodes = React.useRef<Record<string, HTMLElement | null>>({}).current;

  const { transitionMotionEnabled = true } = useConfigProvider();
  const { animate } = React.useContext(SplitColContext);
  const disableAnimation = !transitionMotionEnabled || !animate;

  const views = React.Children.toArray(children) as React.ReactElement[];

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

  const fallbackTransition = useTimeout(finishTransition, platform === Platform.IOS ? 600 : 300);
  React.useEffect(() => {
    if (!transition) {
      fallbackTransition.clear();
      return;
    }
    fallbackTransition.set();
  }, [fallbackTransition, transition]);

  const onAnimationEnd = (e: React.AnimationEvent) => {
    if (
      [
        styles['root-android-animation-hide-back'],
        styles['root-android-animation-show-forward'],
        styles['root-ios-animation-hide-back'],
        styles['root-ios-animation-show-forward'],
      ].includes(e.animationName)
    ) {
      finishTransition();
    }
  };

  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        styles['Root'],
        platform === Platform.IOS && styles['Root--ios'],
        transition && styles['Root--transition'],
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
            ref={(e) => viewId && (viewNodes[viewId] = e)}
            onAnimationEnd={isTransitionTarget ? onAnimationEnd : undefined}
            className={classNames(
              styles['Root__view'],
              transition && viewId === prevView && isBack && styles['Root__view--hide-back'],
              transition && viewId === prevView && !isBack && styles['Root__view--hide-forward'],
              transition && viewId === activeView && isBack && styles['Root__view--show-back'],
              transition && viewId === activeView && !isBack && styles['Root__view--show-forward'],
            )}
          >
            <NavTransitionDirectionProvider isBack={isBack}>
              <NavTransitionProvider entering={transition && viewId === activeView}>
                <div
                  className={styles['Root__scrollCompensation']}
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
