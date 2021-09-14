import * as React from 'react';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import { animationEvent } from '../../lib/supportEvents';
import { ANDROID, VKCOM } from '../../lib/platform';
import { withPlatform } from '../../hoc/withPlatform';
import { withContext } from '../../hoc/withContext';
import { HasPlatform } from '../../types';
import { ConfigProviderContext, ConfigProviderContextInterface } from '../ConfigProvider/ConfigProviderContext';
import { SplitColContextProps, SplitColContext } from '../SplitCol/SplitCol';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import { canUseDOM, DOMProps, withDOM } from '../../lib/dom';
import { ScrollContext, ScrollContextInterface } from '../AppRoot/ScrollContext';
import { getNavId, NavIdProps } from '../../lib/getNavId';
import { warnOnce } from '../../lib/warnOnce';
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
  visibleViews: [string] | [string, string];
  isBack: boolean;
  scrolls: {
    [index: string]: number;
  };
  transition: boolean;
}

class Root extends React.Component<RootProps & DOMProps, RootState> {
  constructor(props: RootProps) {
    super(props);

    this.state = {
      activeView: props.activeView,
      prevView: null,
      nextView: null,
      visibleViews: [props.activeView],
      isBack: undefined,
      scrolls: {},
      transition: false,
    };
  }

  static defaultProps: Partial<RootProps> = {
    popout: null,
  };

  private animationFinishTimeout: ReturnType<typeof setTimeout>;
  private viewNodes: { [id: string]: HTMLElement } = {};

  get document() {
    return this.props.document;
  }

  componentDidUpdate(prevProps: RootProps, prevState: RootState) {
    if (this.props.popout && !prevProps.popout) {
      this.blurActiveElement();
    }

    // Нужен переход
    if (this.props.activeView !== prevProps.activeView) {
      let pageYOffset = this.props.scroll.getScroll().y;
      const firstLayerId = [].concat(prevProps.children)
        .map((view) => getNavId(view.props, warn))
        .find((id) => id === prevProps.activeView || id === this.props.activeView);
      const isBack = firstLayerId === this.props.activeView;

      this.blurActiveElement();

      const nextView = this.props.activeView;
      const prevView = prevProps.activeView;

      this.setState({
        scrolls: {
          ...this.state.scrolls,
          [prevProps.activeView]: pageYOffset,
        },
        transition: true,
        activeView: null,
        nextView,
        prevView,
        visibleViews: [nextView, prevView],
        isBack,
      });
    }

    // Начался переход
    if (!prevState.transition && this.state.transition) {
      const prevViewElement = this.viewNodes[this.state.prevView];
      const nextViewElement = this.viewNodes[this.state.nextView];
      const setPanelScroll = (e: HTMLElement, scroll: number) => {
        // eslint-disable-next-line no-restricted-properties
        const pan: HTMLElement | null = e.querySelector('[data-vkui-active-panel=true]');
        pan && (pan.scrollTop = scroll);
      };

      setPanelScroll(prevViewElement, this.state.scrolls[this.state.prevView]);

      if (this.state.isBack) {
        setPanelScroll(nextViewElement, this.state.scrolls[this.state.nextView]);
      }
      this.waitAnimationFinish(this.state.isBack ? prevViewElement : nextViewElement, this.onAnimationEnd);
    }
  }

  shouldDisableTransitionMotion(): boolean {
    return this.props.configProvider.transitionMotionEnabled === false ||
      !this.props.splitCol.animate;
  }

  waitAnimationFinish(elem: HTMLElement, eventHandler: AnimationEndCallback) {
    if (this.shouldDisableTransitionMotion()) {
      eventHandler();
      return;
    }

    if (animationEvent.supported) {
      elem.removeEventListener(animationEvent.name, eventHandler);
      elem.addEventListener(animationEvent.name, eventHandler);
    } else {
      clearTimeout(this.animationFinishTimeout);
      this.animationFinishTimeout = setTimeout(eventHandler.bind(this), this.props.platform === ANDROID || this.props.platform === VKCOM ? 300 : 600);
    }
  }

  onAnimationEnd: AnimationEndCallback = (e?: AnimationEvent) => {
    if (!e || [
      'vkui-root-android-animation-hide-back',
      'vkui-root-android-animation-show-forward',
      'vkui-root-ios-animation-hide-back',
      'vkui-root-ios-animation-show-forward',
    ].includes(e.animationName)) {
      const isBack = this.state.isBack;
      const prevView = this.state.prevView;
      const nextView = this.state.nextView;
      this.setState({
        activeView: nextView,
        prevView: null,
        nextView: null,
        visibleViews: [nextView],
        transition: false,
        isBack: undefined,
      }, () => {
        this.props.scroll.scrollTo(0, isBack ? this.state.scrolls[this.state.activeView] : 0);
        this.props.onTransition && this.props.onTransition({ isBack, from: prevView, to: nextView });
      });
    }
  };

  blurActiveElement() {
    if (canUseDOM && this.document.activeElement) {
      (this.document.activeElement as HTMLElement).blur();
    }
  }

  render() {
    const {
      popout, modal, platform,
      splitCol, configProvider, activeView: _1, onTransition,
      window, document, scroll, nav,
      ...restProps
    } = this.props;
    const { transition, isBack, prevView, activeView, nextView } = this.state;

    const Views = React.Children.toArray(this.props.children).filter((view: React.ReactElement) => {
      return this.state.visibleViews.includes(getNavId(view.props, warn));
    });

    const baseClassName = getClassName('Root', platform);
    const disableAnimation = this.shouldDisableTransitionMotion();

    return (
      <div {...restProps} vkuiClass={classNames(baseClassName, {
        'Root--transition': !disableAnimation && transition,
        'Root--no-motion': disableAnimation,
      })}>
        {Views.map((view: React.ReactElement) => {
          const viewId = getNavId(view.props, warn);
          return (
            <div key={viewId} ref={(e) => this.viewNodes[viewId] = e} vkuiClass={classNames('Root__view', {
              'Root__view--hide-back': viewId === prevView && isBack,
              'Root__view--hide-forward': viewId === prevView && !isBack,
              'Root__view--show-back': viewId === nextView && isBack,
              'Root__view--show-forward': viewId === nextView && !isBack,
              'Root__view--active': viewId === activeView,
            })}>
              {view}
            </div>
          );
        })}
        <AppRootPortal>
          {!!popout && <div vkuiClass="Root__popout">{popout}</div>}
          {!!modal && <div vkuiClass="Root__modal">{modal}</div>}
        </AppRootPortal>
      </div>
    );
  }
}

export default withContext(withContext(withContext(
  withPlatform(withDOM<RootProps>(Root)),
  SplitColContext,
  'splitCol',
), ConfigProviderContext, 'configProvider'), ScrollContext, 'scroll');
