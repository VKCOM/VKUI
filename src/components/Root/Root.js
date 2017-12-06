import React from 'react';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import getClassName from '../../helpers/getClassName';
import './Root.css';

const baseClassName = getClassName('Root');

export default class Root extends React.Component {

  constructor(props) {
    super();

    this.state = {
      activeView: props.activeView,
      prevView: null,
      nextView: null
    }
  }

  static propTypes = {
    activeView: PropTypes.string.isRequired
  };

  findView(id) {
    return React.Children.toArray(this.props.children).find(view => {
      return view.props.id === id
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeView !== this.props.activeView) {
      const firstLayerId = this.props.children.find(view => {
        return view.props.id === this.props.activeView || view.props.id === nextProps.activeView;
      }).props.id;

      const isBack = firstLayerId === nextProps.activeView;

      this.setState({
        activeView: null,
        nextView: nextProps.activeView,
        prevView: this.props.activeView,
        isBack
      }, () => {

      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.nextView !== prevState.nextView && this.state.nextView !== null) {

      (this.state.isBack ? this.prevView : this.nextView).addEventListener('animationend', () => {
        this.setState({
          activeView: this.state.nextView,
          prevView: null,
          nextView: null
        })
      })
    }
  }

  render() {
    const transitionState = this.state.nextView;

    return (
      <div className={ classnames(baseClassName, {
        'Root--transition': transitionState
      }) }>
        { this.state.prevView &&
          <div className={`Root__view ${ this.state.isBack ? 'Root__view--hide-back' : 'Root__view--hide-forward' }`} ref={ el => this.prevView = el }>
            { this.findView(this.state.prevView) }
          </div>
        }
        { this.state.nextView &&
          <div className={`Root__view ${ this.state.isBack ? 'Root__view--show-back' : 'Root__view--show-forward' }`} ref={ el => this.nextView = el }>
            { this.findView(this.state.nextView) }
          </div>
        }
        { this.state.activeView && this.findView(this.state.activeView) }
      </div>
    )
  }
}