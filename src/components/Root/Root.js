import React from 'react';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import getClassName from '../../helpers/getClassName';

import transitionEvents from '../../lib/transitionEvents';
import { ANDROID, platform } from '../../lib/platform';

const osname = platform();
const baseClassName = getClassName('Root');

export default class Root extends React.Component {
  constructor (props) {
    super();

    this.state = {
      activeView: props.activeView,
      prevView: null,
      nextView: null,
      visibleViews: [props.activeView],
      isBack: undefined,
      scrolls: {}
    };

    this.arrayChildren = React.Children.toArray(props.children);
  }

  static propTypes = {
    activeView: PropTypes.string.isRequired,
    popout: PropTypes.node,
    onTransition: PropTypes.func,
    children: PropTypes.node
  };

  static defaultProps = {
    popout: null
  };

  static contextTypes = {
    window: PropTypes.any,
    document: PropTypes.any
  };

  get document () {
    return this.context.document || document;
  }

  get window () {
    return this.context.window || window;
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.popout && !this.props.popout) {
      this.blurActiveElement();
    }

    if (nextProps.children !== this.props.children) {
      this.arrayChildren = React.Children.toArray(nextProps.children);
    }

    if (nextProps.activeView !== this.props.activeView) {
      let pageYOffset = this.window.pageYOffset;
      const firstLayerId = this.props.children.find(view => {
        return view.props.id === this.props.activeView || view.props.id === nextProps.activeView;
      }).props.id;
      const isBack = firstLayerId === nextProps.activeView;

      this.blurActiveElement();

      const nextView = nextProps.activeView;
      const prevView = this.props.activeView;

      this.setState({
        scrolls: Object.assign({}, this.state.scrolls, {
          [this.props.activeView]: pageYOffset
        }),
        transition: true,
        activeView: null,
        nextView,
        prevView,
        visibleViews: [nextView, prevView],
        isBack
      });
    }
  }

  componentDidUpdate (prevProps, prevState) {
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

  waitAnimationFinish (elem, eventHandler) {
    if (transitionEvents.supported) {
      const eventName = transitionEvents.prefix ? transitionEvents.prefix + 'AnimationEnd' : 'animationend';

      elem.removeEventListener(eventName, eventHandler);
      elem.addEventListener(eventName, eventHandler);
    } else {
      setTimeout(eventHandler.bind(this), osname === ANDROID ? 300 : 600);
    }
  }

  onAnimationEnd = (e = { manual: true }) => {
    if ([
      'root-android-animation-hide-back',
      'root-android-animation-show-forward',
      'root-ios-animation-hide-back',
      'root-ios-animation-show-forward'
    ].indexOf(e.animationName) > -1 || e.manual) {
      const isBack = this.state.isBack;
      const prevView = this.state.prevView;
      const nextView = this.state.nextView;
      this.setState({
        activeView: nextView,
        prevView: null,
        nextView: null,
        visibleViews: [nextView],
        transition: false,
        isBack: undefined
      }, () => {
        isBack ? this.window.scrollTo(0, this.state.scrolls[this.state.activeView]) : this.window.scrollTo(0, 0);
        this.props.onTransition && this.props.onTransition({ isBack, from: prevView, to: nextView });
      });
    }
  };

  blurActiveElement () {
    if (typeof this.window !== 'undefined' && this.document.activeElement) {
      this.document.activeElement.blur();
    }
  }

  render () {
    let Views = this.arrayChildren.filter(View => this.state.visibleViews.indexOf(View.props.id) >= 0);
    const { transition, isBack, prevView, activeView, nextView } = this.state;

    return (
      <div className={ classnames(baseClassName, { 'Root--transition': transition }) }>
        {Views.map(View => (
          <div key={View.props.id} id={`view-${View.props.id}`} className={classnames('Root__view', {
            'Root__view--hide-back': View.props.id === prevView && isBack,
            'Root__view--hide-forward': View.props.id === prevView && !isBack,
            'Root__view--show-back': View.props.id === nextView && isBack,
            'Root__view--show-forward': View.props.id === nextView && !isBack,
            'Root__view--active': View.props.id === activeView
          })}>
            {React.cloneElement(View, {
              inRoot: true,
              isNext: View.props.id === nextView,
              isPrev: View.props.id === prevView
            })}
          </div>
        ))}
        {this.props.popout && <div className="Root__popout">{this.props.popout}</div>}
      </div>
    );
  }
}
