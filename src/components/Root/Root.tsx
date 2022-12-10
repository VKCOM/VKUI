import * as React from 'react';
import { classNamesString } from '../../lib/classNames';
import { Platform } from '../../lib/platform';
import { useConfigProvider } from '../ConfigProvider/ConfigProviderContext';
import { SplitColContext } from '../SplitCol/SplitCol';
import { ScrollContext } from '../AppRoot/ScrollContext';
import { NavTransitionProvider } from '../NavTransitionContext/NavTransitionContext';
import { getNavId, NavIdProps } from '../../lib/getNavId';
import { warnOnce } from '../../lib/warnOnce';
import { useDOM } from '../../lib/dom';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { useTimeout } from '../../hooks/useTimeout';
import { usePlatform } from '../../hooks/usePlatform';
import styles from './Root.module.css';

export interface RootProps extends React.HTMLAttributes<HTMLDivElement>, NavIdProps {
  activeView: string;
  onTransition?(params: { isBack: boolean; from: string; to: string }): void;
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
  className,
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
        'vkui-root-android-animation-hide-back',
        'vkui-root-android-animation-show-forward',
        'vkui-root-ios-animation-hide-back',
        'vkui-root-ios-animation-show-forward',
      ].includes(e.animationName)
    ) {
      finishTransition();
    }
  };

  return (
    <div
      {...restProps}
      className={classNamesString(
        styles['Root'],
        platform === Platform.IOS && styles['Root--ios'],
        transition && styles['Root--transition'],
        className,
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
            className={classNamesString(
              styles['Root__view'],
              transition && viewId === prevView && isBack && styles['Root__view--hide-back'],
              transition && viewId === prevView && !isBack && styles['Root__view--hide-forward'],
              transition && viewId === activeView && isBack && styles['Root__view--show-back'],
              transition && viewId === activeView && !isBack && styles['Root__view--show-forward'],
              !transition && viewId === activeView && styles['Root__view--active'],
            )}
          >
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
          </div>
        );
      })}
    </div>
  );
};
