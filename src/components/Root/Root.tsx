import * as React from 'react';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import { IOS } from '../../lib/platform';
import { ConfigProviderContext } from '../ConfigProvider/ConfigProviderContext';
import { SplitColContext } from '../SplitCol/SplitCol';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import { ScrollContext } from '../AppRoot/ScrollContext';
import { getNavId, NavIdProps } from '../../lib/getNavId';
import { warnOnce } from '../../lib/warnOnce';
import { useDOM } from '../../lib/dom';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { useTimeout } from '../../hooks/useTimeout';
import { usePlatform } from '../../hooks/usePlatform';
import './Root.css';

const warn = warnOnce('Root');

export interface RootProps extends React.HTMLAttributes<HTMLDivElement>, NavIdProps {
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
}

export interface RootState {
  activeView: string;
  transition: boolean;
  isBack?: boolean;
  prevView?: string;
}

const Root: React.FC<RootProps> = ({
  popout = null, modal, children,
  activeView: _activeView, onTransition,
  nav,
  ...restProps
}) => {
  const scroll = React.useContext(ScrollContext);
  const platform = usePlatform();
  const { document } = useDOM();
  const scrolls = React.useRef<Record<string, number>>({}).current;
  const viewNodes = React.useRef<Record<string, HTMLElement>>({}).current;

  const { transitionMotionEnabled = true } = React.useContext(ConfigProviderContext);
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
      _setState({ activeView: panel, prevView: activeView, transition: true, isBack });
    }
  };
  const finishTransition = () => _setState({ activeView, prevView, isBack, transition: false });

  useIsomorphicLayoutEffect(() => {
    (document.activeElement as HTMLElement)?.blur();
  }, [!!popout, activeView]);

  // Нужен переход
  useIsomorphicLayoutEffect(() => transitionTo(_activeView), [_activeView]);
  // scroll restoration
  useIsomorphicLayoutEffect(() => {
    if (transition) {
      // save scroll
      scrolls[prevView] = scroll.getScroll().y;
      setPanelScroll(viewNodes[prevView], scrolls[prevView]);
      isBack && setPanelScroll(viewNodes[activeView], scrolls[activeView]);
    } else if (prevView) {
      // Закончился переход
      scroll.scrollTo(0, isBack ? scrolls[activeView] : 0);
    }
  }, [transition]);
  // onTransition
  useIsomorphicLayoutEffect(() => {
    if (!transition && prevView) {
      onTransition && onTransition({ isBack, from: prevView, to: activeView });
    }
  }, [transition]);

  const fallbackTransition = useTimeout(finishTransition, platform === IOS ? 600 : 300);
  React.useEffect(() => {
    if (!transition) {
      fallbackTransition.clear();
      return;
    }
    disableAnimation ? finishTransition() : fallbackTransition.set();
  }, [transition]);

  const onAnimationEnd = (e: React.AnimationEvent) => {
    if ([
      'vkui-root-android-animation-hide-back',
      'vkui-root-android-animation-show-forward',
      'vkui-root-ios-animation-hide-back',
      'vkui-root-ios-animation-show-forward',
    ].includes(e.animationName)) {
      finishTransition();
    }
  };

  return (
    <div {...restProps} vkuiClass={classNames(getClassName('Root', platform), {
      'Root--transition': !disableAnimation && transition,
      'Root--no-motion': disableAnimation,
    })}>
      {views.map((view) => {
        const viewId = getNavId(view.props, warn);
        if (viewId !== activeView && !(transition && viewId === prevView)) {
          return null;
        }
        const isTransitionTarget = transition && viewId === (isBack ? prevView : activeView);
        return (
          <div
            key={viewId}
            ref={(e) => viewNodes[viewId] = e}
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

export default Root;

function setPanelScroll(e: HTMLElement, scroll: number) {
  // eslint-disable-next-line no-restricted-properties
  const pan: HTMLElement | null = e.querySelector('[data-vkui-active-panel=true]');
  pan && (pan.scrollTop = scroll);
}
