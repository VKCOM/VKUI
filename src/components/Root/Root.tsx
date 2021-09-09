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

export interface RootState {
  activeView: string;
  prevView: string;
}

const Root: React.FC<RootProps & DOMProps> = ({
  popout = null, modal, platform, children,
  splitCol, configProvider, activeView: _activeView, onTransition,
  window, document, scroll, nav,
  ...restProps
}) => {
  const scrolls = React.useRef<Record<string, number>>({});
  const viewNodes = React.useRef<{ [id: string]: HTMLElement }>({});
  const [{ prevView, activeView }, setState] = React.useState<RootState>({
    activeView: _activeView,
    prevView: null,
  });

  // derived state
  const transition = !!prevView;
  const views = (React.Children.toArray(children) as React.ReactElement[])
    .filter((view) => [prevView, activeView].includes(getNavId(view.props, warn)));
  const isBack = transition && getNavId(views[0].props, warn) === activeView;

  useIsomorphicLayoutEffect(() => {
    (document.activeElement as HTMLElement)?.blur();
  }, [!!popout, activeView]);

  // Нужен переход
  useIsomorphicLayoutEffect(() => {
    if (_activeView !== activeView) {
      // save scroll
      scrolls.current[_activeView] = scroll.getScroll().y;
      // start transition
      setState({ activeView: _activeView, prevView: activeView });
    }
  }, [_activeView]);

  useIsomorphicLayoutEffect(() => {
    // Кончился переход
    if (transition) {
      // Начался переход
      const setPanelScroll = (e: HTMLElement, scroll: number) => {
        // eslint-disable-next-line no-restricted-properties
        const pan: HTMLElement | null = e.querySelector('[data-vkui-active-panel=true]');
        pan && (pan.scrollTop = scroll);
      };

      setPanelScroll(viewNodes.current[prevView], scrolls.current[prevView]);
      if (isBack) {
        setPanelScroll(viewNodes.current[activeView], scrolls.current[activeView]);
      }
    } else {
      scroll.scrollTo(0, isBack ? scrolls.current[activeView] : 0);
      onTransition && onTransition({ isBack, from: prevView, to: activeView });
    }
  }, [transition]);

  const shouldDisableTransitionMotion = configProvider.transitionMotionEnabled === false || !splitCol.animate;

  const fallbackTransition = useTimeout(onAnimationEnd, platform === ANDROID || platform === VKCOM ? 300 : 600);
  React.useEffect(() => {
    if (!transition) {
      fallbackTransition.clear();
      return;
    }
    shouldDisableTransitionMotion ? onAnimationEnd() : fallbackTransition.set();
  }, [transition]);

  function onAnimationEnd(e?: React.AnimationEvent) {
    if (!e || [
      'vkui-root-android-animation-hide-back',
      'vkui-root-android-animation-show-forward',
      'vkui-root-ios-animation-hide-back',
      'vkui-root-ios-animation-show-forward',
    ].includes(e.animationName)) {
      setState({ activeView, prevView: null });
    }
  };

  const baseClassName = getClassName('Root', platform);
  const disableAnimation = shouldDisableTransitionMotion;

  return (
    <div {...restProps} vkuiClass={classNames(baseClassName, {
      'Root--transition': !disableAnimation && transition,
      'Root--no-motion': disableAnimation,
    })}>
      {views.map((view) => {
        const viewId = getNavId(view.props, warn);
        const isTransitionTarget = transition && viewId === (isBack ? prevView : activeView);
        return (
          <div
            key={viewId}
            ref={(e) => viewNodes.current[viewId] = e}
            onAnimationEnd={isTransitionTarget ? onAnimationEnd : null}
            vkuiClass={classNames('Root__view', {
              'Root__view--hide-back': transition && viewId === prevView && isBack,
              'Root__view--hide-forward': transition && viewId === prevView && !isBack,
              'Root__view--show-back': transition && viewId === activeView && isBack,
              'Root__view--show-forward': transition && viewId === activeView && !isBack,
              'Root__view--active': !transition && viewId === activeView,
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
