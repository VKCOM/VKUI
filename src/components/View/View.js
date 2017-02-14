import './View.css';
import React, { Component, PropTypes } from 'react';
import classnames from '../../lib/classnames';
import getClassName from '../../helpers/getClassName';

const baseClassNames = getClassName('View');

export default class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      children: [props.children],
      activePanel: props.activePanel
    };
  }
  static propTypes = {
    style: PropTypes.object,
    activePanel: PropTypes.string.isRequired
  };
  static defaultProps = {
    style: {}
  };
  componentWillReceiveProps(nextProps) {
    if (this.state.activePanel !== nextProps.activePanel) {
      this.setState({
        prevPanel: this.state.activePanel,
        nextPanel: nextProps.activePanel,
        activePanel: null,
        animated: true
      });
    }
  }
  transitionEndHandler = () => {
    this.setState({
      activePanel: this.props.activePanel,
      animated: false
    });
  }
  render() {
    const { style, popout } = this.props;
    const { prevPanel, nextPanel, activePanel } = this.state;
    const hasPopout = typeof popoutContent !== 'undefined';
    const panels = [].concat(this.props.children).filter(a => !!a);
    const modifiers = {
      'View--popout': hasPopout,
      'View--animated': this.state.animated
    };

    return (
      <section className={classnames(baseClassNames, modifiers)} style={style}>
        <div className="View__panels">
          {panels.map((panel, i) => (
            <div
              className={classnames('View__panel', {
                'View__panel--active': panel.props.id === activePanel,
                'View__panel--prev': panel.props.id === prevPanel,
                'View__panel--next': panel.props.id === nextPanel
              })}
              onTransitionEnd={this.transitionEndHandler}
              key={panel.key || panel.props.id}
            >
              {panel}
            </div>
          ))}
        </div>
        {hasPopout && <div className="View__mask" />}
        {hasPopout && <div className="View__popout">{popout}</div>}
      </section>
    );
  }
}