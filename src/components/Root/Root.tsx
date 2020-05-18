import React, { Component, HTMLAttributes, ReactElement, ReactNode } from 'react';
import PropTypes, { Requireable, Validator } from 'prop-types';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import transitionEvents from '../../lib/transitionEvents';
import { ANDROID } from '../../lib/platform';
import withPlatform from '../../hoc/withPlatform';
import { HasPlatform } from '../../types';

export interface RootProps extends HTMLAttributes<HTMLDivElement>, HasPlatform {
  activeView: string;
  onTransition?(params: { isBack: boolean; from: string; to: string }): void;
  popout?: ReactNode;
  modal?: ReactNode;
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

export interface RootContext {
  document: Requireable<object>;
  window: Requireable<object>;
  transitionMotionEnabled: Validator<boolean>;
}

class Root extends Component<RootProps, RootState> {
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

  static contextTypes: RootContext = {
    window: PropTypes.any,
    document: PropTypes.any,
    transitionMotionEnabled: PropTypes.bool,
  };

  get document() {
    return this.context.document || document;
  }

  get window() {
    return this.context.window || window;
  }

  get arrayChildren() {
    return [].concat(this.props.children);
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
      const prevViewElement = this.document.getElementById(`view-${this.state.prevView}`);
      const nextViewElement = this.document.getElementById(`view-${this.state.nextView}`);

      prevViewElement.querySelector('.View__panel').scrollTop = this.state.scrolls[this.state.prevView];

      if (this.state.isBack) {
        nextViewElement.querySelector('.View__panel').scrollTop = this.state.scrolls[this.state.nextView];
      }
      this.waitAnimationFinish(this.state.isBack ? prevViewElement : nextViewElement, this.onAnimationEnd);
    }
  }

  shouldDisableTransitionMotion(): boolean {
    return this.context.transitionMotionEnabled === false;
  }

  waitAnimationFinish(elem: HTMLElement, eventHandler: AnimationEndCallback) {
    if (this.shouldDisableTransitionMotion()) {
      eventHandler();
      return;
    }

    if (transitionEvents.supported) {
      const eventName = transitionEvents.prefix ? transitionEvents.prefix + 'AnimationEnd' : 'animationend';

      elem.removeEventListener(eventName, eventHandler);
      elem.addEventListener(eventName, eventHandler);
    } else {
      setTimeout(eventHandler.bind(this), this.props.platform === ANDROID ? 300 : 600);
    }
  }

  onAnimationEnd: AnimationEndCallback = (e?: AnimationEvent) => {
    if (!e || [
      'root-android-animation-hide-back',
      'root-android-animation-show-forward',
      'root-ios-animation-hide-back',
      'root-ios-animation-show-forward',
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
      this.document.activeElement.blur();
    }
  }

  render() {
    const { popout, modal, platform } = this.props;
    const { transition, isBack, prevView, activeView, nextView } = this.state;

    const Views = this.arrayChildren.filter((view: ReactElement) => {
      return this.state.visibleViews.includes(view.props.id);
    });

    const baseClassName = getClassName('Root', platform);

    return (
      <div className={classNames(baseClassName, this.props.className, {
        'Root--transition': transition,
        'Root--no-motion': this.shouldDisableTransitionMotion(),
      })}>
        {Views.map((view: ReactElement) => {
          return (
            <div key={view.props.id} id={`view-${view.props.id}`} className={classNames('Root__view', {
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
        {!!popout && <div className="Root__popout">{popout}</div>}
        {!!modal && <div className="Root__modal">{modal}</div>}
      </div>
    );
  }
}

export default withPlatform(Root);
