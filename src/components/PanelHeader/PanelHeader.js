import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import './PanelHeader.css';

const leftClass = getClassName('PanelHeader-left');
const iconClass = getClassName('PanelHeader-icon');
const rightClass = getClassName('PanelHeader-right');

export default class PanelHeader extends React.Component {

  static propTypes = {
    left: PropTypes.node,
    icon: PropTypes.node,
    right: PropTypes.node,
    children: PropTypes.node
  };

  static contextTypes = {
    panel: PropTypes.string
  };

  state = {
    ready: false,
    rightWidth: null,
    leftWidth: null
  };

  node = null;

  componentDidMount () {
    this.leftNode = document.getElementById('header-left-' + this.context.panel);
    this.iconNode = document.getElementById('header-icon-' + this.context.panel);
    this.titleNode = document.getElementById('header-title-' + this.context.panel);
    this.rightNode = document.getElementById('header-right-' + this.context.panel);
    this.setState({ ready: true });
  }

  componentDidUpdate (prevProps, prevState) {
    if (!prevState.ready && this.state.ready) {
      this.equalizeWidth();
    }
  }

  equalizeWidth () {
    if (this.leftEl.offsetWidth + this.iconEl.offsetWidth > this.rightEl.offsetWidth) {
      this.setState({ rightWidth: this.leftEl.offsetWidth + this.iconEl.offsetWidth });
    } else {
      this.setState({ leftWidth: this.rightEl.offsetWidth - this.iconEl.offsetWidth });
    }
  }

  render () {
    const { left, icon, children, right } = this.props;

    return this.state.ready ? [
      ReactDOM.createPortal(
        <div ref={el => this.leftEl = el} className={classnames(leftClass, {
          [`PanelHeader-left--with-icon`]: icon
        })} style={{ width: this.state.leftWidth }}>
          { left && React.cloneElement(left, { position: 'left' }) }
        </div>, this.leftNode),
      ReactDOM.createPortal(
        <div ref={el => this.iconEl = el} className={iconClass}>
          { icon && React.cloneElement(icon, { position: 'icon' }) }
        </div>, this.iconNode),
      ReactDOM.createPortal(children, this.titleNode),
      ReactDOM.createPortal(
        <div ref={el => this.rightEl = el} className={rightClass} style={{ width: this.state.rightWidth }}>
          { right && React.cloneElement(right, { position: 'right' }) }
        </div>, this.rightNode)
    ] : null;
  }
}
