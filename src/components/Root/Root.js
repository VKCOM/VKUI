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
    let { activeView } = this.state;

    // Popout appearance
    if (!!nextProps.popout && !this.props.popout) {
      pageYOffset = window.pageYOffset;

      Root.blurActiveElement();
      scrolls = Object.assign({}, this.state.scrolls, {
        [activeView]: pageYOffset
      });

      this.setState({ scrolls }, function () {
        this.activeViewEl.scrollTop = scrolls[activeView];
      });
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
        scrolls,
        isBack
      }, () => {
        this.prevViewEl.scrollTop = scrolls[this.state.prevView] || 0;

        if (isBack) {
          this.nextViewEl.scrollTop = scrolls[this.state.nextView] || 0;
        }
      });
    }
  }

  componentDidUpdate (prevProps, prevState) {
    const { scrolls, activeView } = this.state;

    // Transition started
    if (this.state.nextView !== prevState.nextView && this.state.nextView !== null) {
      this.waitAnimationFinish(this.state.isBack ? this.prevViewEl : this.nextViewEl, this.onAnimationEnd);
    }

    // Popout hide
    if (prevProps.popout && !this.props.popout && scrolls[activeView]) {
      window.scrollTo(0, scrolls[activeView]);
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

  onAnimationEnd = () => {
    this.setState({
      activeView: this.state.nextView,
      prevView: null,
      nextView: null
    }, () => {
      if (this.state.isBack) {
        window.scrollTo(0, this.state.scrolls[this.state.activeView] || 0);
      }

      this.props.onTransition && this.props.onTransition(this.state.isBack);
    });
  };

  static blurActiveElement () {
    if (typeof window !== 'undefined' && document.activeElement) {
      document.activeElement.blur();
    }
  }

  render () {
    const transitionState = this.state.nextView !== null;
    const hasPopout = this.props.popout;

    return (
      <div className={ classnames(baseClassName, {
        'Root--transition': transitionState,
        'Root--popout': hasPopout
      }) }>
        { this.state.prevView &&
          <div className={`Root__view ${this.state.isBack ? 'Root__view--hide-back' : 'Root__view--hide-forward'}`} ref={el => { this.prevViewEl = el; }}>
            { this.findView(this.state.prevView) }
          </div>
        }
        { this.state.nextView &&
          <div className={`Root__view ${this.state.isBack ? 'Root__view--show-back' : 'Root__view--show-forward'}`} ref={el => { this.nextViewEl = el; }}>
            { this.findView(this.state.nextView) }
          </div>
        }
        { this.state.activeView &&
          <div className="Root__view Root__view--active" ref={el => { this.activeViewEl = el; }}>
            { this.findView(this.state.activeView) }
          </div>
        }
        {hasPopout && <div className="Root__popout">{this.props.popout}</div>}
      </div>
    );
  }
}
