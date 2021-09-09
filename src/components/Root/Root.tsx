import * as React from 'react';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import { ANDROID, VKCOM } from '../../lib/platform';
import { withPlatform } from '../../hoc/withPlatform';
import { withContext } from '../../hoc/withContext';
import { HasPlatform } from '../../types';
import { ConfigProviderContext, ConfigProviderContextInterface } from '../ConfigProvider/ConfigProviderContext';
import { SplitColContextProps, SplitColContext } from '../SplitCol/SplitCol';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import { DOMProps, withDOM } from '../../lib/dom';
import { ScrollContext, ScrollContextInterface } from '../AppRoot/ScrollContext';
import { getNavId, NavIdProps } from '../../lib/getNavId';
import { warnOnce } from '../../lib/warnOnce';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { useTimeout } from '../../hooks/useTimeout';
import './Root.css';

const warn = warnOnce('Root');

export interface RootProps extends React.HTMLAttributes<HTMLDivElement>, HasPlatform, NavIdProps {
  activeView: string;
  onTransition?(params: { isBack: boolean; from: string; to: string }): void;
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

export type AnimationEndCallback = (e?: AnimationEvent) => void;

export interface RootState {
  activeView: string;
  prevView: string;
  nextView: string;
  isBack: boolean;
  transition: boolean;
}

const Root: React.FC<RootProps & DOMProps> = ({
  popout = null, modal, platform, children,
  splitCol, configProvider, activeView: _activeView, onTransition,
  window, document, scroll, nav,
  ...restProps
}) => {
  const [state, setState] = React.useState<RootState>({
    activeView: _activeView,
    prevView: null,
    nextView: null,
    isBack: undefined,
    transition: false,
  });
  const scrolls = React.useRef<Record<string, number>>({});
  const viewNodes = React.useRef<{ [id: string]: HTMLElement }>({});

  useIsomorphicLayoutEffect(() => {
    (document.activeElement as HTMLElement)?.blur();
  }, [!!popout, _activeView]);

  // Нужен переход
  useIsomorphicLayoutEffect(() => {
    const nextView = _activeView;
    const prevView = state.activeView;

    if (prevView === nextView) {
      return;
    }

    let pageYOffset = scroll.getScroll().y;
    const firstLayerId = [].concat(children)
      .map((view) => getNavId(view.props, warn))
      .find((id) => id === state.activeView || id === _activeView);
    const isBack = firstLayerId === _activeView;

    scrolls.current[_activeView] = pageYOffset;
    setState({
      transition: true,
      activeView: null,
      nextView,
      prevView,
      isBack,
    });
  }, [_activeView]);

  useIsomorphicLayoutEffect(() => {
    const { nextView, prevView, isBack, activeView } = state;

    // Кончился переход
    if (!state.transition) {
      scroll.scrollTo(0, isBack ? scrolls.current[activeView] : 0);
      onTransition && onTransition({ isBack, from: prevView, to: activeView });
      return;
    }

    // Начался переход
    const setPanelScroll = (e: HTMLElement, scroll: number) => {
      // eslint-disable-next-line no-restricted-properties
      const pan: HTMLElement | null = e.querySelector('[data-vkui-active-panel=true]');
      pan && (pan.scrollTop = scroll);
    };

    setPanelScroll(viewNodes.current[prevView], scrolls.current[prevView]);
    if (isBack) {
      setPanelScroll(viewNodes.current[nextView], scrolls.current[nextView]);
    }
  }, [state.transition]);

  const shouldDisableTransitionMotion = configProvider.transitionMotionEnabled === false || !splitCol.animate;

  const fallbackTransition = useTimeout(onAnimationEnd, platform === ANDROID || platform === VKCOM ? 300 : 600);
  React.useEffect(() => {
    if (!state.transition) {
      fallbackTransition.clear();
      return;
    }
    shouldDisableTransitionMotion ? onAnimationEnd() : fallbackTransition.set();
  }, [state.transition]);

  function onAnimationEnd(e?: React.AnimationEvent) {
    if (!e || [
      'vkui-root-android-animation-hide-back',
      'vkui-root-android-animation-show-forward',
      'vkui-root-ios-animation-hide-back',
      'vkui-root-ios-animation-show-forward',
    ].includes(e.animationName)) {
      setState({
        activeView: state.nextView,
        prevView: null,
        nextView: null,
        transition: false,
        isBack: undefined,
      });
    }
  };

  const { transition, isBack, prevView, activeView, nextView } = state;

  const Views = React.Children.toArray(children).filter((view: React.ReactElement) => {
    return [state.nextView, state.prevView, state.activeView].includes(getNavId(view.props, warn));
  });

  const baseClassName = getClassName('Root', platform);
  const disableAnimation = shouldDisableTransitionMotion;

  return (
    <div {...restProps} vkuiClass={classNames(baseClassName, {
      'Root--transition': !disableAnimation && transition,
      'Root--no-motion': disableAnimation,
    })}>
      {Views.map((view: React.ReactElement) => {
        const viewId = getNavId(view.props, warn);
        const isTransitionTarget = transition && viewId === (isBack ? prevView : nextView);
        return (
          <div
            key={viewId}
            ref={(e) => viewNodes.current[viewId] = e}
            onAnimationEnd={isTransitionTarget ? onAnimationEnd : null}
            vkuiClass={classNames('Root__view', {
              'Root__view--hide-back': viewId === prevView && isBack,
              'Root__view--hide-forward': viewId === prevView && !isBack,
              'Root__view--show-back': viewId === nextView && isBack,
              'Root__view--show-forward': viewId === nextView && !isBack,
              'Root__view--active': viewId === activeView,
            })}
          >{view}</div>
        );
      })}
      <AppRootPortal>
        {!!popout && <div vkuiClass="Root__popout">{popout}</div>}
        {!!modal && <div vkuiClass="Root__modal">{modal}</div>}
      </AppRootPortal>
    </div>
  );
};

export default withContext(withContext(withContext(
  withPlatform(withDOM<RootProps>(Root)),
  SplitColContext,
  'splitCol',
), ConfigProviderContext, 'configProvider'), ScrollContext, 'scroll');
