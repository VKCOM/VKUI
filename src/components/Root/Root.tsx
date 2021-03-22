import React, { Component, HTMLAttributes, ReactElement, ReactNode } from 'react';
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
import { DOMProps, withDOM } from '../../lib/dom';

export interface RootProps extends HTMLAttributes<HTMLDivElement>, HasPlatform {
  activeView: string;
  onTransition?(params: { isBack: boolean; from: string; to: string }): void;
  popout?: ReactNode;
  modal?: ReactNode;
  /**
   * @ignore
   */
  splitCol?: SplitColContextProps;
  /**
   * @ignore
   */
  configProvider?: ConfigProviderContextInterface;
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

class Root extends Component<RootProps & DOMProps, RootState> {
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

  get window() {
    return this.props.window;
  }

  componentDidUpdate(prevProps: RootProps, prevState: RootState) {
    if (this.props.popout && !prevProps.popout) {
      this.blurActiveElement();
    }

    // Нужен переход
    if (this.props.activeView !== prevProps.activeView) {
      let pageYOffset = this.window.pageYOffset;
      const firstLayerId = [].concat(prevProps.children).find((view: ReactElement) => {
        return view.props.id === prevProps.activeView || view.props.id === this.props.activeView;
      }).props.id;
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
        this.window.scrollTo(0, isBack ? this.state.scrolls[this.state.activeView] : 0);
        this.props.onTransition && this.props.onTransition({ isBack, from: prevView, to: nextView });
      });
    }
  };

  blurActiveElement() {
    if (typeof this.window !== 'undefined' && this.document.activeElement) {
      (this.document.activeElement as HTMLElement).blur();
    }
  }

  render() {
    const {
      popout, modal, platform,
      splitCol, configProvider, activeView: _1, onTransition,
      window, document,
      ...restProps
    } = this.props;
    const { transition, isBack, prevView, activeView, nextView } = this.state;

    const Views = React.Children.toArray(this.props.children).filter((view: ReactElement) => {
      return this.state.visibleViews.includes(view.props.id);
    });

    const baseClassName = getClassName('Root', platform);
    const disableAnimation = this.shouldDisableTransitionMotion();

    return (
      <div {...restProps} vkuiClass={classNames(baseClassName, {
        'Root--transition': !disableAnimation && transition,
        'Root--no-motion': disableAnimation,
      })}>
        {Views.map((view: ReactElement) => {
          return (
            <div key={view.props.id} ref={(e) => this.viewNodes[view.props.id] = e} vkuiClass={classNames('Root__view', {
              'Root__view--hide-back': view.props.id === prevView && isBack,
              'Root__view--hide-forward': view.props.id === prevView && !isBack,
              'Root__view--show-back': view.props.id === nextView && isBack,
              'Root__view--show-forward': view.props.id === nextView && !isBack,
              'Root__view--active': view.props.id === activeView,
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

export default withContext(withContext(
  withPlatform(withDOM<RootProps>(Root)),
  SplitColContext,
  'splitCol',
), ConfigProviderContext, 'configProvider');
