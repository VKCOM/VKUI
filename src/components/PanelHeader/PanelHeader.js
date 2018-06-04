import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import './PanelHeader.css';
import { platform, IOS, ANDROID } from '../../lib/platform';

const osname = platform();

export const baseClassNames = getClassName('PanelHeader');

export default class PanelHeader extends React.Component {

  static propTypes = {
    left: PropTypes.node,
    icon: PropTypes.node,
    right: PropTypes.node,
    children: PropTypes.node,
    theme: PropTypes.oneOf(['light', 'brand']),
    noShadow: PropTypes.bool
  };

  static defaultProps = {
    theme: 'brand',
    noShadow: false
  };

  static contextTypes = {
    panel: PropTypes.string,
    setHeaderTheme: PropTypes.func,
    document: PropTypes.any
  };

  state = {
    ready: false,
    rightWidth: null,
    leftWidth: null
  };

  get document () { return this.context.document || document; }

  componentDidMount () {
    this.leftNode = this.document.getElementById('header-left-' + this.context.panel);
    this.iconNode = this.document.getElementById('header-icon-' + this.context.panel);
    this.titleNode = this.document.getElementById('header-title-' + this.context.panel);
    this.rightNode = this.document.getElementById('header-right-' + this.context.panel);
    this.context.setHeaderTheme({
      [this.context.panel]: {theme: this.props.theme, noShadow: this.props.noShadow}
    });
    this.setState({ ready: true });
  }

  componentDidUpdate (prevProps, prevState) {
    if (!prevState.ready && this.state.ready && osname === IOS) {
      this.equalizeWidth();
    }
  }

  get iconWidth () { return this.iconEl ? this.iconEl.offsetWidth : 0; }

  equalizeWidth () {
    if (this.leftEl.offsetWidth + this.iconWidth > this.rightEl.offsetWidth) {
      this.setState({ rightWidth: this.leftEl.offsetWidth + this.iconWidth });
    } else {
      this.setState({ leftWidth: this.rightEl.offsetWidth - this.iconWidth });
    }
  }

  render () {
    let { left, icon, children, right } = this.props;

    if (osname === ANDROID && !left && icon) left = icon;

    return this.state.ready ? [
      ReactDOM.createPortal(
        <div ref={el => this.leftEl = el} className={classnames('PanelHeader-left-in', {
          [`PanelHeader-left-in--with-icon`]: icon
        })} style={{ width: this.state.leftWidth }}>
          { left }
        </div>, this.leftNode),
      osname === IOS && ReactDOM.createPortal(
        <div ref={el => this.iconEl = el} className="PanelHeader-icon">
          { icon }
        </div>, this.iconNode),
      ReactDOM.createPortal(<div className="PanelHeader-content">{children}</div>, this.titleNode),
      ReactDOM.createPortal(
        <div
          ref={el => this.rightEl = el}
          className="PanelHeader-right"
          style={{ width: this.state.rightWidth }}
        >
          { right }
        </div>, this.rightNode)
    ] : null;
  }
}
