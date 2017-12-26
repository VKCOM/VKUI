import React from 'react';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import getClassName from '../../helpers/getClassName';
import './Root.css';
import transitionEvents from '../../lib/transitionEvents';
import {ANDROID, platform} from '../../lib/platform';

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
      scrolls: {}
    };
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

  componentWillReceiveProps (nextProps) {
    let scrolls, pageYOffset;

    // Popout appearance
    if (!!nextProps.popout && !this.props.popout) {
      Root.blurActiveElement();
    }

    // View changing
    if (nextProps.activeView !== this.props.activeView) {
      pageYOffset = pageYOffset || window.pageYOffset;
      const firstLayerId = this.props.children.find(view => {
        return view.props.id === this.props.activeView || view.props.id === nextProps.activeView;
      }).props.id;
      const isBack = firstLayerId === nextProps.activeView;

      Root.blurActiveElement();
      scrolls = scrolls || Object.assign({}, this.state.scrolls, {
        [this.props.activeView]: pageYOffset
      });

      this.setState({
        activeView: null,
        nextView: nextProps.activeView,
        prevView: this.props.activeView,
        visibleViews: [nextProps.activeView, this.props.activeView],
        scrolls,
        isBack
      }, () => {
        window.addEventListener('touchmove', this.preventTouch);

        if (isBack) {
          this.prevViewEl.querySelector('.View__panels').scrollTop = scrolls[this.state.prevView] || 0;
          window.scrollTo(0, scrolls[this.state.nextView]);
        }
      });
    }
  }

  preventTouch = (e) => e.preventDefault();

  componentDidUpdate (prevProps, prevState) {
    // Transition started
    if (this.state.nextView !== prevState.nextView && this.state.nextView !== null) {
      this.waitAnimationFinish(this.state.isBack ? this.prevViewEl : this.nextViewEl, this.onAnimationEnd);
    }
  }

  findView (id) {
    return React.Children.toArray(this.props.children).find(view => {
      return view.props.id === id;
    });
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

  onAnimationEnd = (e) => {
    if (!this.state.isBack && e.target === this.nextViewEl || this.state.isBack && e.target === this.prevViewEl) {
      this.setState({
        activeView: this.state.nextView,
        prevView: null,
        nextView: null,
        visibleViews: [this.state.nextView]
      }, () => {
        if (this.state.isBack) {
          window.scrollTo(0, this.state.scrolls[this.state.activeView] || 0);
        } else {
          window.scrollTo(0, 0);
        }

        window.removeEventListener('touchmove', this.preventTouch);

        this.props.onTransition && this.props.onTransition(this.state.isBack);
      });
    }
  };

  static blurActiveElement () {
    if (typeof window !== 'undefined' && document.activeElement) {
      document.activeElement.blur();
    }
  }

  render () {
    const transitionState = this.state.nextView !== null;
    const hasPopout = this.props.popout;

    let Views = [].concat(this.props.children).filter((View) => this.state.visibleViews.indexOf(View.props.id) >= 0);

    return (
      <div className={ classnames(baseClassName, {
        'Root--transition': transitionState
      }) }>
        { Views.map(View => (
          <div key={View.props.id} className={classnames('Root__view', {
            'Root__view--hide-back': View.props.id === this.state.prevView && this.state.isBack,
            'Root__view--hide-forward': View.props.id === this.state.prevView && !this.state.isBack,
            'Root__view--show-back': View.props.id === this.state.nextView && this.state.isBack,
            'Root__view--show-forward': View.props.id === this.state.nextView && !this.state.isBack,
            'Root__view--active': View.props.id === this.state.activeView
          })} ref={ el => {
            if (View.props.id === this.state.prevView) this.prevViewEl = el;
            if (View.props.id === this.state.nextView) this.nextViewEl = el;
            if (View.props.id === this.state.activeView) this.activeViewEl = el;
          } }>
            { View }
          </div>
        )) }
        {hasPopout && <div className="Root__popout">{this.props.popout}</div>}
      </div>
    );
  }
}
